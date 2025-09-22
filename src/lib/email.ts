import { env } from "@/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

interface SendEmailValues {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: SendEmailValues) {
  await resend.emails.send({
    from: "verification@holguin-store.work",
    to,
    subject,
    text,
  });
}
