import React from 'react';
import Link from 'next/link'; // FIX 1: Use Next.js Link for faster navigation
import { getSortedPostsData } from '@/lib/posts'; // FIX 2: Correct path (removed 'app/')
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsletterList() {
  const posts = getSortedPostsData(); 

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 relative">
      
      {/* --- HERO SECTION --- */}
      <div className="relative border-b border-slate-100 bg-slate-50/50 pt-20 pb-16 px-6 text-center">
         <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Multiome <span className="text-teal-600">Insights</span>
         </h1>
         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Deep dives into single-cell multiomics, spatial transcriptomics, and computational workflows.
         </p>
      </div>

      {/* --- POSTS LIST --- */}
      <div className="container mx-auto px-6 max-w-3xl py-16">
        <div className="space-y-16">
          {posts.map((post) => (
            // FIX 3: Use 'post.id' instead of 'post.slug' (our utility returns 'id')
            <article key={post.id} className="group relative">
              
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                <Calendar size={12} />
                {post.date}
              </div>

              <Link href={`/newsletter/${post.id}`} className="block">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h2>
                
                {/* Note: Ensure your markdown files have a 'summary' field at the top! 
                    If not, this part will be empty. */}
                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                  {post.summary || "Click to read the full article..."}
                </p>
                
                <div className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-teal-100 group-hover:border-teal-500 transition-all pb-1 gap-2">
                   Read Insight <ArrowRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
