import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link href="#home">
              Alka<span>Prasetya</span>
            </Link>
          </div>
          <div className="footer-nav">
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Alka Prasetya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
