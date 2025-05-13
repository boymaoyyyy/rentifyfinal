import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/app/lib/mongoose';
import User from '@/app/models/User';

export async function POST(request: NextRequest): Promise<NextResponse> {
  await connectToDB();

  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing fields' }, 
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' }, 
        { status: 400 }
      );
    }

    const newUser = new User({ name, email, password }); // TODO: Hash password before production
    await newUser.save();

    return NextResponse.json(
      { message: 'User created successfully', user: newUser }, 
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Server error', error: err }, 
      { status: 500 }
    );
  }
}

// If you want to handle other methods, add them as separate exports
export async function GET(request: NextRequest): Promise<NextResponse> {
  // Return 405 Method Not Allowed since you only want POST
  return new NextResponse(null, {
    status: 405,
    headers: {
      'Allow': 'POST'
    }
  });
}