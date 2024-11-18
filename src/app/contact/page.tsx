"use client";


import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Mock form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-400">
          Have a question or want to collaborate? Reach out to us using the form below or email us at{' '}
          <a href="mailto:roundhouseworldemail@gmail.com" className="text-blue-400 hover:underline">
            roundhouseworldemail@gmail.com
          </a>.
        </p>
      </section>

      {/* Contact Form */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-xl">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="mt-4 text-green-500">Your message has been sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 text-red-500">There was an error sending your message. Please try again.</p>
            )}
          </form>
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

export default ContactPage;
