import { EmailTemplate } from '../../components/EmailTemplate.jsx/index.js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();
 
    const { data, error } = await resend.emails.send({
      from: 'Students Placements Commitee IIITK <onboarding@resend.dev>',
      to: ['xyz@iiitkottayam.ac.in'],
      subject: 'Hello world',
      react: <EmailTemplate formData={formData} />,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
