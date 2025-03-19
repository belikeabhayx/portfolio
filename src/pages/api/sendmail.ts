import { NextApiRequest, NextApiResponse } from "next";
// import { createTransport } from "nodemailer";
import { v4 } from "uuid";
import { rateLimiterApi } from "@/utility/rateLimiter";
import { ValidationError } from "yup";
import { mailValidationSchema } from "@/components/ContactForm";

const REQUEST_PER_HOUR = 2 as const;
const RATELIMIT_DURATION = 3600000 as const;
const MAX_USER_PER_SECOND = 100 as const;

/*
  Rate Limiting Strategy:

  WARNING: This rate limiting strategy uses a combination of client IP address and user agent for identification.
  - Pros: Provides a more robust identification mechanism.
  - Cons: 
    - Users behind certain proxies or networks might share the same IP address.
    - Determined attackers can still potentially circumvent these measures.
    - Privacy concerns: Collecting IP addresses and user agents may raise privacy considerations.
  
  If either the client's IP address or user agent is missing, a fallback mechanism defaults to using a UUID stored in cookies.
  - Pros: Ensures a default identification mechanism is in place.
  - Cons: UUIDs may not be entirely foolproof and can be manipulated by users.

  Always consider the privacy implications of collecting and using such information. Be transparent with users about the data you collect for rate limiting purposes.
*/
const limiter = rateLimiterApi({
  interval: RATELIMIT_DURATION,
  uniqueTokenPerInterval: MAX_USER_PER_SECOND,
  getUserId: (req: NextApiRequest, res: NextApiResponse) => {
    const userIp =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    const userAgent = req.headers["user-agent"] || "";
    if (!userIp || !userAgent) {
      let userUuidToken = req.cookies.userUuid;
      if (userUuidToken) {
        const cookieExpiration = req.cookies.userUuid_expires;
        if (cookieExpiration) {
          const expirationDate = new Date(cookieExpiration);
          if (expirationDate && expirationDate <= new Date()) {
            // Cookie has expired, generate a new UUID
            const newUuidToken = v4();
            res.setHeader(
              "Set-Cookie",
              `userUuid=${newUuidToken}; Max-Age=${
                60 * 60 * 24
              }; SameSite=Strict`,
            );

            // Set a new expiration date (e.g., 24 hours from now)
            const newExpirationDate = new Date();
            newExpirationDate.setSeconds(
              newExpirationDate.getSeconds() + 60 * 60 * 24,
            );
            res.setHeader(
              "Set-Cookie",
              `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${
                60 * 60 * 24
              }; SameSite=Strict`,
            );

            return newUuidToken;
          }
          return userUuidToken;
        }
        userUuidToken = v4();
        res.setHeader(
          "Set-Cookie",
          `userUuid=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`,
        );
        const newExpirationDate = new Date();
        newExpirationDate.setSeconds(
          newExpirationDate.getSeconds() + 60 * 60 * 24,
        );
        res.setHeader(
          "Set-Cookie",
          `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${
            60 * 60 * 24
          }; SameSite=Strict`,
        );
        return userUuidToken;
      } else {
        userUuidToken = v4();
        res.setHeader(
          "Set-Cookie",
          `userUuid=${userUuidToken}; Max-Age=${60 * 60 * 24}; SameSite=Strict`,
        );
        const newExpirationDate = new Date();
        newExpirationDate.setSeconds(
          newExpirationDate.getSeconds() + 60 * 60 * 24,
        );
        res.setHeader(
          "Set-Cookie",
          `userUuid_expires=${newExpirationDate.toUTCString()}; Max-Age=${
            60 * 60 * 24
          }; SameSite=Strict`,
        );
        return userUuidToken;
      }
    }
    const userId = `${userIp}-${userAgent}`;
    return userId;
  },
});

// type MailRequestBody = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const sendMail = async function (
//   name: string,
//   email: string | "SELF",
//   subject: string,
//   message: string,
// ): Promise<{ status: number; message: string }> {
//   const user = process.env.NODEMAILER_USER;
//   const pass = process.env.NODEMAILER_PASS;

//   if (!user && !pass) {
//     return new Promise((resolve) =>
//       resolve({ status: 500, message: "Internal server error" }),
//     );
//   }

//   const transporter = createTransport({
//     service: "gmail",
//     auth: {
//       user,
//       pass,
//     },
//   });

//   const mailOptions = {
//     from: process.env.NODEMAILER_USER,
//     to: process.env.NODEMAILER_USER,
//     subject: "Portfolio: [" + subject + " ]",
//     text: `${name}: <${email}>\n${message}`,
//   };

//   return new Promise((resolve) => {
//     transporter.sendMail(mailOptions, (error) => {
//       if (error) {
//         resolve({ status: 500, message: "Failed to send mail" });
//       } else {
//         resolve({ status: 200, message: "Mail send successfully" });
//       }
//     });
//   });
// };

// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse<{ status: number; message: string | string[] }>,
// ) => {
//   try {
//     const { method } = req;
//     if (method !== "POST") {
//       res.status(400).json({
//         status: 405,
//         message: `[${method}] is not allowed`,
//       });
//       return;
//     }
//     const body: MailRequestBody = req.body;

//     const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
//     if (isRateLimited.status !== 200) return;

//     try {
//       await mailValidationSchema.validate(body, { abortEarly: false });
//     } catch (validationError) {
//       if (validationError instanceof ValidationError) {
//         res.status(422).json({
//           status: 422,
//           message: validationError.errors,
//         });
//       } else {
//         res.status(500).json({
//           status: 500,
//           message: "Internal server error",
//         });
//       }
//       return;
//     }

//     const { name, email, subject, message } = body;

//     const response = await sendMail(name, email, subject, message);
//     res.status(response.status).send(response);
//   } catch (error: any) {
//     if (error?.status === 429) {
//       res.status(429).json({ status: 429, message: "Rate limit exceeded" });
//     } else {
//       res.status(error.status || 500).json({
//         status: 500,
//         message: error.message || "Internal server error",
//       });
//     }
//   }
// };

// export default handler;

type MailRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string | string[] }>,
) => {
  try {
    const { method } = req;
    if (method !== "POST") {
      res.status(400).json({
        status: 405,
        message: `[${method}] is not allowed`,
      });
      return;
    }
    const body: MailRequestBody = req.body;

    const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
    if (isRateLimited.status !== 200) return;

    try {
      await mailValidationSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        res.status(422).json({
          status: 422,
          message: validationError.errors,
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "Internal server error",
        });
      }
      return;
    }

    const { name, email, subject, message } = body;

    const messageToSend = `
    🌟 Portfolio Visitor Notification:
    ------------------------------------------
    👤 Name: ${name}
    📧 Email: ${email}
    📜 Subject: ${subject}
    📝 Message: ${message}
    ------------------------------------------
    
    🔔 Please ensure timely follow-up with the visitor.
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: messageToSend,
        }),
      },
    );

    if (response.ok) {
      res.status(200).json({
        status: response.status,
        message: "Message sent successfully",
      });
    } else {
      res.status(response.status).json({
        status: response.status,
        message: "Failed to send message",
      });
    }
  } catch (error: any) {
    if (error?.status === 429) {
      res.status(429).json({ status: 429, message: "Rate limit exceeded" });
    } else {
      res.status(error.status || 500).json({
        status: 500,
        message: error.message || "Internal server error",
      });
    }
  }
};

export default handler;
