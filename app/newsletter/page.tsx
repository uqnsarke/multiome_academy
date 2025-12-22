import React from 'react';
import { getSortedPostsData } from '@/app/lib/posts'; // NEW IMPORT
import { ArrowLeft, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterList() {
  const posts = getSortedPostsData(); // FETCH POSTS

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 relative">
      {/* ... (Keep your Header/Hero section exactly the same as before) ... */}
      <div className="relative border-b border-slate-100 bg-slate-50/50">
         {/* ... (The header code I gave you in the previous message) ... */}
         {/* Just ensure you keep the 'posts.map' loop below! */}
      </div>

      <div className="container mx-auto px-6 max-w-3xl py-16">
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group relative">
               {/* ... (This article card code stays the same) ... */}
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
