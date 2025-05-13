import Link from "next/link";
import { Button } from "../components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Users, Recycle, Lock } from "lucide-react"; // Import Lucide icons

export default function AboutUs() {
  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white py-20 px-5 rounded-md shadow-lg">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            About Us: <span className="text-yellow-300">Our Story & Mission</span>
          </h1>
          <p className="mt-4 text-xl">
            Rentify is driven by a passion to bring people together through a platform that empowers communities to share resources, reduce waste, and make essential goods more accessible.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-green-600">Our Story</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Rentify, founded by a group of students driven by a shared vision of innovation and collaboration, aims to revolutionize resource accessibility. Our seamless digital marketplace facilitates the lending and renting of items, fostering a community of sharing and connection through advanced technology. Built on the principles of trust, convenience, and efficiency, Rentify streamlines the process for both lenders and renters, minimizing costs and ensuring a seamless experience.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether it's household essentials, tools, gadgets, or recreational equipment, users gain access to necessary items without the burden of ownership. Our student-founded team brings a fresh perspective and an innate understanding of modern digital interactions. We strive to cultivate a dynamic and sustainable community that embraces the power of sharing. At its core, Rentify is more than just a service; it's a movement towards a smarter, more connected approach to resource utilization.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-16 bg-green-50 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-green-600 mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Rentify, we envision a world where access is prioritized over ownership. Our mission is to empower communities by providing a safe, secure marketplace for renting and lending everyday items, reducing waste, and making essential goods more accessible to everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Vision</h3>
            <p className="text-lg text-gray-700">
              To create a community where access is prioritized over ownership, fostering a more sustainable, connected, and resourceful society through peer-to-peer rentals using our platform.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Mission</h3>
            <p className="text-lg text-gray-700">
              Rentify's mission is to empower people and communities by giving a safe and secure marketplace for renting and lending everyday items. Rentify aims to maximize value, reduce waste, and make essential goods more accessible through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mt-16 mb-16 px-4 bg-green-600 rounded-lg">
        <h2 className="text-4xl font-semibold text-white mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center">
          <div className="text-center">
            <div className="bg-white text-green-600 rounded-full p-6 mb-4 shadow-lg flex justify-center items-center">
              <Users size={40} /> {/* Lucide Users icon with smaller size */}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Community</h3>
            <p className="text-lg text-gray-200">
              Rentify thrives on the power of community, making resources available to everyone, for everyone. Together, we build a stronger, more connected society.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white text-green-600 rounded-full p-6 mb-4 shadow-lg flex justify-center items-center">
              <Recycle size={40} /> {/* Lucide Recycle icon with smaller size */}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Sustainability</h3>
            <p className="text-lg text-gray-200">
              We strive to reduce waste and promote responsible consumption, encouraging the efficient use of resources for a more sustainable future.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white text-green-600 rounded-full p-6 mb-4 shadow-lg flex justify-center items-center">
              <Lock size={40} /> {/* Lucide Lock icon with smaller size */}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Security</h3>
            <p className="text-lg text-gray-200">
              Your safety is our top priority. Rentify ensures secure transactions, providing a trustworthy and reliable marketplace for renters and lenders alike.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-green-600">Join Rentify Today</h2>
        <p className="text-xl text-gray-700 mb-6">
          Become a part of a community that values access over ownership. Rent or lend with ease and help build a more sustainable future.
        </p>
        <Link href="/" passHref>
          <Button className="px-8 py-3 text-white bg-green-600 hover:bg-green-700 transition-all">
            Get Started
          </Button>
        </Link>
      </section>
    </MaxWidthWrapper>
  );
}
