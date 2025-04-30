"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const images = [
    "/placeholder.svg?height=500&width=350",
    "/placeholder.svg?height=500&width=350",
    "/placeholder.svg?height=500&width=350",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="image-slider">
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt={`Profile image ${index + 1}`}
                    width={350}
                    height={500}
                    className={`slider-img ${index === activeImageIndex ? "active" : ""} ${index === 2 ? "gitar" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="highlight">Passionate about working on impactful projects with collaborative teams.</p>
            <p>
              I thrive in spaces where strategy, creativity, and problem solving come together. I enjoy helping teams
              grow and navigating challenges with smart solutions.
            </p>
            <p>
              Work is about more than hitting goals — it's about learning, growing, and creating real progress together.
            </p>
            <div className="skills">
              <div className="skill">
                <span>Strategy</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span>Creativity</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span>Problem Solving</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill">
                <span>Collaboration</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
