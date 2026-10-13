
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_yf8z2is",
        "template_cpdr3u8",
        { name, email, message },
        { publicKey: "8tcfQlD9xotaG3_El" }
      );

      setStatus("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(JSON.stringify(error));
      setStatus("Sorry, your message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#344f43] px-6 py-16 text-white md:px-16 md:py-20"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d5b095]">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Let&apos;s start a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Share a little about what brings you here.
            You deserve a space where you feel heard and supported.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 text-[#253b35] shadow-lg sm:p-10"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#d8ddd4] bg-[#faf8f4] px-5 py-4 outline-none focus:border-[#344f43] focus:ring-2 focus:ring-[#344f43]/20"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#d8ddd4] bg-[#faf8f4] px-5 py-4 outline-none focus:border-[#344f43] focus:ring-2 focus:ring-[#344f43]/20"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className="w-full resize-y rounded-xl border border-[#d8ddd4] bg-[#faf8f4] px-5 py-4 outline-none focus:border-[#344f43] focus:ring-2 focus:ring-[#344f43]/20"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-7 w-full rounded-full bg-[#344f43] px-6 py-4 font-medium text-white transition hover:bg-[#263d33] disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p role="status" aria-live="polite" className="mt-4 text-center text-sm">
              {status}
            </p>
          )}

          <p className="mt-6 text-center text-sm leading-6 text-[#65716a]">
            Please avoid sharing sensitive medical information through this form.
          </p>
        </form>
      </div>
    </section>
  );
}
