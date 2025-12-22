import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '@/app/lib/posts';
import { Calendar, ArrowRight, Hash } from 'lucide-react';

export default function Newsletter() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Multiome <span className="text-teal-600">Academy</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between single-cell data and biological insight. 
            Tutorials, deep dives, and practical workflows.
          </p>
        </div>
      </div>

      {/* Post Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            // FIX: We use 'post.slug' as the key because 'id' does not exist
            <Link key={post.slug} href={`/newsletter/${post.slug}`} className="group relative block h-full">
              
              <article className="h-full flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300">
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Date & Meta */}
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Tags */}
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] font-semibold uppercase tracking-wide">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 'Read Article' Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-teal-700 group-hover:text-teal-800">
                  Read Issue
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
