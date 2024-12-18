import React from 'react';

const ShadowboxingDrillsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Shadowboxing Drills to Enhance Your Skills
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Shadowboxing is one of the most effective and versatile training tools for kickboxers. It helps improve technique, footwork, timing, and mental focus—all without the need for equipment or a training partner. Whether you&apos;re refining specific combinations or visualizing a match scenario, shadowboxing allows you to train anywhere, anytime.
        </p>
        <p className="mt-2">
          This guide outlines essential shadowboxing drills, advanced techniques, and tips to help you maximize this foundational training method.
        </p>
      </section>

      {/* Affiliate Box */}
      <div className="my-8 p-6 bg-yellow-100 border border-yellow-300 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-yellow-900">
          Enhance Your Shadowboxing Sessions
        </h3>
        <p className="mb-4 text-yellow-900">
          Improve your shadowboxing skills with tools like resistance bands, floor markers, and training mirrors. These help refine your technique, footwork, and balance.
        </p>
        <a 
          href="https://amzn.to/4gFRK34" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-yellow-700 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-800 transition-colors"
        >
          View Recommended Training Tools
        </a>
      </div>

      {/* Shadowboxing Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Shadowboxing is Crucial</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            **Technique Refinement:** Allows you to focus on perfecting form without distractions.
          </li>
          <li>
            **Improved Footwork:** Develops agility, balance, and ring control.
          </li>
          <li>
            **Mental Visualization:** Helps you simulate fight scenarios and anticipate opponent reactions.
          </li>
          <li>
            **Cardiovascular Endurance:** Acts as an effective warm-up or conditioning exercise.
          </li>
        </ul>
      </section>

      {/* Essential Shadowboxing Drills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Essential Shadowboxing Drills</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            **Combination Focus Drill:** Choose a 3-4 strike combination (e.g., jab-cross-hook-kick) and practice it repeatedly, focusing on speed and form.
          </li>
          <li>
            **Footwork Drill:** Move laterally, forward, and backward while throwing strikes. Emphasize staying light on your feet and maintaining balance.
          </li>
          <li>
            **Defense and Counter Drill:** Simulate incoming strikes, use head movement or blocks to evade, and immediately counter with your own strikes.
          </li>
          <li>
            **Mirror Shadowboxing:** Use a mirror to monitor your form, ensuring proper technique and guard positioning.
          </li>
          <li>
            **Timed Rounds:** Shadowbox for 3-minute rounds with 1-minute rest intervals to simulate a fight scenario. Focus on pacing yourself while maintaining intensity.
          </li>
        </ul>
      </section>

      {/* Advanced Shadowboxing Techniques */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Advanced Techniques</h2>
        <p>
          Once you’ve mastered the basics, incorporate these advanced techniques to take your shadowboxing to the next level:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            **Visualization Drills:** Imagine an opponent’s movements and react accordingly with counters, footwork, and feints.
          </li>
          <li>
            **Resistance Band Shadowboxing:** Attach resistance bands to your arms or legs to build strength and explosiveness during movements.
          </li>
          <li>
            **Angle Creation:** Practice stepping off the centerline after combinations to create new angles for follow-up attacks.
          </li>
          <li>
            **Multi-Level Striking:** Alternate between low, mid, and high strikes in your combinations to simulate targeting different areas of the opponent’s body.
          </li>
        </ul>
      </section>

      {/* Common Mistakes and Fixes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Common Mistakes & Fixes</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            **Mistake:** Throwing Strikes Without Intent  
            **Fix:** Visualize an opponent for each strike to simulate real fight scenarios.
          </li>
          <li>
            **Mistake:** Neglecting Defense  
            **Fix:** Incorporate head movement, blocking, and counters into your shadowboxing sessions.
          </li>
          <li>
            **Mistake:** Overlooking Footwork  
            **Fix:** Focus on maintaining proper stance and movement throughout your drills.
          </li>
        </ul>
      </section>

      {/* Expert Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Expert Insights</h2>
        <p>
          **Trainer Insight:** Renowned coach Freddie Roach emphasizes, “Shadowboxing is where you perfect the little details. Treat it like sparring, and the improvements will show in the ring.”
        </p>
        <p className="mt-2">
          **Science Spotlight:** A study in the <em>Journal of Sports Science</em> (2022) found that shadowboxing improves reaction time and coordination, critical components of effective striking.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Take Action</h2>
        <p>
          Shadowboxing is more than just practice—it’s a way to visualize, refine, and elevate your skills. Start incorporating the drills and techniques in this guide into your daily training routine.
        </p>
        <p className="mt-2">
          Want to combine shadowboxing with advanced combinations? Check out our guide on <a href="/technique/advanced-kickboxing-combinations" className="text-yellow-600 hover:underline">Advanced Kickboxing Combinations</a> to take your training to the next level!
        </p>
      </section>
    </div>
  );
};

export default ShadowboxingDrillsPage;
