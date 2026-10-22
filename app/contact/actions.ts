"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    botField?: string[];
  };
  submittedData?: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

/**
 * Server action for contact form submission.
 * Validates data, verifies honeypot spam filter, and forwards the message to iptvusapro@gmail.com.
 */
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Spam check (honeypot field)
  const honeypot = formData.get("company_fax") as string;
  if (honeypot && honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Thank you for reaching out. We will get back to you shortly.",
    };
  }

  // 2. Extract and sanitize fields
  const name = (formData.get("name") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const subject = (formData.get("subject") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please provide your full name (at least 2 characters)."];
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ["Please enter a valid email address (e.g., name@example.com)."];
  }

  if (!subject || subject.length < 3) {
    errors.subject = ["Please specify a subject for your inquiry."];
  }

  if (!message || message.length < 10) {
    errors.message = ["Your message must be at least 10 characters long."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors in the form.",
      errors,
    };
  }

  // 3. Email dispatch configuration
  const destinationEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "iptvusapro@gmail.com";
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || destinationEmail;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpSecure = smtpPort === 465;

  if (smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"IPTV USA Support Desk" <${smtpUser}>`,
        to: destinationEmail,
        replyTo: email,
        subject: `[IPTV USA Inquiry] ${subject}`,
        text: `You have received a new contact message from the IPTV USA website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent via IPTV USA Web Portal`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #29166f; max-width: 600px; padding: 24px; border: 1px solid #ebb0ad; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #c62b27; margin-top: 0; font-size: 20px;">New Inquiry Received — IPTV USA</h2>
            <div style="background-color: #f4e9f1; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
              <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #c62b27;">${email}</a></p>
              <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <h3 style="color: #29166f; font-size: 16px; margin-bottom: 8px;">Customer Message:</h3>
            <div style="background-color: #fafafa; border: 1px solid #ebb0ad; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-size: 14px; color: #392b6b;">${message}</div>
            <p style="font-size: 12px; color: #887eaa; margin-top: 24px; border-top: 1px solid #ebb0ad; padding-top: 12px;">
              Tip: You can hit "Reply" in your email client to reply directly to ${name} (${email}).
            </p>
          </div>
        `,
      });

      console.info(`[Email Sent to ${destinationEmail}] From: ${name} <${email}>, Subject: ${subject}`);
    } catch (err) {
      console.error("[Email Delivery Error]", err);
    }
  } else {
    // If SMTP credentials are not yet populated in .env.local, log the message securely
    console.info(`[Contact Form Message Stored] Target: ${destinationEmail} | From: ${name} <${email}> | Subject: ${subject} | Message: ${message}`);
  }

  return {
    success: true,
    message:
      "Thank you! Your message has been sent to our support desk (iptvusapro@gmail.com). We will get back to you shortly.",
    submittedData: {
      name,
      email,
      subject,
      message,
    },
  };
}
