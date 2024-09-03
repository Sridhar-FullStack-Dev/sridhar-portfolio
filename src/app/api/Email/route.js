import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";

export async function POST(request) {
  try {
    const { firstName, secondName, email, description } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        // user: "sridhar22122002@gmail.com",
        pass: process.env.NODEMAILER_PW,
        // pass: "abzgummsibeyygei",
      },
    });

    const mailOption = {
      from: email,
      to: "sridhar22122002@gmail.com",
      subject: "Message from Portfolio",
      html: EmailTemplate({ firstName, secondName, email, description }),
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ email: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { email: "failed", error: error.message },
      { status: 500 }
    );
  }
}
