"use client"

import { useEffect } from "react"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BlogSection from "@/components/blog-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer-section"
import { initializeAnimations } from "@/lib/animations"

export default function Home() {
  useEffect(() => {
    // Initialize custom cursor
    const cursor = document.querySelector(".cursor")

    if (cursor) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      })

      document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
      })

      document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
      })

      // Elements that should have hover effect with cursor
      const links = document.querySelectorAll("a, button, .project-card, .blog-card")

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
          cursor.style.backgroundColor = "rgba(255, 107, 107, 0.4)"
        })

        link.addEventListener("mouseleave", () => {
          cursor.style.transform = "translate(-50%, -50%) scale(1)"
          cursor.style.backgroundColor = "rgba(74, 99, 231, 0.3)"
        })
      })
    }

    // Initialize GSAP animations
    initializeAnimations()

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", () => {})
      document.removeEventListener("mousedown", () => {})
      document.removeEventListener("mouseup", () => {})
    }
  }, [])

  return (
    <main>
      
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
