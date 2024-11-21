import React from 'react';

const FIGHTRPremiumBoxingGlovesReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Page Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">FIGHTR® Premium Boxing Gloves Review</h1>
        <p className="text-lg text-gray-400 mb-6">
          A comprehensive review of the FIGHTR® Premium Boxing Gloves, highlighting their features, pros, and cons.
        </p>
        <div className="relative mx-auto w-3/4 lg:w-1/2">
          <img
            src="/Gear/Gloves/FIGHTR.jpg"
            alt="FIGHTR Premium Boxing Gloves"
            className="rounded shadow-lg"
          />
        </div>
        <div className="mt-6">
          <a
            href="https://amzn.to/4idtl6D"
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
          <h2 className="text-2xl font-semibold mb-4">Pros of the FIGHTR® Premium Boxing Gloves</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>High-Quality Materials:</strong> Constructed with premium PU leather and sturdy stitching, these gloves
              offer enhanced durability and longevity, suitable for rigorous training sessions.
            </li>
            <li>
              <strong>Ergonomic Design:</strong> The gloves feature an ergonomic design with extra soft inner material and
              additional padding, providing maximum comfort during use.
            </li>
            <li>
              <strong>Breathability:</strong> Incorporating breathable materials and ventilation, they help keep hands dry
              and maintain a firm grip throughout training.
            </li>
            <li>
              <strong>Stability and Impact Strength:</strong> Materials tested by professionals offer maximum shock absorption
              and wrist stabilization, allowing users to focus on performance without fear of injury.
            </li>
            <li>
              <strong>Versatility:</strong> Suitable for both professionals and beginners, these gloves are available in various
              sizes to accommodate women, men, and children across different martial arts disciplines.
            </li>
            <li>
              <strong>Additional Accessories:</strong> Each pair includes a carry bag, adding convenience for transportation
              and storage.
            </li>
            <li>
              <strong>Customer Satisfaction Guarantee:</strong> The manufacturer offers a satisfaction guarantee, promising
              replacement or refund if customers are not satisfied, reflecting confidence in their product.
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
                  <th className="border border-gray-700 px-4 py-2">FIGHTR® Premium Gloves</th>
                  <th className="border border-gray-700 px-4 py-2">Everlast Pro Style Training Gloves</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Material</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Premium PU Leather: Durable and resistant to wear.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Synthetic Leather: May wear out faster with heavy use.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Padding</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Ergonomic multi-layer padding for maximum shock absorption and comfort.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Single-layer foam padding, providing less support during intense sessions.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Breathability</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Excellent ventilation to keep hands dry during extended use.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Minimal ventilation, leading to potential discomfort from sweat buildup.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Accessories</td>
                  <td className="border border-gray-700 px-4 py-2">
                    Includes a carry bag for convenience and portability.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    Does not include additional accessories.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">Price</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <a
                      href="https://amzn.to/4idtl6D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Check Price
                    </a>
                    : Mid-range pricing for its premium features.
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    
                     
                    
                    Lower-priced but with fewer features.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Thoughts</h2>
          <p className="text-gray-400 mb-4">
            The FIGHTR® Premium Boxing Gloves offer a balance of durability, comfort, and versatility, making them a suitable
            choice for various martial arts practitioners. Their high-quality materials, ergonomic design, and included carry
            bag make them an excellent option for both beginners and professionals.
          </p>
          <p className="text-gray-400">
            Interested in these gloves?{" "}
            <a
              href="https://amzn.to/4idtl6D"
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

export default FIGHTRPremiumBoxingGlovesReview;
