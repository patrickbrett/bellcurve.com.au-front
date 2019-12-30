import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <img id={`logo`} src={`./logo.svg`} draggable={false} />
    <div>
      <button>Menu</button>
    </div>
    <style jsx>{`
    #logo {
      width: 200px;
    `}</style>
  </nav>
)

export default Nav
