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
    {/*<div>*/}
    {/*  <button>Menu</button>*/}
    {/*</div>*/}
    <style jsx>{`
    #logo {
      height: 60px;
    }
    
    nav {
      position: fixed;
      background: #fff;
      width: calc(100vw - 40px);
      padding: 0 20px;
      height: 100px;
      display: flex;
      align-items: center;
      // justify-content: flex-start;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }
    
    @media only screen and (max-width: 375px) {
      #logo {
        height: 40px;
      }
      
      nav {
        height: 60px;
      }
    }
    `}</style>
  </nav>
)

export default Nav
