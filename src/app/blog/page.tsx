import Footer from '@/components/landing/footer'
import Nav from '@/components/landing/nav'
import BlogHero from '@/components/blog/blog-hero'
import BlogList from '@/components/blog/blog-list'
import { POSTS } from '@/components/blog/posts'

const BlogPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center z-10 relative bg-primary-foreground overflow-x-hidden">
      <Nav />
      <main className="w-full">
        <BlogHero />
        <BlogList posts={POSTS} />
      </main>
      <Footer />
    </div>
  )
}

export default BlogPage
