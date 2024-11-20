import React from 'react';

const RDXBoxingGlovesReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">RDX Boxing Gloves Review</h1>
        <p className="text-lg text-gray-400 mb-6">
          A comprehensive review of the RDX Boxing Gloves, Pro Training Sparring, Maya Hide Leather.
        </p>
        <div className="relative mx-auto w-3/4 lg:w-1/2">
          <img
            src="/Gear/Gloves/RDX_Pro.jpg"
            alt="RDX Boxing Gloves"
            className="rounded shadow-lg"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 max-w-4xl mx-auto">
        {/* Pros Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pros of the RDX Boxing Gloves</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Durable Material:</strong> Constructed from Maya Hide leather, these gloves offer enhanced durability and 
              longevity, suitable for rigorous training sessions.
            </li>
            <li>
              <strong>Multi-Layered Padding:</strong> Equipped with multiple layers of foam padding, they provide excellent shock 
              absorption, reducing the risk of hand and wrist injuries during heavy bag workouts and sparring.
            </li>
            <li>
              <strong>Ventilated Palm:</strong> The gloves feature a ventilated palm design, promoting airflow to keep hands cool 
              and dry, thereby enhancing comfort during extended training periods.
            </li>
            <li>
              <strong>Secure Fit:</strong> An adjustable hook-and-loop wrist strap ensures a snug and secure fit, offering additional 
              wrist support and stability.
            </li>
            <li>
              <strong>Versatile Use:</strong> Suitable for various martial arts disciplines, including Muay Thai, MMA, and Kickboxing, 
              accommodating a wide range of training needs.
            </li>
            <li>
              <strong>Size Variety:</strong> Available in multiple sizes (8, 10, 12, 14, 16, and 18 oz), catering to different user 
              preferences and training requirements.
            </li>
          </ul>
        </section>

        {/* Cons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cons of the RDX Boxing Gloves</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Synthetic Material:</strong> While durable, Maya Hide leather is a synthetic material and may not offer the 
              same feel or longevity as genuine leather gloves.
            </li>
            <li>
              <strong>Break-In Period:</strong> Some users report that the gloves require a break-in period to achieve optimal 
              comfort and flexibility.
            </li>
            <li>
              <strong>Bulkiness:</strong> The multi-layered padding, while protective, can make the gloves feel bulkier, potentially 
              affecting speed and precision for some users.
            </li>
            <li>
              <strong>Sizing Issues:</strong> A few users have experienced sizing discrepancies, finding the gloves either too tight 
              or too loose, indicating potential inconsistencies in sizing.
            </li>
            <li>
              <strong>Aesthetic Wear:</strong> Over time, the exterior may show signs of wear, such as fading or peeling, especially 
              with frequent use.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400 mb-4">
            The RDX Pro Training Sparring Boxing Gloves offer a balance of durability, protection, and comfort, making them a 
            suitable choice for various martial arts practitioners. Their multi-layered padding and ventilated palm design make 
            them ideal for long training sessions and heavy bag workouts.
          </p>
          <p className="text-gray-400">
            However, considerations regarding material preference, potential break-in time, and sizing should be taken into 
            account when selecting these gloves. Overall, they provide excellent value for the price and cater to a wide range 
            of training needs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default RDXBoxingGlovesReview;
