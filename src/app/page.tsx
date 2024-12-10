import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="hero h-[50vh] flex items-center justify-center">
        <div className="relative w-full h-full">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted
          >
            <source src="/video/kickboxing_ring.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center px-4">
              <h2 className="text-4xl font-bold mb-4">Kickstart Your Journey</h2>
              <p className="text-lg mb-6">Gear, Tips, and Training for Every Fighter</p>
              <div className="space-x-4">
                <a href="#gear" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Explore Gear</a>
                <a href="#training" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Learn Techniques</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <main className="py-12">
        <div className="container mx-auto">
          {/* Gear Reviews */}
          <section id="gear" className="mb-12">
            <h3 className="text-3xl font-semibold mb-6 text-white">Top Gear Picks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Kickboxing Gloves</h4>
                <p className="text-gray-400">Explore the best gloves for training and competition.</p>
                <a href="/gear/gloves" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Punching Bags</h4>
                <p className="text-gray-400">Find the perfect bag for your home gym setup.</p>
                <a href="/gear/punch_bag" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Protective Gear</h4>
                <p className="text-gray-400">Stay safe with high-quality protective equipment.</p>
                <a href="/gear/protective" className="text-blue-400 mt-4 block hover:underline">Learn More</a>
              </div>
            </div>
          </section>

          {/* Training Tips */}
          <section id="training" className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">Training Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Things to consider before joining a gym</h4>
                <p className="text-gray-400">
                  Joining a gym for kickboxing is an exciting step, but choosing the right one can make all the difference. 
                  From class size and facilities to gym culture, this guide helps you find the perfect fit for your needs and goals.
                </p>
                <a href="/training/beginner/before_joining_a_gym" className="text-blue-400 mt-4 block hover:underline">Read More</a>
              </div>
              <div className="p-6 bg-gray-800 rounded">
                <h4 className="text-xl font-bold mb-4">Conditioning for Fighters</h4>
                <p className="text-gray-400">Improve stamina and strength with our kickboxing conditioning tips.</p>
                <a href="/training/conditioning" className="text-blue-400 mt-4 block hover:underline">Read More</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 pb-20">
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
