import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with error checking
const initResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set!');
    return null;
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  console.log('Contact API called');
  
  try {
    const { name, email, message } = await request.json();
    console.log('Form data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Initializing Resend...');
    const resend = initResend();
    
    if (!resend) {
      console.error('Failed to initialize Resend');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    console.log('Sending email with Resend...');
    
    try {
      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: 'kaplan@kapsoft.com',
        to: 'kaplan@kapsoft.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
      
      console.log('Resend response:', { data, error });
      
      if (error) {
        throw error;
      }
      
      return NextResponse.json(
        { message: 'Email sent successfully', id: data?.id },
        { status: 200 }
      );
    } catch (resendError: any) {
      console.error('Resend send error:', resendError);
      return NextResponse.json(
        { error: resendError.message || 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}