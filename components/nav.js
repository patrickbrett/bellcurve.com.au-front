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
      height: 60px;
    }
    
    nav {
      position: fixed;
      background: #fff;
      width: 100vw;
      height: 100px;
      display: flex;
      align-items: center;
      justify-items: center;
      align-content: center;
      justify-content: center;
      z-index: 1;
    }
    `}</style>
  </nav>
)

export default Nav
