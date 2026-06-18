import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, message } = body;

    // Validate inputs
    if (!name || !email || !phone || !role || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to the Owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Robotonicinnovationsddp@gmail.com', // or process.env.EMAIL_USER
      subject: `New Demo Request: ${name} (${role})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: #FF7A00; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Demo Request</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333; margin-top: 0;">You have received a new inquiry from the website. Here are the details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 120px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E293B;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E293B;"><a href="mailto:${email}" style="color: #FF7A00; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E293B;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Role</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E293B; text-transform: capitalize;">${role}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; background-color: #FFF8F1; padding: 20px; border-radius: 8px; border-left: 4px solid #FF7A00;">
              <h4 style="margin-top: 0; color: #FF7A00; margin-bottom: 10px;">Message:</h4>
              <p style="color: #1E293B; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #1E293B; padding: 15px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">Automated message from SDDP ROBOTONIC INNOVATIONS LLP Website</p>
          </div>
        </div>
      `,
    };

    // 2. Auto-reply to the User
    const userMailOptions = {
      from: `"SDDP ROBOTONIC INNOVATIONS LLP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting SDDP ROBOTONIC INNOVATIONS LLP!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: #1E293B; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            <p style="color: #FFB547; font-size: 16px; margin-top: 10px; margin-bottom: 0;">We've received your demo request.</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Hello ${name},</p>
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Thank you for your interest in SDDP ROBOTONIC INNOVATIONS LLP. This email is to confirm that we have successfully received your inquiry.</p>
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Our team is reviewing your details and will get back to you shortly to schedule your free demo and discuss how we can bring next-generation STEM learning to your students.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="font-size: 14px; color: #666; margin: 0;"><strong>Your Message:</strong></p>
              <p style="font-size: 14px; color: #888; font-style: italic; margin-top: 5px;">"${message}"</p>
            </div>
            
            <div style="margin-top: 30px;">
              <a href="https://robotonicinnovations.com" style="display: inline-block; background-color: #FF7A00; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
            </div>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">SDDP ROBOTONIC INNOVATIONS LLP</p>
            <p style="color: #888; font-size: 12px; margin-top: 5px; margin-bottom: 0;">Innovating the Future with Robotics & Automation.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
