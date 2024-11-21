import React from "react";

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
        <div className="mt-6">
          <a
            href="https://amzn.to/4fXA56E"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          >
            Check Price on Amazon
          </a>
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
              longevity, suitable for rigorous training sessions.{" "}
              <a
                href="https://amzn.to/4fXA56E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Buy on Amazon
              </a>
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

      {/* Comparison Table */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">Comparison Table</h2>
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-left border-collapse border border-gray-700 text-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-700 px-4 py-2">Feature</th>
          <th className="border border-gray-700 px-4 py-2">RDX Boxing Gloves</th>
          <th className="border border-gray-700 px-4 py-2">Everlast Pro Style Gloves</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Material</td>
          <td className="border border-gray-700 px-4 py-2">
            Maya Hide Leather: A synthetic material known for its durability and resistance to wear and tear.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Synthetic Leather: Offers a reasonable lifespan but may not match the durability of higher-quality synthetics or genuine leather.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Padding</td>
          <td className="border border-gray-700 px-4 py-2">
            Multi-layered foam padding designed for optimal shock absorption, reducing the risk of hand and wrist injuries during training.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Single-layer foam padding, providing basic protection suitable for light training sessions.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Ventilation</td>
          <td className="border border-gray-700 px-4 py-2">
            Features a ventilated palm design to promote airflow, keeping hands cool and dry during extended use.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Lacks specialized ventilation features, which may lead to increased perspiration and discomfort over time.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Fit and Support</td>
          <td className="border border-gray-700 px-4 py-2">
            Equipped with an adjustable hook-and-loop wrist strap for a secure fit and enhanced wrist support.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Utilizes a standard hook-and-loop closure, offering moderate wrist support.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Versatility</td>
          <td className="border border-gray-700 px-4 py-2">
            Suitable for various martial arts disciplines, including Muay Thai, MMA, and Kickboxing.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Primarily designed for boxing training, with limited versatility for other martial arts.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 px-4 py-2">Price</td>
          <td className="border border-gray-700 px-4 py-2">
            <a
              href="https://amzn.to/4fXA56E"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Check Price
            </a>
            : Mid-range pricing, reflecting the quality materials and features offered.
          </td>
          <td className="border border-gray-700 px-4 py-2">
            Generally more affordable, making them accessible for beginners or those on a tight budget.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
          <p className="text-gray-400">
            Interested in these gloves?{" "}
            <a
              href="https://amzn.to/4fXA56E"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Check them out on Amazon
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default RDXBoxingGlovesReview;
