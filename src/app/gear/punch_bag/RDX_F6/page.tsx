import React from 'react';
import Image from 'next/image';

const RDXPunchBagReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          RDX F6 6ft Kara Free-Standing Punch Bag Review
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          A comprehensive review of one of the most popular free-standing punch bags.
        </p>
        <div className="relative mx-auto w-full max-w-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BRICE4wZVlg"
              title="Punch & Kick Combos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded shadow-lg"
            ></iframe>
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
              alt="RDX Free Standing Punch Bag Design and Build Quality"
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
              alt="RDX Free Standing Punch Bag Stability and Performance"
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
              alt="User Experience with RDX Free Standing Punch Bag"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </section>

        {/* Pros and Cons Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pros and Cons</h2>
          <ul className="list-disc ml-6 text-gray-400 mb-4">
            <li>Durable Maya Hide leather construction</li>
            <li>Shock-absorbent DenZo-Tron foam padding</li>
            <li>Sturdy, stable base that withstands intense training</li>
            <li>Large striking surface for versatile workouts</li>
            <li>Requires ample space, making it less suitable for smaller home gyms</li>
            <li>Filling the base can be cumbersome</li>
          </ul>
        </section>

        {/* Comparison Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How Does It Compare to Other Free-Standing Bags?</h2>
          <table className="w-full text-left text-gray-400 border-collapse border border-gray-600">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">Feature</th>
                <th className="border border-gray-600 px-4 py-2">RDX F6</th>
                <th className="border border-gray-600 px-4 py-2">Everlast Powercore</th>
                <th className="border border-gray-600 px-4 py-2">Century Wavemaster</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Material</td>
                <td className="border border-gray-600 px-4 py-2">Maya Hide Leather</td>
                <td className="border border-gray-600 px-4 py-2">Synthetic Leather</td>
                <td className="border border-gray-600 px-4 py-2">Vinyl</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Base Stability</td>
                <td className="border border-gray-600 px-4 py-2">150kg (water/sand)</td>
                <td className="border border-gray-600 px-4 py-2">130kg (sand)</td>
                <td className="border border-gray-600 px-4 py-2">100kg (sand)</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Height</td>
                <td className="border border-gray-600 px-4 py-2">6ft</td>
                <td className="border border-gray-600 px-4 py-2">5.5ft</td>
                <td className="border border-gray-600 px-4 py-2">5.8ft</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Q: Is the RDX F6 suitable for beginners?</h3>
              <p className="text-gray-400">A: Yes, the RDX F6 provides a forgiving striking surface and a stable base, making it ideal for beginners.</p>
            </div>
            <div>
              <h3 className="font-semibold">Q: What is the best way to fill the base?</h3>
              <p className="text-gray-400">A: Filling the base with sand or a sand-water mixture provides maximum stability.</p>
            </div>
            <div>
              <h3 className="font-semibold">Q: Can it be used outdoors?</h3>
              <p className="text-gray-400">A: While it’s durable, prolonged outdoor use may cause wear and tear. It’s best used indoors or under cover.</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Buy?</h2>
          <p className="text-gray-400 mb-4">
            Click below to check the latest price and availability of the RDX Free Standing Punch Bag on Amazon.
          </p>
          <a
            href="https://www.youtube.com/watch?v=BRICE4wZVlg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            Check Price on Amazon
          </a>
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
              alt="RDX Free Standing Punch Bag Conclusion"
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
