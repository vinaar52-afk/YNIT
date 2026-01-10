'use client';

import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { useState } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'tour',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate WhatsApp message
    const whatsappMessage = `Hello YNIT!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;

    // For demo purposes, show success message
    setIsSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'tour',
        date: '',
        time: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-red-600 warm-glow">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your appointment with us today
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-light p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Booking Submitted!</h3>
                <p className="text-gray-600">We&apos;ll contact you soon to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+62 123 456 789"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="tour">Tour</option>
                    <option value="dokumen">Document</option>
                    <option value="study">Study</option>
                    <option value="medical">Medical</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Booking
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="card-light p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span> Booking Information
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form to request a booking. Our team will review your request and contact you within 24 hours to confirm availability and discuss your specific needs.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✓</span>
                  <span className="text-gray-600">Fast confirmation within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✓</span>
                  <span className="text-gray-600">Flexible scheduling options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 text-xl">✓</span>
                  <span className="text-gray-600">Professional consultation included</span>
                </li>
              </ul>
            </div>

            <div className="card-light p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📞</span> Contact Options
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Email</p>
                  <a href="mailto:info@ynit.com" className="text-red-600 font-semibold hover:text-red-700">
                    info@ynit.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Phone</p>
                  <a href="tel:+62123456789" className="text-red-600 font-semibold hover:text-red-700">
                    +62 123 456 789
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">WhatsApp</p>
                  <a
                    href="https://wa.me/62123456789?text=Hi%20YNIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:text-red-700"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Questions?"
        description="Contact our support team - we're here to help"
        buttonText="Chat with Us"
        buttonHref="https://wa.me/62123456789"
      />
    </>
  );
}
