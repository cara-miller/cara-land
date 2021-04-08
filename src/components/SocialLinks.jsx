import React from "react"
import { FaTwitter } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <nav className="social-links">
      <ul className="nav-ul">
        <li>
          <a href="https://twitter.com/caramargotsays">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  )
}
