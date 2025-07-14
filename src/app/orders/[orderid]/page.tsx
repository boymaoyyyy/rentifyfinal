import { Suspense } from 'react';
import OrderDetails from './order-details';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OrderPage({ params }: { params: any }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Order #{
        Array.isArray(params.orderId)
          ? params.orderId[0]
          : params.orderId ?? 'Unknown'
      }</h1>
      <Suspense fallback={<div className="p-6 text-center">Loading order details...</div>}>
        <OrderDetails orderId={
          Array.isArray(params.orderId)
            ? params.orderId[0] || ''
            : params.orderId || ''
        } />
      </Suspense>
    </div>
  );
}