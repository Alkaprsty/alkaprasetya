"use client"

import Link from "next/link"

export default function BlogSection() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>My Blog</h2>
          <div className="underline"></div>
        </div>
        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image1"></div>
            <div className="blog-content">
              <div className="blog-date">September 2018 - May 2019</div>
              <h3>Guide Customers Toward Achieving Their Future Goals</h3>
              <p>
                Assist customers in carrying out their activities and provide guidance to support their future
                aspirations...
              </p>
              <Link href="/blog/future-goals" className="read-more">
                Read More
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image2"></div>
            <div className="blog-content">
              <div className="blog-date">November 2019 - November 2023</div>
              <h3>Strategic Thinking in Account Management</h3>
              <p>How strategic planning can transform the way I approach complex problems...</p>
              <Link href="/blog/strategic-thinking" className="read-more">
                 Read More
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image3"></div>
            <div className="blog-content">
              <div className="blog-date">September 2024 - April 2025</div>
              <h3>The Importance of Collaborative Teams</h3>
              <p>Exploring how collaboration drives innovation and creates better outcomes for projects...</p>
              <Link href="/blog/collaborative-teams" className="read-more">
                Read More
              </Link>
            </div>
          </article>
        </div>

        <div className="center-btn">
          <Link href="/blog" className="btn primary">
             View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
