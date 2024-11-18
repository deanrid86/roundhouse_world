// File: pages/about.tsx
import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-4">About Roundhouse World</h2>
        <p className="text-lg text-gray-400">Empowering Fighters Worldwide with Knowledge, Gear, and Inspiration.</p>
      </section>

      {/* Content Section */}
      <main className="py-12">
        <div className="container mx-auto space-y-12 px-4">
          {/* Mission Statement */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              At Roundhouse World, our mission is to equip fighters of all levels with the tools, knowledge, and inspiration
              to excel in their journey. Whether you&apos;re a beginner seeking guidance or an experienced fighter looking for the best gear,
              we&apos;re here to help you kick stronger, faster, and smarter.
            </p>
          </section>

          {/* Personal Story */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-400 leading-relaxed">
              Roundhouse World was born from a passion for kickboxing and a desire to share that passion with the world.
              After starting my own kickboxing journey, I quickly realized the challenges of finding reliable information and quality gear.
              This website is the culmination of my journey and a platform to help others find their path in the world of kickboxing.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Why Choose Roundhouse World?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>In-depth reviews of the best kickboxing gear and equipment.</li>
              <li>Actionable training tips from experienced fighters and coaches.</li>
              <li>A community-driven platform designed to inspire and support fighters.</li>
            </ul>
          </section>

          {/* Meet the Team */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Meet the Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded text-center">
                <div className="mx-auto w-24 h-24 relative mb-4">
                  <Image
                    src="/team-member.jpg"
                    alt="Dean - Founder"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold">Dean</h4>
                <p className="text-gray-400">Founder & Kickboxing Enthusiast</p>
              </div>
              <div className="bg-gray-800 p-6 rounded text-center">
                <div className="mx-auto w-24 h-24 relative mb-4">
                  <Image
                    src="/team-member-2.jpg"
                    alt="Alex - Content Creator"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold">Alex</h4>
                <p className="text-gray-400">Content Creator & Gear Reviewer</p>
              </div>
              <div className="bg-gray-800 p-6 rounded text-center">
                <div className="mx-auto w-24 h-24 relative mb-4">
                  <Image
                    src="/team-member-3.jpg"
                    alt="Jamie - Training Expert"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold">Jamie</h4>
                <p className="text-gray-400">Training Expert & Coach</p>
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

export default AboutPage;
