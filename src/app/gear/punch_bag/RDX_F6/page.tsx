import React from 'react';
import Image from 'next/image';

const RDXPunchBagReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">RDX F6 6ft Kara Free-Standing Punch Bag Review</h1>
        <p className="text-lg text-gray-400 mb-6">
          A comprehensive review of one of the most popular free-standing punch bags.
        </p>
        <div className="relative w-full h-64">
          <Image
            src="/images/rdx-f6-punchbag.jpg"
            alt="RDX F6 6ft Kara Free-Standing Punch Bag"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </header>

      {/* Content Section */}
      <main className="py-12 px-6 max-w-4xl mx-auto space-y-12">
        {/* Design and Build Quality */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design and Build Quality</h2>
          <p className="text-gray-400 mb-4">
            Constructed from high-quality Maya Hide leather, the RDX F6 ensures durability and resistance to wear and tear.
            Its 6-foot stature provides an ample striking surface, accommodating various training routines. The rounded design 
            offers a larger target area with a soft-strike surface, suitable for multiple training exercises.
          </p>
          <div className="relative w-full h-64">
            <Image
              src="/images/design-quality.jpg"
              alt="Design and Build Quality"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </section>

        {/* Stability and Performance */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Stability and Performance</h2>
          <p className="text-gray-400 mb-4">
            A standout feature is its non-warping polypropylene base, which can be filled with water, sand, or iron sand up to 
            150kg, providing excellent stability during intense workouts. The bag incorporates advanced shock-absorbent technology, 
            including DenZo-Tron foam padding, to withstand powerful strikes and protect the user&apos;s hands.
          </p>
          <div className="relative w-full h-64">
            <Image
              src="/images/stability-performance.jpg"
              alt="Stability and Performance"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </section>

        {/* User Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">User Experience</h2>
          <p className="text-gray-400 mb-4">
            Users have noted that the bag is straightforward to set up and move when needed. However, due to its size, it requires 
            ample space, which might be a limitation for home gyms with limited room. Filling the base to its maximum capacity can 
            be cumbersome and may require assistance.
          </p>
          <div className="relative w-full h-64">
            <Image
              src="/images/user-experience.jpg"
              alt="User Experience"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-gray-400">
            The RDX F6 6ft Kara Free-Standing Punch Bag stands out for its durability, stability, and thoughtful design, making it 
            a valuable addition to any training regimen. While it demands sufficient space and effort to set up, its performance 
            and quality justify the investment for serious trainees.
          </p>
          <div className="relative w-full h-64">
            <Image
              src="/images/conclusion.jpg"
              alt="Conclusion"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default RDXPunchBagReview;
