'use client';
import Image from 'next/image';
import { Download, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email captured: ${email}. (Connect to ConvertKit/Mailchimp here)`);
    // Add actual submission logic here
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
       {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden backdrop-blur-sm grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center shadow-2xl">
          
          {/* Left: Copy and Form */}
          <div className="space-y-8">
            <div>
               <span className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 mb-4">
                  <span>New Resource</span>
               </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stop Googling Syntax. <br/>Download the Ultimate Scanpy Cheat Sheet.
              </h2>
              <p className="text-slate-300 text-lg">
                The entire single-cell analysis pipeline in Python, condensed into one printable reference guide.
              </p>
            </div>

            <ul className="space-y-3 text-slate-200">
              <li className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-purple-400" /> <span>Complete AnnData Structure breakdown</span></li>
              <li className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-purple-400" /> <span>Standard QC & Preprocessing steps</span></li>
              <li className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-purple-400" /> <span>Visualization gallery code snippets</span></li>
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 whitespace-nowrap transition">
                <Download className="w-5 h-5" />
                <span>Get PDF</span>
              </button>
            </form>
             <p className="text-sm text-slate-500">Join other bioinformaticians. Unsubscribe anytime.</p>
          </div>

          {/* Right: Image Preview */}
          {/* Ensure you have an image at /public/assets/image_8.png or update this path! */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)] transform hover:scale-[1.02] transition duration-500">
            <Image
              src="/assets/image_8.png"
              alt="Scanpy Cheat Sheet Preview"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
