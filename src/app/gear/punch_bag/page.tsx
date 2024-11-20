import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Example punch bag reviews data
const punchBags = [
  {
    id: 'rdx-punchbag',
    name: 'RDX F6 6ft Kara Free-Standing Punch Bag',
    image: '/Gear/Punch_Bags/RDX_F6.jpg',
    excerpt:
      'The RDX F6 6ft Kara Free-Standing Punch Bag offers excellent durability and stability, making it ideal for serious trainees.',
    reviewLink: '/gear/punch_bag/RDX_F6',
  },
  {
    id: 'proslayer-punchbag',
    name: 'Proslayer 6ft Punch Bag',
    image: '/Gear/Punch_Bags/Proslayer.jpg',
    excerpt:
      'The Proslayer 6ft Heavy Bag combines robust durability with customizable weight options, making it ideal for dedicated martial artists and fitness enthusiasts seeking a long-lasting and versatile training tool.',
    reviewLink: '/gear/punch_bag/Proslayer_6ft',
  },
];

const PunchBagReviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Punch Bag Reviews</h1>
        <p className="text-lg text-gray-400 mb-6">
          Explore detailed reviews of the best punch bags for training, sparring, and fitness.
        </p>
      </header>

      {/* Reviews List */}
      <main className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {punchBags.map((bag) => (
          <div
            key={bag.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={bag.image}
                alt={bag.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{bag.name}</h2>
              <p className="text-gray-400 mb-4">{bag.excerpt}</p>
              <Link href={bag.reviewLink} className="text-blue-500 hover:underline">
                Read Full Review
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PunchBagReviews;
