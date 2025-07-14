import Link from "next/link";
import { Button } from "./components/ui/button";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ProductList from "./components/Productlists";
import { MousePointer, Shield, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <MaxWidthWrapper>
      {/* Hero Section with only Background Image */}
      <div 
        className="relative text-white py-20 px-6 rounded-md shadow-xl overflow-hidden mb-16"
        style={{
          backgroundImage: "url('/frees.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Rentify: <span className="text-yellow-300">Your Local Renting Marketplace</span>
          </h1>
          <p className="text-xl mb-8">
            Rent, lend, and share everyday items in your community with ease. Save money, time, and space!
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-10">Looking to Lend Items?</h2>
          <p className="text-lg text-gray-200">
            Got items you don&apos;t use often? Upload them to Rentify and help others while earning extra income!
          </p>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover what&apos;s available in your community</p>
        </div>
        
        <ProductList />
        
        <div className="text-center mt-10">
          <Link href="/products">
            <Button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Clean and Simple Features Section with Lucide Icons */}
      <section className="mt-16 py-12 bg-white text-gray-800 shadow-sm rounded-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Rentify?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <MousePointer size={48} className="text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-lg text-gray-600">
                Browse items to rent or list your own quickly and easily. It&apos;s as simple as a few clicks.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <Shield size={48} className="text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-lg text-gray-600">
                We ensure the safety and trust between lenders and renters, so you can rent with confidence.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="mb-4 flex justify-center">
                <Wallet size={48} className="text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Rentals</h3>
              <p className="text-lg text-gray-600">
                Save money by renting items for short-term use, instead of purchasing them for one-time needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 py-12 bg-green-800 text-white rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Renting?</h2>
        <p className="text-xl mb-8">Join our community today and discover the benefits of sharing resources.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products">
            <Button className="px-8 py-3 bg-white text-green-800 hover:bg-gray-100 font-semibold text-lg rounded-lg shadow-lg">
              Browse Products
            </Button>
          </Link>
          <Link href="/upload">
            <Button className="px-8 py-3 bg-yellow-400 text-green-800 hover:bg-yellow-500 font-semibold text-lg rounded-lg shadow-lg">
              List Your Items
            </Button>
          </Link>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
