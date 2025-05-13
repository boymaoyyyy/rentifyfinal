import { NextRequest, NextResponse } from 'next/server';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

// Single DELETE handler with no dynamic parameters
export async function DELETE(request: NextRequest) {
  await connectToDB();
  
  // Extract the ID from the URL path
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const id = pathParts[pathParts.length - 2]; // Get ID from the URL path
  
  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting product', error }, 
      { status: 500 }
    );
  }
}