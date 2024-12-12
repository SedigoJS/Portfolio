'use client'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: string; message: string } | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    // Simulate a form submission
    try {
      // Replace with actual API call logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully!',
      });
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Contact Me</h2>

      {status && (
        <div
          className={`mb-4 p-4 text-white rounded ${
            status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
