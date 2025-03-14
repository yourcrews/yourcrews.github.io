'use client'
import clsx from "clsx";
import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/myzyalpo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-2xl font-bold mb-2">Thank you for your message!</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">We'll get back to you soon.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className={clsx(
            "py-2.5 px-6 bg-neutral-900 text-neutral-300 dark:bg-neutral-50 dark:text-neutral-950 hover:dark:bg-neutral-50 hover:bg-neutral-900 hover:scale-[101%] duration-300 transition-all"
          )}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col flex-grow gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="w-full py-2 px-3 dark:bg-neutral-900 bg-neutral-200 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-800"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 dark:border-neutral-700 focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <textarea
          className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 focus:outline-none dark:border-neutral-700"
          rows={5}
          placeholder="Message"
          name="message"
          required
        />
        <button
          className={clsx(
            "py-2.5 bg-neutral-900 text-neutral-300 dark:bg-neutral-50 dark:text-neutral-950 flex justify-center hover:dark:bg-neutral-50 hover:bg-neutral-900 hover:scale-[101%] duration-300 transition-all",
            isSubmitting && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
