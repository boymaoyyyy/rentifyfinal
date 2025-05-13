import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/app/models/User';
import { connectToDB } from '@/app/lib/mongoose';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export async function POST(req: Request) {
  try {
    await connectToDB();

    const { email, password } = await req.json();
    console.log('Received login request:', { email, password });

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, SECRET_KEY, {
      expiresIn: '1d',
    });

    // Set token in HttpOnly cookie
    const response = NextResponse.json({ message: 'Login successful' });

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
