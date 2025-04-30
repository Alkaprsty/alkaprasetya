"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"

export default function HeroSection() {
  const textElementsRef = useRef([])
  const intervalRef = useRef(null)

  useEffect(() => {
    // Hero section animations
    const heroTimeline = gsap.timeline()

    heroTimeline
      .to(".hero-content .title", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".description",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        ".cta-buttons",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        ".shape",
        {
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1",
      )
      .to(".scroll-indicator", {
        opacity: 1,
        duration: 1,
      })

    // Text animation for subtitle
    const textElements = textElementsRef.current
    let currentIndex = 0

    function animateText() {
      // Hide the current text
      gsap.to(textElements[currentIndex], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          // Update index
          currentIndex = (currentIndex + 1) % textElements.length

          // Show the next text
          gsap.fromTo(textElements[currentIndex], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
        },
      })
    }

    // Initial text display
    if (textElements.length > 0) {
      gsap.to(textElements[0], { opacity: 1, y: 0, duration: 0.5 })

      // Set interval for text animation
      intervalRef.current = setInterval(animateText, 3000)
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="title">
            Hello, I'm <span>Alka Prasetya</span>
          </h1>
          <div className="subtitle">
            <span className="text-animate" ref={(el) => el && (textElementsRef.current[0] = el)}>
              Account Management
            </span>
            <span className="text-animate" ref={(el) => el && (textElementsRef.current[1] = el)}>
              Scrum
            </span>
            <span className="text-animate" ref={(el) => el && (textElementsRef.current[2] = el)}>
              Problem Solver
            </span>
          </div>
          <p className="description">Turning ideas into impactful digital experiences</p>
          <div className="cta-buttons">
            <Link href="#projects" className="btn primary">
              View My Work
            </Link>
            <Link href="#contact" className="btn secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="shape">
            <div className="shape2">
             <model-viewer 
  id="avatar"
  src="/assets/3d/model4.glb"
  alt="3D Model"
  auto-rotate 
  camera-controls 
  shadow-intensity="1"
  disable-zoom 
  style={{ width: "100%", height: "100%" }}>
                </model-viewer>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>be there or be square!</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}
