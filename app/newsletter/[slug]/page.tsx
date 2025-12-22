import React from 'react';
import { getSortedPostsData, getPostData } from '@/app/lib/posts';
import { ArrowLeft, Calendar, Hash } from 'lucide-react';

// This generates the URLs (issue-1, issue-2)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This is the Page Component
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100">
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/newsletter" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-medium text-sm">
            <ArrowLeft size={16} /> Back to Feed
          </a>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Multiome Academy</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-teal-600 mb-4">
            <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
              <Calendar size={12} /> {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
        </header>

        {/* THIS IS WHERE THE MARKDOWN RENDERS */}
        <article 
          className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed 
                     prose-headings:font-bold prose-headings:text-slate-900 
                     prose-a:text-teal-600 prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:pr-4"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-slate-200">
           <h4 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
              <Hash size={14} /> Topics
           </h4>
           <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                  #{tag}
                </span>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
