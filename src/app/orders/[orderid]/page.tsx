import { Suspense } from 'react';
import OrderDetails from './order-details';

export default function OrderPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Order #{params.orderId}</h1>
      <Suspense fallback={<div className="p-6 text-center">Loading order details...</div>}>
        <OrderDetails orderId={params.orderId} />
      </Suspense>
    </div>
  );
}