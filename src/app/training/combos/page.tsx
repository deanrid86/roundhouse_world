import React from 'react';

const PunchKickCombos: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Punch and Kick Combos</h1>
        <p className="text-lg text-gray-400 mb-6">
          Effective combinations to dominate your training sessions and sparring.
        </p>
        <div className="relative mx-auto w-3/4 lg:w-1/2">
          <img
            src="/training/combos.jpg"
            alt="Punch and Kick Combos"
            className="rounded shadow-lg"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 max-w-4xl mx-auto">
        {/* Basic Combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Basic Combinations</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Jab – Cross – Lead Hook – Low Kick:</strong> Start with a jab to gauge distance, follow with a cross to 
              penetrate the guard, add a lead hook to disrupt balance, and finish with a low kick targeting the opponent&apos;s thigh. 
              This combination mixes upper and lower body attacks, keeping the opponent on their toes.
            </li>
            <li>
              <strong>Jab – Cross – Lead Hook – Rear Roundhouse Kick:</strong> Deliver a jab and cross to engage, throw a lead 
              hook to open the guard, and conclude with a powerful rear roundhouse kick aimed at the body or head. This combination 
              maximizes damage potential.
            </li>
          </ul>
        </section>

        {/* Advanced Combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Advanced Combinations</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Jab – Switch Kick – Cross – Lead Hook – Hop Kick:</strong> Initiate with a jab, perform a switch kick to 
              the liver, follow with a cross and lead hook, and end with a hop kick. This combination uses dynamic movements to 
              confuse and overwhelm the opponent.
            </li>
            <li>
              <strong>Front Kick – Step – Cross – Lead Hook – Rear Elbow – Lead Hook – Rear Kick:</strong> Begin with a front kick, 
              step forward, execute a cross and lead hook, deliver a rear elbow, follow with another lead hook, and finish with 
              a rear kick. This sequence integrates elbows and kicks with punches for a versatile and unpredictable attack pattern.
            </li>
          </ul>
        </section>

        {/* Tips for Effective Combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Tips for Effective Combinations</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Fluidity:</strong> Ensure smooth transitions between strikes to maintain momentum and reduce telegraphing.
            </li>
            <li>
              <strong>Balance:</strong> Maintain proper stance and weight distribution to enable quick recovery and defense.
            </li>
            <li>
              <strong>Target Variation:</strong> Alternate between head, body, and leg strikes to keep the opponent guessing.
            </li>
            <li>
              <strong>Practice:</strong> Regularly drill combinations on pads, heavy bags, and with partners to build muscle 
              memory and timing.
            </li>
          </ul>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Visual Demonstration</h2>
          <p className="text-gray-400 mb-4">
            Watch this instructional video for a step-by-step guide to mastering essential punch and kick combos:
          </p>
          <div className="relative mx-auto w-full max-w-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Rxh6bab5y3U"
              title="Punch & Kick Combos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded shadow-lg"
            ></iframe>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400">
            Combining punches and kicks effectively is a cornerstone of martial arts mastery. By practicing these combinations 
            and refining your technique, you can dominate your training sessions and sparring with confidence and versatility. 
            Remember, consistent practice and attention to detail are the keys to success.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PunchKickCombos;
