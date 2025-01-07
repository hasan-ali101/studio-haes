import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

import type { ContactForm } from "@/components/contact-form";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form: ContactForm = req.body;

  const resend = new Resend("re_Rw9PrwiB_AT6N79trAChfUCmhdaQCzbhH");

  const { error } = await resend.emails.send({
    from: "contact@studiohaes.com",
    to: "hasan15.06.96@gmail.com",
    subject: `${form.subject} - ${form.name} - ${form.email} - ${form.mobile}`,
    text: form.text,
  });

  if (error) {
    res.status(400).send({ error: "Failed to submit contact form" });
  } else {
    res.status(200).json("Contact form submitted");
  }
}
