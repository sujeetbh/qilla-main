"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: any) => {

  const message = formData.query;
  const email = formData.email;

  if(!message || !email || typeof message !== 'string' || typeof email !== 'string') {
    return { error: 'Invalid Message', success: false}
  }

  try {
    await resend.emails.send({
      from: 'Query From Qilla <onboarding@resend.dev>',
      to: 'joel.sykes@qilla.io',
      subject: "Query from Qilla Pluschain website",
      reply_to: email,
      text: message,
    })
  } catch (error) { 
    return { error: 'Failed to send email', success: false }
  }
  return { success: true }
}