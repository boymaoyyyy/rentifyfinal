'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  cellphone: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg shadow-sm p-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover mb-4"
            width={400}
            height={256}
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-sm text-gray-500">📞 {product.cellphone}</p>
          <p className="text-lg font-bold">P{product.price} per day</p>
          <Link
            href={{
              pathname: '/checkout',
              query: {
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
                cellphone: product.cellphone,
              },
            }}
          >
            <button className="mt-4 text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">
              Rent Now
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
