'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import Image from "next/image";

interface OrderDetails {
  id: string;
  productId: string;
  productName: string;
  price: string;
  imageUrl: string;
  status: 'pending' | 'shipped' | 'delivered';
  orderDate: string;
}

export default function OrderDetails({ orderId }: { orderId: string }) {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  
  useEffect(() => {
    // In a real app, you would fetch this from an API
    // For now, we'll construct it from URL params
    const productId = searchParams.get('productId') || '';
    const productName = searchParams.get('productName') || '';
    const price = searchParams.get('price') || '';
    const imageUrl = searchParams.get('imageUrl') || '';
    
    setOrder({
      id: orderId,
      productId,
      productName,
      price,
      imageUrl,
      status: 'pending',
      orderDate: new Date().toLocaleString(),
    });
  }, [orderId, searchParams]);

  if (!order) {
    return <div>Loading order information...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Image 
            src={order.imageUrl || "/placeholder.svg"} 
            alt={order.productName} 
            className="w-full h-48 object-cover rounded-md"
            width={400}
            height={192}
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{order.productName}</h2>
            <p className="text-gray-600 mb-1">Price: P{order.price}</p>
            <p className="text-gray-600 mb-1">Order Date: {order.orderDate}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Order Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="font-medium">
                {order.status === 'pending' ? 'Pending' : 
                 order.status === 'shipped' ? 'Shipped' : 'Delivered'}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Your order is being processed. You will receive updates soon.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Need Help?</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}