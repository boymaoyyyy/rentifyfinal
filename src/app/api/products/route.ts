import { NextResponse } from 'next/server';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

// GET all products
export async function GET() {
  await connectToDB();
  try {
    const products = await Product.find(); // Retrieve all products
    return NextResponse.json(products); // Return the products as JSON
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}

// POST a new product
export async function POST(req: Request) {
  await connectToDB();
  try {
    const { name, description, price, image, cellphone } = await req.json();

    // Validate required fields
    if (!name || !description || !price || !image || !cellphone) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl: image,
      cellphone, // ✅ Include cellphone
    });

    await newProduct.save();

    return NextResponse.json(
      { message: 'Product created successfully', product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
