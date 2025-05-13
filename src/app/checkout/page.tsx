// app/checkout/page.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const price = searchParams.get('price');
  const imageUrl = searchParams.get('imageUrl');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRent = async () => {
    if (!id) return;
    setLoading(true);
    try {
      await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      setSuccess(true);
      setTimeout(() => {
        router.push('/products');
      }, 1500);
    } catch (error) {
      console.error('Failed to delete product:', error);
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
          ✅ Successfully rented!
        </div>
      ) : (
        <>
          <img src={imageUrl} alt={name} className="w-full h-64 object-cover mb-4 rounded" />
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-lg font-semibold mb-6">${price}</p>
          <Button onClick={handleRent} disabled={loading}>
            {loading ? 'Processing...' : 'Rent Now'}
          </Button>
        </>
      )}
    </div>
  );
}
