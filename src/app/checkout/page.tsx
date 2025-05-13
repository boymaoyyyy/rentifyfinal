import { Suspense } from 'react';
import CheckoutClient from './checkout-client';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading checkout information...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}