import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Tag, Share2, Printer } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/MotionComponents";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-sand-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-forest mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-coral hover:underline font-bold">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-sand-light selection:bg-coral/10">
      <ReadingProgressBar />

      <article className="pt-32 pb-32">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <FadeIn direction="left" delay={0.1} className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-2 text-forest/60 hover:text-forest font-bold text-sm uppercase tracking-wider group transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Insights</span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} duration={0.8}>
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-4 py-1.5 bg-forest text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-forest/10">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-forest mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-forest/10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center text-coral border border-coral/30">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest/40 uppercase tracking-widest leading-none mb-1">Written By</p>
                  <p className="text-forest font-bold">{blog.author}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-forest-light/20 flex items-center justify-center text-forest-light border border-forest-light/30">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest/40 uppercase tracking-widest leading-none mb-1">Published On</p>
                  <p className="text-forest font-bold">{blog.date}</p>
                </div>
              </div>

              <div className="ml-auto flex items-center space-x-4">
                <button className="p-3 bg-white rounded-full text-forest/60 hover:text-coral hover:shadow-xl transition-all border border-forest/5 shadow-sm">
                  <Share2 size={20} />
                </button>
                <button className="p-3 bg-white rounded-full text-forest/60 hover:text-coral hover:shadow-xl transition-all border border-forest/5 shadow-sm">
                  <Printer size={20} />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Featured Image */}
        <ScaleIn delay={0.2} duration={1} className="max-w-6xl mx-auto px-4 mb-20">
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-3xl shadow-forest/5 border-8 border-white/50">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScaleIn>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn delay={0.4} duration={1}>
            <div className="
              text-forest/80 text-base md:text-lg leading-relaxed space-y-8
              [&>p]:mb-8 [&>p]:leading-[1.8]
              [&>h1]:text-4xl md:text-6xl [&>h1]:font-serif [&>h1]:font-bold [&>h1]:text-forest [&>h1]:mb-10 [&>h1]:mt-20 [&>h1]:leading-[1.1] [&>h1]:tracking-tight
              [&>h2]:text-3xl md:text-4xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-forest [&>h2]:mb-8 [&>h2]:mt-24 [&>h2]:leading-[1.2] [&>h2]:pb-6 [&>h2]:border-b [&>h2]:border-forest/10 [&>h2]:tracking-tight
              [&>h3]:text-xl md:text-2xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-forest [&>h3]:mb-6 [&>h3]:mt-16 [&>h3]:leading-tight
              [&>ul]:list-disc [&>ul]:pl-10 [&>ul]:mb-8 [&>ul]:space-y-6
              [&>ol]:list-decimal [&>ol]:pl-10 [&>ol]:mb-8 [&>ol]:space-y-6
              [&_li]:pl-3 [&_li::marker]:text-coral [&_li::marker]:font-bold [&_li::marker]:text-2xl
              [&>hr]:my-24 [&>hr]:border-forest/10 [&>hr]:border-t-2 [&>hr]:w-1/3 [&>hr]:mx-auto
              [&>strong]:text-forest [&>strong]:font-bold [&>strong]:bg-coral/10 [&>strong]:px-1.5 [&>strong]:py-0.5 [&>strong]:rounded-md
              [&>blockquote]:border-l-[6px] [&>blockquote]:border-coral [&>blockquote]:bg-white [&>blockquote]:shadow-2xl [&>blockquote]:shadow-forest/10 [&>blockquote]:py-10 [&>blockquote]:px-12 [&>blockquote]:rounded-r-[3rem] [&>blockquote]:italic [&>blockquote]:my-16 [&>blockquote]:text-2xl md:text-3xl [&>blockquote]:text-forest [&>blockquote]:font-serif [&>blockquote]:leading-snug [&>blockquote]:text-balance
              [&>img]:rounded-[3rem] [&>img]:shadow-3xl [&>img]:my-20 [&>img]:border-8 [&>img]:border-white
              [&>table]:w-full [&>table]:my-10 [&>table]:border-collapse [&>table]:rounded-2xl [&>table]:overflow-hidden [&>table]:shadow-lg [&>table]:text-base
              [&_th]:bg-forest [&_th]:text-white [&_th]:font-semibold [&_th]:text-left [&_th]:p-4 [&_th]:text-sm [&_th]:uppercase [&_th]:tracking-wide
              [&_td]:p-4 [&_td]:border-b [&_td]:border-forest/10 [&_td]:text-forest/80 [&_td]:leading-relaxed
              [&_tr:nth-child(even)_td]:bg-forest/5 [&_tr:hover_td]:bg-coral/5
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
            </div>
          </FadeIn>

          {/* Tags / Footer Meta */}
          <div className="mt-20 pt-10 border-t border-forest/10">
            <div className="flex items-center space-x-4">
              <Tag size={20} className="text-coral" />
              <div className="flex space-x-2">
                {["Health", "Kokrajhar", "Medical Research", blog.category].map(tag => (
                  <span key={tag} className="text-sm font-bold text-forest/50 hover:text-coral cursor-pointer transition-colors">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Other Posts Preview / Newsletter */}
      <section className="bg-forest py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Stay Updated with Our Research</h2>
            <p className="text-white/70 text-lg mb-12 font-medium">Join our community newsletter to receive the latest medical insights from Nilachal Research Centre directly in your inbox.</p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
                <button className="bg-coral text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-forest transition-all shadow-xl shadow-coral/20">
                    Subscribe Now
                </button>
            </div>
        </div>
      </section>

    </main>
  );
}
