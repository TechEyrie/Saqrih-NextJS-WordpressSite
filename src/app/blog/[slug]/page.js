'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import FooterSection from '../../../../components/icomat1/FooterSection'
import Header from '../../../../components/icomat1/Header'
import BlogPostSection from '../../../../components/icomat1-blog/BlogPostSection'
import { getBlogPostBySlug } from '../../../../components/icomat1-blog/blogPostsData'

gsap.registerPlugin(ScrollTrigger)

export default function BlogPostPage() {
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const post = getBlogPostBySlug(slug)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })

    const onTick = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', () => ScrollTrigger.update())
    ScrollTrigger.refresh()

    return () => {
      gsap.ticker.remove(onTick)
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis.destroy()
    }
  }, [slug])

  return (
    <div
      data-theme="dark"
      className="icomat1-laygrotesk"
      style={{ backgroundColor: '#FDFCF6', minHeight: '100vh' }}
    >
      <style jsx global>{`
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Header />
      <BlogPostSection post={post} />
      <FooterSection />
    </div>
  )
}
