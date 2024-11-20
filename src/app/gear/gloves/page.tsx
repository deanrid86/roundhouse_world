import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Example gloves reviews data
const gloves = [
  {
    id: 'rdx-gloves',
    name: 'RDX Boxing Gloves, Pro Training Sparring',
    image: '/Gear/Gloves/RDX_Pro.jpg',
    excerpt:
      'Durable Maya Hide leather gloves with multi-layered padding and great shock absorption for sparring and heavy bag workouts.',
    reviewLink: '/gear/gloves/RDX_Pro',
  },
  {
    id: 'FIGHTR-gloves',
    name: 'FIGHTR Pro',
    image: '/Gear/Gloves/FIGHTR.jpg',
    excerpt:
      'The FIGHTR® Premium Boxing Gloves offer a perfect blend of durability, comfort, and professional-grade stability, making them an excellent choice for martial artists of all levels.',
    reviewLink: '/gear/gloves/FIGHTR',
  },
  {
    id: 'buddha-gloves',
    name: 'Buddha Fighware Boxing Gloves',
    image: '/Gear/Gloves/Buddha.jpg',
    excerpt:
      'Handcrafted with precision and featuring advanced padding technology, the Buddha Fight Wear Special Edition Gloves combine durability, style, and protection, making them a premium choice for martial artists across all disciplines.',
    reviewLink: '/gear/gloves/Buddha',
  },
];

const GlovesReviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Glove Reviews</h1>
        <p className="text-lg text-gray-400 mb-6">
          Discover the best gloves for boxing, kickboxing, and sparring. Find the perfect pair for your training needs.
        </p>
      </header>

      {/* Reviews List */}
      <main className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gloves.map((glove) => (
          <div
            key={glove.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={glove.image}
                alt={glove.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{glove.name}</h2>
              <p className="text-gray-400 mb-4">{glove.excerpt}</p>
              <Link href={glove.reviewLink} className="text-blue-500 hover:underline">
                Read Full Review
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GlovesReviews;
