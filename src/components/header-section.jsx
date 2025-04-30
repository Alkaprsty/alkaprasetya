"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Active menu based on scroll position
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || ""
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo">
          <Link href="#home" className="logo-link">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Alka Prasetya"
              className="logo-img"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={activeSection === "about" ? "active" : ""} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#blog" className={activeSection === "blog" ? "active" : ""} onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}
