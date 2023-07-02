import nodemailer from "nodemailer";

const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  auth: {
    user: "mahmerakram6@gmail.com",
    pass,
  },
});

export const mailOptions = {
  from: "mahmerakram6@gmail.com",
  to: "mahmerakram6@gmail.com",
};
