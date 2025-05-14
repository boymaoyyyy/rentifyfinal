'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
// Fix the Button import path - adjust this to match your project structure
import { Button } from '@/app/components/ui/button';

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const price = searchParams.get('price');
  const imageUrl = searchParams.get('imageUrl');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  const handleCheckout = async () => {
    if (!id) return;
    
    if (!termsAccepted) {
      setShowTermsError(true);
      return;
    }
    
    setShowTermsError(false);
    setLoading(true);
    try {
      // Generate a random order ID (in a real app, this would come from your backend)
      const orderId = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setSuccess(true);
      
      // Redirect to order tracking page after a short delay
      setTimeout(() => {
        router.push(`/orders/${orderId}?productId=${id}&productName=${encodeURIComponent(name || '')}&price=${encodeURIComponent(price || '')}&imageUrl=${encodeURIComponent(imageUrl || '')}`);
      }, 1500);
      
    } catch (error) {
      console.error('Failed to complete checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!id || !name || !description || !price || !imageUrl) {
    return <p>Missing product information</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow-md mt-10 bg-white">
      {success ? (
        <div className="text-green-600 text-center text-xl font-semibold">
          ✅ Successfully checked out! Redirecting to your order...
        </div>
      ) : (
        <>
          <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-64 object-cover mb-4 rounded" />
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-lg font-semibold mb-6">P{price}</p>
          
          <div className="mb-4">
            <div className="flex items-start gap-2 mb-1">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>
              </label>
            </div>
            {showTermsError && (
              <p className="text-red-500 text-xs mt-1">You must accept the terms and conditions to proceed</p>
            )}
          </div>
          
          <Button onClick={handleCheckout} disabled={loading}>
            {loading ? 'Processing...' : 'Complete Checkout'}
          </Button>
        </>
      )}
    </div>
  );
}