import Link from "next/link";
import { Button } from "./components/ui/button";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="relative bg-green-800 text-white py-20 px-6 rounded-md shadow-xl">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Rentify: <span className="text-yellow-300">Your Local Renting Marketplace</span>
          </h1>
          <p className="text-xl mb-6">
            Rent, lend, and share everyday items in your community with ease. Save money, time, and space!
          </p>

          <Link href="/products">
            <Button className="mt-6 px-8 py-3 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-700 transition-all">
              Explore Products
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Looking to Lend Items?</h2>
          <p className="text-lg text-gray-200 mb-6">
            Got items you don&apos;t use often? Upload them to Rentify and help others while earning extra income!
          </p>

          <Link href="/upload">
            <Button className="mt-6 px-8 py-3 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-700 transition-all">
              Upload an Item
            </Button>
          </Link>
        </div>
      </div>

      {/* Clean and Simple Features Section */}
      <section className="mt-16 py-12 bg-white text-gray-800 shadow-sm rounded-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Rentify?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-lg text-gray-600">
                Browse items to rent or list your own quickly and easily. It&apos;s as simple as a few clicks.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-lg text-gray-600">
                We ensure the safety and trust between lenders and renters, so you can rent with confidence.
              </p>
            </div>
            <div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2">Affordable Rentals</h3>
              <p className="text-lg text-gray-600">
                Save money by renting items for short-term use, instead of purchasing them for one-time needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
