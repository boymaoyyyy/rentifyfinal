import { NextRequest, NextResponse } from 'next/server';
import Product from '@/app/models/Product';
import { connectToDB } from '@/app/lib/mongoose';

// Define the correct context parameter type for dynamic routes
type RouteContext = {
  params: {
    id: string;
  };
};

// DELETE a product by ID
export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  const { id } = context.params;
  await connectToDB();

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