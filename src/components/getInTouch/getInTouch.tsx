import React from "react";

import { Sparkles } from "lucide-react";
import ContactForm from "./contactForm";

const GetInTouch: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-grow">
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[#111] px-4 py-1.5">
              <Sparkles className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                Let's Build Something Together
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Get in Touch
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Ready to transform your vision into reality? Drop me a message
              below.
            </p>
          </div>

          <div className="rounded-2xl bg-[#111]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h2 className="mb-6 text-2xl font-semibold text-white">
                      Contact Information
                    </h2>
                    <div className="space-y-6 text-gray-500">
                      <p className="text-lg">
                        Let's discuss your project and explore how we can create
                        something extraordinary together.
                      </p>
                      <div className="mt-8 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <span>📍</span>
                          </div>
                          <span>INDIA</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <span>📧</span>
                          </div>
                          <a
                            href="mailto: chauhanabhay.chauhan2@gmail.com"
                            className="transition-colors hover:text-gray-400"
                          >
                            chauhanabhay.chauhan2@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <span>📱</span>
                          </div>
                          <span>+1 (234) 567-8900</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="mb-4 font-semibold text-white">Follow Me</h3>
                    <div className="flex space-x-4">
                      {["Twitter", "GitHub", "LinkedIn", "Instagram"].map(
                        (platform) => (
                          <a
                            key={platform}
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-gray-500 transition-colors hover:text-gray-400"
                          >
                            {platform[0]}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-r-2xl bg-black p-8 lg:p-12 border border-zinc-900">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetInTouch;
