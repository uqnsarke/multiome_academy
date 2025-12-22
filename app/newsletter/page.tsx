import React from 'react';
import { posts } from './data'; // We import your content here
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';

export default function NewsletterList() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100">
      
      {/* Header Section */}
      <div className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <a href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-8 font-medium text-sm">
            <ArrowLeft size={16} /> Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Multiome Academy <span className="text-teal-600">Insights</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
             Deep dives into single-cell algorithms and python tutorials.
          </p>
        </div>
      </div>

      {/* The Article Feed */}
      <div className="container mx-auto px-6 max-w-3xl py-12">
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-slate-100 pb-12 last:border-0">
              
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                <Calendar size={14} />
                {post.date}
              </div>

              <a href={`/newsletter/${post.slug}`} className="block">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  {post.summary}
                </p>
                <div className="flex items-center font-bold text-teal-600 gap-1 group-hover:gap-2 transition-all">
                   Read Article <ArrowRight size={16} />
                </div>
              </a>

            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
