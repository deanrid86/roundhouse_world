// File: pages/gear-reviews.tsx
import React from 'react';
import Image from 'next/image';

interface GearItem {
  id: number;
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
}

const GearReviewsPage: React.FC = () => {
  // Example gear items - replace with dynamic data later
  const gearItems: GearItem[] = [
    {
      id: 1,
      title: "Kickboxing Gloves",
      description: "High-quality gloves designed for training and competition.",
      image: "/gear-gloves.jpg",
      affiliateLink: "https://example.com/gloves",
    },
    {
      id: 2,
      title: "Punching Bags",
      description: "Durable punching bags to perfect your strikes.",
      image: "/gear-bag.jpg",
      affiliateLink: "https://example.com/bags",
    },
    {
      id: 3,
      title: "Protective Gear",
      description: "Essential protective equipment for safe training.",
      image: "/gear-protection.jpg",
      affiliateLink: "https://example.com/protection",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-4">Gear Reviews</h2>
        <p className="text-lg text-gray-400">Discover the best gear to elevate your kickboxing game.</p>
      </section>

      {/* Gear List */}
      <main className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearItems.map((item) => (
            <div key={item.id} className="bg-gray-800 p-6 rounded">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a
                href={item.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Roundhouse World. All rights reserved.</p>
          <p className="text-gray-500">
            <a href="/policies" className="hover:underline">Privacy Policy</a> | <a href="/policies" className="hover:underline">Affiliate Disclaimer</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GearReviewsPage;
