'use client';

import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 my-8">
      <h1 className="text-3xl font-bold mb-6">Sample Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-2">
            Welcome to our online store. These terms and conditions govern your use of our website and the purchase of products through our platform.
            By accessing our website and placing an order, you agree to be bound by these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Ordering and Payment</h2>
          <p className="mb-2">
            When you place an order, you are making an offer to purchase products. All orders are subject to acceptance and availability.
            Payment must be made in full at the time of ordering. We accept [payment methods].
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Delivery</h2>
          <p className="mb-2">
            We aim to deliver products within [X] business days of order confirmation. Delivery times are estimates and not guaranteed.
            Risk of loss and damage passes to you upon delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Returns and Refunds</h2>
          <p className="mb-2">
            You may return products within [X] days of receipt if they are unused and in original packaging.
            Refunds will be processed within [X] business days of receiving the returned products.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Privacy Policy</h2>
          <p className="mb-2">
            We collect and process your personal data in accordance with our Privacy Policy.
            By using our website, you consent to such processing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
          <p className="mb-2">
            All content on this website, including text, graphics, logos, and images, is our property or that of our licensors and is protected by copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p className="mb-2">
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
          <p className="mb-2">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.
            Your continued use of the website constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
          <p className="mb-2">
            These terms shall be governed by and construed in accordance with the laws of [Your Country/State],
            without giving effect to any principles of conflicts of law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Contact Information</h2>
          <p className="mb-2">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p>
            Email: [jersonmirafuentes@gmail.com]<br />
            Phone: [09359228598]<br />
            Address: [Rentify building, Pimentel, Lapasan, Cagayan de Oro City, Misamis Oriental.]
          </p>
        </section>
      </div>

      <div className="mt-10 mb-4">
        <p className="text-sm text-gray-600">
          Last updated: May 14, 2025
        </p>
      </div>

      <div className="pt-6 border-t">
        <Link href="/products" className="text-blue-600 hover:underline">
          &larr; Return to Products
        </Link>
      </div>
    </div>
  );
}