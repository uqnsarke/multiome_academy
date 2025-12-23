import { getPostData, getSortedPostsData } from '@/app/lib/posts';
import Link from 'next/link';
import { ArrowLeft, Calendar, MessageSquare } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100">
      
      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-6 pt-12">
        <Link href="/newsletter" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Academy
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Calendar size={12} /> {postData.date}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            {postData.title}
          </h1>
          
          {/* Main Image */}
          {postData.image && (
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img src={postData.image} alt={postData.title} className="w-full" />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-slate prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-500"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />

        {/* COMMENT SECTION / CALL TO ACTION */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Thoughts? Disagreements?</h3>
          <p className="text-slate-600 mb-6">
            I'd love to hear your perspective on this. Let's discuss it on LinkedIn.
          </p>
          <a 
            href="https://www.linkedin.com/in/nishat-sarker/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white font-bold rounded-full hover:bg-[#006396] transition-colors"
          >
            <MessageSquare size={18} /> Discuss on LinkedIn
          </a>
        </div>

      </article>
    </div>
  );
}
