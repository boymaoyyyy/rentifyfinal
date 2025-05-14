import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

export async function POST(req: Request) {
  await connectToDB();

  const formData = await req.formData();

  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const price = parseFloat(formData.get('price') as string);
  const cellphone = formData.get('cellphone') as string;
  const image = formData.get('image') as File;

  if (!name || !description || !price || !cellphone || !image) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = image.name.split('.').pop();
    const filename = `${uuidv4()}.${ext}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const filePath = path.join(uploadDir, filename);

    // Save the image file to /public/uploads
    await writeFile(filePath, buffer);

    const imageUrl = `/uploads/${filename}`; // Local relative path

    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      cellphone,
    });

    await newProduct.save();

    return NextResponse.json(
      { message: 'Product uploaded successfully', product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ message: 'Upload failed', error }, { status: 500 });
  }
}
