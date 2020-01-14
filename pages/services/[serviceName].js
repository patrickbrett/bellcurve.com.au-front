import React from 'react'
import Nav from '../../components/nav'
import Header from '../../components/Header'
import { useRouter } from "next/router"

const Services = () => {
  const router = useRouter()

  return (
      <div>
        <Header />
        <Nav />
        <div id={`quoi`}>QUOI</div>
        <style jsx>{`
        #quoi {
          color: #000 !important;
          background: #f00;
        }
    `}</style>
      </div>
  )
}

export default Services