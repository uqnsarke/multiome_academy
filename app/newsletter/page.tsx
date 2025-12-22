'use client';

import React from 'react';
import { posts } from './data';
import { ArrowLeft, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterList() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 relative">
      
      {/* --- STYLISH HEADER SECTION --- */}
      <div className="relative border-b border-slate-100 bg-slate-50/50">
        
        {/* 1. Subtle Background Grid (Adds texture) */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none"></div>
        
        {/* 2. Soft Gradient Glow (Adds depth) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl py-20 relative z-10 text-center">
          
          {/* Navigation */}
          <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-600 transition-colors mb-10 font-bold text-xs uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Home
          </a>
          
          {/* Badge */}
          <div className="flex justify-center mb-6">
             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-bold uppercase tracking-wider text-teal-600">
                <Sparkles size={12} className="text-purple-500" />
                The Knowledge Log
             </span>
          </div>

          {/* Headline with Gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
            Multiome Academy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500 animate-text-shimmer bg-[length:200%_auto]">
              Insights
            </span>
          </h1>
          
          {/* YOUR TEXT - Styled elegantly */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
             <span className="font-medium text-slate-900">Where biology meets code.</span> Exploring single-cell mechanisms, computational strategies, and the future of genomic research.
          </p>
          
        </div>
      </div>

      {/* --- THE FEED --- */}
      <div className="container mx-auto px-6 max-w-3xl py-16">
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group relative">
              
              {/* Decorative side line on hover */}
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                <Calendar size={12} />
                {post.date}
              </div>

              <a href={`/newsletter/${post.slug}`} className="block">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                  {post.summary}
                </p>
                <div className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-teal-100 group-hover:border-teal-500 transition-all pb-1 gap-2">
                   Read Insight <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
