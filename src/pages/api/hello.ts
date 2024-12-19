import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

import type { ContactForm } from "@/components/contact-form";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form: ContactForm = req.body;

  const resend = new Resend("re_Rw9PrwiB_AT6N79trAChfUCmhdaQCzbhH");

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "hasan15.06.96@gmail.com",
    subject: `${form.subject} - ${form.name} - ${form.email} - ${form.mobile}`,
    text: form.text,
  });

  if (error) {
    return console.error({ error });
  }

  res.status(200).json("Contact form submitted");
}
