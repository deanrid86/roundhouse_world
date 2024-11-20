import React from 'react';

const ProslayerBagReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Proslayer 6ft Tall 150lb Muay Thai Heavy Bag Review</h1>
        <p className="text-lg text-gray-400 mb-6">
          A comprehensive review of the Proslayer 6ft Tall 150lb Muay Thai Kickboxing Boxing MMA Heavy Bag.
        </p>
        <div className="flex relative mx-auto w-3/4 lg:w-1/2 justify-center">
          <img
            src="/Gear/Punch_Bags/Proslayer.jpg"
            alt="Proslayer Heavy Bag"
            className="rounded shadow-lg"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 max-w-4xl mx-auto">
        {/* Pros Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pros of the Proslayer 6ft Heavy Bag</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Durable Construction:</strong> Made in the USA with heavy-duty vinyl and reinforced stitching, ensuring 
              longevity even under intense training sessions. 
            </li>
            <li>
              <strong>Versatile Use:</strong> Suitable for various martial arts disciplines, including Muay Thai, Boxing, 
              Kickboxing, and MMA, accommodating a wide range of training needs.
            </li>
            <li>
              <strong>Lifetime Warranty:</strong> Offers a lifetime warranty on stitching and reinforced seams, reflecting 
              the manufacturer&apos;s confidence in the product&apos;s durability.
            </li>
            <li>
              <strong>Customizable Weight:</strong> Ships unfilled, allowing users to fill the bag to their preferred weight and 
              firmness, tailoring it to individual training requirements.
            </li>
          </ul>
        </section>

        {/* Cons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cons of the Proslayer 6ft Heavy Bag</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Unfilled Shipping:</strong> Arrives unfilled, necessitating additional effort and materials to fill the bag 
              before use, which may be inconvenient for some users.
            </li>
            <li>
              <strong>Filling Instructions:</strong> While filling instructions are provided, achieving the ideal weight and 
              consistency can be challenging and time-consuming.
            </li>
            <li>
              <strong>Initial Setup Effort:</strong> The process of filling and setting up the bag requires time and effort, which 
              might not be suitable for those seeking immediate use.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400 mb-4">
            The Proslayer 6ft Tall 150lb Muay Thai Heavy Bag is a durable and versatile training tool, offering customization 
            options to suit various martial arts disciplines. Its heavy-duty construction and lifetime warranty make it an 
            appealing choice for dedicated martial artists and fitness enthusiasts. 
          </p>
          <p className="text-gray-400">
            However, potential buyers should be prepared for the initial effort required to fill and set up the bag before it 
            can be used effectively. For those willing to invest the time, this bag offers excellent value and performance 
            for a variety of training needs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ProslayerBagReview;
