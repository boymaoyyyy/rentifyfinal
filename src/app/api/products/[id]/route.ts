import { NextRequest, NextResponse } from 'next/server';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

// DELETE a product by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDB();

  try {
    const product = await Product.findByIdAndDelete(params.id); // Use params.id

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting product', error }, { status: 500 });
  }
}
