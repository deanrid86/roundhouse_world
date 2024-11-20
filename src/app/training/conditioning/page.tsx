import Image from 'next/image';
import React from 'react';

const ConditioningForFighters: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
    {/* Page Header */}
    <header className="py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Conditioning for Fighters</h1>
      <p className="text-lg text-gray-400 mb-6">
        Improve stamina and strength with our kickboxing conditioning tips.
      </p>
      <div className="relative w-full h-64">
        <Image
          src="/training/squats.jpg"
          alt="Conditioning - Squats"
          layout="fill"
          
          objectFit="cover"
          className="rounded"
        />
      </div>
    </header>

      {/* Main Content */}
      <main className="py-12 px-6 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Conditioning Matters</h2>
          <p className="text-gray-400 mb-4">
            Conditioning is the foundation of any successful fighter. Kickboxing demands not only skill but also 
            exceptional stamina, strength, and resilience. Proper conditioning prepares your body for the rigors of 
            training and competition while reducing the risk of injury.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Essential Conditioning Techniques</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Cardio Workouts:</strong> Focus on activities like running, cycling, or jump rope to improve endurance.
            </li>
            <li>
              <strong>Strength Training:</strong> Incorporate exercises like squats, deadlifts, and push-ups to build power.
            </li>
            <li>
              <strong>Core Training:</strong> Strengthen your core with planks, sit-ups, and medicine ball twists for better balance.
            </li>
            <li>
              <strong>Plyometrics:</strong> Add explosive movements like box jumps and burpees to improve speed and agility.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sample Conditioning Routine</h2>
          <p className="text-gray-400 mb-4">
            Here’s a simple routine you can follow three times a week to boost your conditioning:
          </p>
          <ul className="list-decimal list-inside text-gray-400">
            <li>Warm-up: 5 minutes of jump rope or light jogging.</li>
            <li>3 sets of 20 squats, 15 push-ups, and 10 burpees.</li>
            <li>Core: 3 sets of 30-second planks and 15 sit-ups.</li>
            <li>Cardio: 10 minutes of high-intensity interval training (HIIT).</li>
            <li>Cool-down: Stretching for 5-10 minutes to improve flexibility.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400">
            Consistency is the key to effective conditioning. Tailor your routine to match your fitness level, and don’t be 
            afraid to challenge yourself. With proper conditioning, you’ll not only become a stronger fighter but also reduce 
            fatigue and boost confidence in the ring.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ConditioningForFighters;
