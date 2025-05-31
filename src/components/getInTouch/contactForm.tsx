import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (formStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✨</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-500">Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#111] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#111] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-[#111] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all resize-none"
            placeholder="Tell me about your project..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className="w-full bg-[#111] hover:bg-[#181818] text-white rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70"
      >
        {formStatus === 'submitting' ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            <span>Sending...</span>
          </div>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;