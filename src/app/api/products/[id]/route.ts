import { NextRequest, NextResponse } from 'next/server';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

// Delete a product by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; // Extract the id from params
  await connectToDB();

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Error deleting product', error }, { status: 500 });
  }
}
