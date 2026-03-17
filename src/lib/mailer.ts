import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface BookingNotificationData {
  ownerEmail: string;
  hotelName: string;
  guestName: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export async function sendBookingNotification(data: BookingNotificationData): Promise<void> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[Mailer] SMTP credentials not configured — skipping email.');
    return;
  }

  const checkInStr = new Date(data.checkIn).toLocaleDateString('en-US', { dateStyle: 'medium' });
  const checkOutStr = new Date(data.checkOut).toLocaleDateString('en-US', { dateStyle: 'medium' });

  await transporter.sendMail({
    from: `"Hotel Booking Platform" <${process.env.SMTP_USER}>`,
    to: data.ownerEmail,
    subject: `New Booking: ${data.hotelName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
        <h2 style="color: #c0533a; margin-bottom: 4px;">New Booking Received 🎉</h2>
        <p style="color: #555; margin-top: 0;">A user has booked your hotel. Please check your dashboard for details.</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 8px 0; color: #888;">Hotel</td><td style="padding: 8px 0; font-weight: 600; color: #222;">${data.hotelName}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Guest</td><td style="padding: 8px 0; font-weight: 600; color: #222;">${data.guestName}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Guest Email</td><td style="padding: 8px 0; color: #222;">${data.guestEmail}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Check-in</td><td style="padding: 8px 0; color: #222;">${checkInStr}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Check-out</td><td style="padding: 8px 0; color: #222;">${checkOutStr}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Guests</td><td style="padding: 8px 0; color: #222;">${data.guests}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Total</td><td style="padding: 8px 0; font-weight: 700; color: #c0533a;">$${data.totalPrice}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />
        <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/dashboard/company" style="display: inline-block; background: #c0533a; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">View Dashboard</a>
        <p style="color: #aaa; font-size: 12px; margin-top: 32px;">Hotel Booking Platform — automated notification</p>
      </div>
    `,
  });
}
