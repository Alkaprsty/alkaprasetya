import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function initializeAnimations() {
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // About section
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  // Animate progress bars when in view
  gsap.from(".progress", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    width: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",
  })

  // Blog cards
  // gsap.from(".blog-card", {
  //   scrollTrigger: {
  //     trigger: ".blog",
  //     start: "top 80%",
  //     toggleActions: "play none none none",
  //   },
  //   y: 50,
  //   opacity: 1,
  //   duration: 0.8,
  //   stagger: 0.2,
  //   ease: "power3.out",
  // })

  // Project cards
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  })

  // Contact section
  gsap.from(".contact-info", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (!targetId || targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: "smooth",
        })
      }
    })
  })
}
