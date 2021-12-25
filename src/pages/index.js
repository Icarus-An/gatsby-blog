import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello world
      <p><Link to="/blog">View Blog</Link></p>
      <p><Link to="/account">My Account</Link></p>
    </div>
  )
}
