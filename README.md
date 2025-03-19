# KD Portfolio

This portfolio is built using [Next.js](https://nextjs.org/).

## 🛠️ Technologies Utilized

- [Next.js](https://nextjs.org/): A React-based framework for developing scalable web applications.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript for enhanced developer productivity.
- [Framer Motion](https://www.framer.com/motion/): A React animation library for creating delightful user interfaces.
- [Nodemailer](https://nodemailer.com/): A Node.js library for seamless email integration, supporting features like attachment handling and HTML content.

## 🚨 Important Reminders

1. **Avoid exposing Nodemailer credentials on GitHub**. Store sensitive information like passwords securely in a `.env` file.
2. Utilize [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) for Nodemailer transporters and mail sending functions to ensure server-side execution and protect sensitive data.

## ✉️ Setting Up Nodemailer

### Generating Nodemailer User and Password

1. Access your Google Account settings.
2. Navigate to `Security` > `2-Step Verification` > `App passwords`.
3. Generate an app password (e.g., portfolio-nodemailer) and securely store it.
4. Use this generated password as the value for `NODEMAILER_PASS` and your email as `NODEMAILER_USER` in the `.env` file.

## ✨ SEO Considerations

1. The portfolio automatically generates `sitemap.xml` and `robots.txt` files based on the project's structure.
2. Dynamic routes (e.g., those with square brackets in file or folder names) are excluded from the sitemap.
3. For Google Search Console verification, insert the verification tag content in `src/data/siteMetadata.js`.

## 🛠️ Development Setup

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```
