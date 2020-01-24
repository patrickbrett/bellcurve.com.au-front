import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
  state = {
    isUserScrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ isUserScrolling: (window.scrollY > 0) })
  }

    render() {
    return (
        <nav className={this.state.isUserScrolling ? 'scrolled' : 'not-scrolled'}>
          <img className={`logo logo-light`} src={`img/logo.png`} draggable={false} />
          {/*<div>*/}
          {/*  <button>Menu</button>*/}
          {/*</div>*/}
          <style jsx>{`
    .logo {
      height: 60px;
    }
    
    nav {
      position: absolute;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      width: calc(100vw - 40px);
      padding: 0 20px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      z-index: 2;
    }
    
    nav.scrolled {
      justify-items: flex-end;
    }
    
    nav.scrolled .logo {
      // animation: 0.4s appear;
      // margin-right: auto;
    }
    
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    
    @media only screen and (max-width: 375px) {
      .logo {
        height: 40px;
      }
      
      nav {
        height: 60px;
      }
    }
    `}</style>
        </nav>
    )
    }
}

export default Nav
