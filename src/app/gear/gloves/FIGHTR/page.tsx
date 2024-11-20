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

        {/* Cons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cons of the FIGHTR® Premium Boxing Gloves</h2>
          <ul className="list-disc list-inside text-gray-400 mb-4">
            <li>
              <strong>Synthetic Material:</strong> While durable, the use of PU leather may not provide the same feel or 
              longevity as genuine leather gloves.
            </li>
            <li>
              <strong>Limited Color Options:</strong> The gloves are available in a limited range of colors, which may not 
              cater to all aesthetic preferences.
            </li>
            <li>
              <strong>Sizing Considerations:</strong> Some users have reported that the gloves run slightly larger or smaller 
              than expected, suggesting potential inconsistencies in sizing.
            </li>
            <li>
              <strong>Break-In Period:</strong> A few users have mentioned that the gloves require a break-in period to achieve 
              optimal comfort and flexibility.
            </li>
          </ul>
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
            However, considerations regarding material preference, sizing, and potential break-in time should be taken into 
            account when selecting these gloves. Overall, they provide great value and performance for those looking for 
            reliable training gloves.
          </p>
        </section>
      </main>
    </div>
  );
};

export default FIGHTRPremiumBoxingGlovesReview;
