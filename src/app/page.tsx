// File: pages/index.tsx
import React from 'react';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
     

      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-[50vh] flex items-center justify-center" style={{ backgroundImage: "url('main/main.jpg')" }}>
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Kickstart Your Journey</h2>
          <p className="text-lg mb-6">Gear, Tips, and Training for Every Fighter</p>
          <div className="space-x-4">
            <a href="#gear" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Explore Gear</a>
            <a href="#training" className="bg-transparent border border-white px-6 py-2 rounded hover:bg-gray-800">Learn Techniques</a>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <main className="py-12">
        <div className="container mx-auto">
          {/* Gear Reviews */}
          <section id="gear" className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">Top Gear Picks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Kickboxing Gloves</h4>
                <p className="text-gray-400">Explore the best gloves for training and competition.</p>
                <a href="/gear-reviews" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Punching Bags</h4>
                <p className="text-gray-400">Find the perfect bag for your home gym setup.</p>
                <a href="/gear-reviews" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Protective Gear</h4>
                <p className="text-gray-400">Stay safe with high-quality protective equipment.</p>
                <a href="/gear-reviews" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
            </div>
          </section>

          {/* Training Tips */}
          <section id="training" className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">Training Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Roundhouse Kick Mastery</h4>
                <p className="text-gray-400">Learn how to perfect your roundhouse kick with expert techniques.</p>
                <a href="/training-tips" className="text-blue-400 mt-4 block hover:underline">Read More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Conditioning for Fighters</h4>
                <p className="text-gray-400">Improve stamina and strength with our kickboxing conditioning tips.</p>
                <a href="/training-tips" className="text-blue-400 mt-4 block hover:underline">Read More</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Roundhouse World. All rights reserved.</p>
          <p className="text-gray-500">
            <a href="/policies" className="hover:underline">Privacy Policy</a> | <a href="/policies" className="hover:underline">Affiliate Disclaimer</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
