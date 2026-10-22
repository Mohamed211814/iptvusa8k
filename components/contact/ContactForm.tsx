"use client";

import React, { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const defaultSubject = planParam
    ? `Inquiry regarding ${planParam.replace("-", " ").toUpperCase()} Subscription Plan`
    : "";

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <div className="rounded-2xl bg-[#f4e9f1]/70 border border-[#ebb0ad]/60 p-6 sm:p-8 shadow-xl">
      {state.success ? (
        <div className="p-6 rounded-xl bg-white border border-[#ebb0ad] text-center flex flex-col items-center shadow-md">
          <div className="w-12 h-12 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mb-4 shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#29166f] mb-2">IPTV USA Support: Message Sent Successfully</h3>
          <p className="text-sm text-[#392b6b] max-w-md leading-relaxed mb-6">
            {state.message}
          </p>

          {/* Quick WhatsApp follow-up button */}
          <a
            href={`https://wa.me/212779395271?text=${encodeURIComponent(
              `Hello IPTV USA, I just submitted an inquiry on your website. Name: ${
                state.submittedData?.name || ""
              }, Subject: ${state.submittedData?.subject || "Support Inquiry"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-500/20 mb-5 transition-all"
          >
            <span>Continue on WhatsApp (Instant Reply)</span>
          </a>

          <a
            href="/contact"
            className="text-xs font-semibold text-[#c62b27] hover:underline"
          >
            Send another message
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Quick WhatsApp Guidance Banner */}
          <div className="p-4 rounded-xl bg-white border border-[#059669]/30 flex items-center justify-between flex-wrap gap-3 shadow-sm">
            <div className="text-left text-xs sm:text-sm text-[#392b6b]">
              <strong className="block text-[#059669] font-bold">Need faster assistance or instant ordering?</strong>
              <span>Message our support desk directly on WhatsApp for real time assistance</span>
            </div>
            <a
              href="https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] transition-colors shadow-sm"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <form action={formAction} noValidate className="space-y-6">
          {/* Global Error Banner */}
          {state.message && !state.success && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-[#c62b27]/10 border border-[#c62b27]/30 text-[#c62b27] text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#c62b27]" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Honeypot field (hidden from real users to catch bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_fax">Leave this field empty</label>
            <input
              type="text"
              name="company_fax"
              id="company_fax"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#29166f] mb-2"
              >
                Full Name <span className="text-[#c62b27]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isPending}
                placeholder="John Doe"
                aria-describedby={state.errors?.name ? "name-error" : undefined}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#887eaa]/30 text-[#29166f] placeholder-[#887eaa] focus:outline-none focus:ring-2 focus:ring-[#e3af2a] focus:border-transparent transition-colors text-sm disabled:opacity-50 shadow-sm"
              />
              {state.errors?.name && (
                <p id="name-error" className="mt-1.5 text-xs text-[#c62b27]">
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#29166f] mb-2"
              >
                Email Address <span className="text-[#c62b27]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isPending}
                placeholder="john@example.com"
                aria-describedby={state.errors?.email ? "email-error" : undefined}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#887eaa]/30 text-[#29166f] placeholder-[#887eaa] focus:outline-none focus:ring-2 focus:ring-[#e3af2a] focus:border-transparent transition-colors text-sm disabled:opacity-50 shadow-sm"
              />
              {state.errors?.email && (
                <p id="email-error" className="mt-1.5 text-xs text-[#c62b27]">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-[#29166f] mb-2"
            >
              Subject <span className="text-[#c62b27]">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              defaultValue={defaultSubject}
              disabled={isPending}
              placeholder="E.g., Subscription Inquiry or Setup Question"
              aria-describedby={state.errors?.subject ? "subject-error" : undefined}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#887eaa]/30 text-[#29166f] placeholder-[#887eaa] focus:outline-none focus:ring-2 focus:ring-[#e3af2a] focus:border-transparent transition-colors text-sm disabled:opacity-50 shadow-sm"
            />
            {state.errors?.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-[#c62b27]">
                {state.errors.subject[0]}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#29166f] mb-2"
            >
              Your Message <span className="text-[#c62b27]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isPending}
              placeholder="Tell us which device you use (e.g. Firestick, Smart TV, Apple TV) and what questions you have..."
              aria-describedby={state.errors?.message ? "message-error" : undefined}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#887eaa]/30 text-[#29166f] placeholder-[#887eaa] focus:outline-none focus:ring-2 focus:ring-[#e3af2a] focus:border-transparent transition-colors text-sm resize-y disabled:opacity-50 shadow-sm"
            />
            {state.errors?.message && (
              <p id="message-error" className="mt-1.5 text-xs text-[#c62b27]">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] shadow-lg shadow-[#c62b27]/25 border border-[#ffd700]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#ffd700]" />
                  <span>Send Message to Support Desk</span>
                </>
              )}
            </button>
            <p className="text-xs text-center text-[#887eaa] mt-3">
              We respect your privacy. Inquiries are handled confidentially by our support specialists.
            </p>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}
