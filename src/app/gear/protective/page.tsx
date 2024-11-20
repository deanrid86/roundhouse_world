import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Example protective gear reviews data
const protectiveGear = [
  {
    id: 'rdx-headguard',
    name: 'RDX Headguard',
    image: '/Gear/Protective/RDX_Headguard.jpg',
    excerpt:
      'Durable and lightweight headgear for added protection, perfect for sparring sessions.',
    reviewLink: '/gear/protective/RDX_Headguard',
  },
  {
    id: 'opro-mouthguard',
    name: 'Opro Mouthguard',
    image: '/Gear/Protective/Opro_mouthguard.jpg',
    excerpt:
      'The OPRO Instant Custom-Fit Mouth Guard combines revolutionary fitting technology with superior protection, delivering a dentist-level fit, comfort, and shock absorption for athletes of all levels.',
    reviewLink: '/gear/protective/Opro_Mouthguard',
  },
  {
    id: 'venum-shinguard',
    name: 'Venum Unisex Shinguards',
    image: '/Gear/Protective/Venum_Unisex_Shinguards.jpg',
    excerpt:
      'The Venum Unisex Elite Shinguards combine premium Skintex leather construction, multi-density foam padding, and an anatomical design to deliver top-tier protection, comfort, and mobility for martial artists of all levels.',
    reviewLink: '/gear/protective/Venum_Unisex_Shinguard',
  },
];

const ProtectiveGearReviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Protective Gear Reviews</h1>
        <p className="text-lg text-gray-400 mb-6">
          Explore reviews of the best protective gear for boxing, kickboxing, and sparring.
        </p>
      </header>

      {/* Reviews List */}
      <main className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {protectiveGear.map((gear) => (
          <div
            key={gear.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={gear.image}
                alt={gear.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{gear.name}</h2>
              <p className="text-gray-400 mb-4">{gear.excerpt}</p>
              <Link href={gear.reviewLink} className="text-blue-500 hover:underline">
                Read Full Review
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProtectiveGearReviews;
