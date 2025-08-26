import { NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  topic: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input data
    const validatedData = leadSchema.parse(body);
    
    // TODO: Replace with actual email service (Resend) when API key is available
    // For now, we'll just log the data and return success
    console.log('New lead received:', validatedData);
    
    // TODO: Implement actual email sending
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'EMBRION <noreply@embriontechnologies.com>',
    //   to: ['embriontechnologies@gmail.com'],
    //   subject: 'New lead',
    //   text: JSON.stringify(validatedData, null, 2),
    // });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead received successfully' 
    });
    
  } catch (error) {
    console.error('Error processing lead:', error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid input data',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
