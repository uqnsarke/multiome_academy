import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/app/lib/posts'; 
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      
      {/* Header with Visual Upgrade */}
      <div className="relative bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/50 via-white to-white z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} /> Thought Share
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Multiome <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Academy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Beyond the code. <span className="text-slate-900 font-medium">Critical thinking</span> for the multiomics era.
          </p>
        </div>
      </div>

      {/* Post Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/newsletter/${post.slug}`} className="group relative block h-full">
              
              <article className="h-full flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                
                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  
                  {/* Date */}
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Tags (Safe Version) */}
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {(post.tags || []).slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-500 border border-slate-100 rounded-md text-[11px] font-semibold uppercase tracking-wide group-hover:border-teal-100 group-hover:text-teal-600 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 'Read Article' Footer */}
                <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-teal-700 group-hover:bg-teal-50/50 transition-colors">
                  Read Insight
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
