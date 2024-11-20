// File: pages/training-tips.tsx
import React from 'react';
import Image from 'next/image';

interface TrainingTip {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const TrainingTipsPage: React.FC = () => {
  // Example training tips data
  const trainingTips: TrainingTip[] = [
    {
      id: 1,
      title: "Mastering the Roundhouse Kick",
      description: "Learn the techniques to deliver powerful and precise roundhouse kicks.",
      image: "/training/roundhouse.jpg",
      link: "/training/roundhouse",
    },
    {
      id: 2,
      title: "Conditioning for Kickboxers",
      description: "Build stamina, strength, and agility with these kickboxing-specific workouts.",
      image: "/training/squats.jpg",
      link: "/training/conditioning",
    },
    {
      id: 3,
      title: "Punch and Kick Combos",
      description: "Effective combinations to dominate your training sessions and sparring.",
      image: "/training/combos.jpg",
      link: "/training/combos",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      

      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-4">Training Tips</h2>
        <p className="text-lg text-gray-400">Enhance your kickboxing skills with expert training techniques and workouts.</p>
      </section>

      {/* Training Tips List */}
      <main className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingTips.map((tip) => (
            <div key={tip.id} className="bg-gray-800 p-6 rounded">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-400 mb-4">{tip.description}</p>
              <a
                href={tip.link}
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Read More
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

export default TrainingTipsPage;
