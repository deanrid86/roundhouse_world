import React from 'react';

const MasteringRoundhouseKick: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Mastering the Roundhouse Kick</h1>
        <p className="text-lg text-gray-400 mb-6">
          Learn the techniques to deliver powerful and precise roundhouse kicks.
        </p>
        <div className="relative mx-auto w-3/4 lg:w-1/2">
          <img
            src="/training/roundhouse.jpg"
            alt="Roundhouse Kick"
            className="rounded shadow-lg"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 max-w-4xl mx-auto">
        {/* Section 1: Proper Stance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Assume the Proper Stance</h2>
          <p className="text-gray-400 mb-4">
            Begin with a strong foundation. Stand in a fighting stance with your feet shoulder-width apart. 
            Position your dominant leg slightly behind the other, knees slightly bent, and hands raised to 
            protect your face. This stance ensures balance and readiness for the kick.
          </p>
        </section>

        {/* Section 2: Initiate the Kick */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Initiate the Kick</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Pivot the Supporting Foot:</strong> Rotate the foot of your supporting leg about 90 degrees 
              away from the target. This opens up your hips, allowing for more power generation.
            </li>
            <li>
              <strong>Chamber the Kicking Leg:</strong> Lift your knee towards your chest while keeping the leg bent. 
              This step prepares your leg for the kicking motion.
            </li>
          </ul>
        </section>

        {/* Section 3: Execute the Kick */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Execute the Kick</h2>
          <p className="text-gray-400 mb-4">
            The execution is where power and precision meet:
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Hip Rotation:</strong> Rotate your hips towards the target as you extend your leg. 
              This hip motion generates the majority of the kick’s power.
            </li>
            <li>
              <strong>Extend the Leg:</strong> Snap your leg out to strike the target, aiming to hit with either the 
              lower part of your shin or the instep of your foot. In Muay Thai, using the shin is common for its durability.
            </li>
          </ul>
        </section>

        {/* Section 4: Follow Through and Recovery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Follow Through and Recovery</h2>
          <p className="text-gray-400 mb-4">
            After making contact, quickly retract your leg to return to your fighting stance. 
            This recovery step is crucial for maintaining balance and preparing for your next move.
          </p>
        </section>

        {/* Section 5: Additional Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Additional Tips for Mastering the Roundhouse Kick</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Balance and Control:</strong> Keep your core engaged and upper body upright throughout the kick.
            </li>
            <li>
              <strong>Targeting:</strong> Adjust the height of your chambered knee to aim for low (legs), mid (torso), 
              or high (head) targets.
            </li>
            <li>
              <strong>Practice:</strong> Begin with slow, controlled movements to focus on proper form, then gradually 
              increase speed and power.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400">
            The roundhouse kick is a staple in martial arts, combining power, speed, and precision. 
            Mastery requires dedication, proper technique, and consistent practice. Focus on the fundamentals, 
            and you’ll soon be delivering devastating kicks with confidence and accuracy.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MasteringRoundhouseKick;
