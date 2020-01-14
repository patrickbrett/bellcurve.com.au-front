import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Bellcurve | Get your small business where you want it to be.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div id={`city-blur-container`}>
      <div>Get your small business where you want it to be.</div>
    </div>

    <div className={`blue-container`}>
      <div className={`container-flex-right`}>
        <section className={`text-left`}>
          <p>
            Bellcurve is a one-man design, development and marketing agency
            founded by Patrick Brett and based out of Melbourne.
          </p>
          <p>
            I specialise in custom websites and sales funnel optimisation.
          </p>
        </section>

        <div className={`overhang overhang-right`}>
          <img className={`icon-overhang`} src={`australia-melbourne.svg`} />
        </div>
      </div>

      <div className={`container-flex-left`}>
        <div className={`overhang overhang-left`}>
          <img className={`icon-overhang`} src={`map-flag.svg`} />
        </div>

        <section className={`text-right`}>
          <p>
            My values are simplicity, communication and expertise.
            This means I won’t keep you busy with technical details -
            I take care of the tricky stuff like domains, web hosting and availability
            so that you can focus on what matters most: your business.
          </p>
        </section>
      </div>
    </div>

    <section>
      <div>Get in touch for a free quote - I don't bite!</div>
      <div>So, what do you do? ...</div>
      <textarea />
      <button>Send an enquiry</button> or keep scrolling to see what my clients have to say...
    </section>

    <section id={`testimonials`}>
      <div className={`testimonial`}>
        <p>"Patrick went above and beyond with our picture frame business. The site is beautiful and functional, and with Bellcurve's assistance we've tripled our marketing reach on the same budget."</p>
        <p>- Kim Lay, Bentleigh Art 'n' Frame</p> {/* TODO: her last name might actually be Heng, better check */}
        <p>See the case study &raquo;</p>
      </div>

      <div className={`testimonial`}>
        <p>
          "We came to Bellcurve with a very specific problem that no one we had talked to had been able to solve,
          and Patrick listened carefully before coming up with the perfect solution.
          I’d recommend his services to any small business looking for creative solutions
          to their technical and business problems."
        </p>
        <p>- Andrew Rogers, Noise Consulting</p>
        <p>See the case study &raquo;</p>
      </div>

      <div className={`testimonial`}>
        <p>"I used to have a very plain homepage set up for my art business, as well as a small Instagram account.
          Patrick showed me what a professional site could look like,
          set me up with a beautiful custom design that perfectly fit what I was trying to express,
          and now I have more students lining up for my art lessons than I can handle!"
        </p>
        <p>- Gayle Stone, artist</p>
        <p>See the case study &raquo;</p>
      </div>
    </section>

    <section id={`find-out-more`}>
      <div id={`find-out-more-text`}>Find out more about...</div>
      <ul id={`find-out-more-list`}>
        <li>
          <img src={`laptop.svg`} className={`icon-med`} id={`icon-laptop`} draggable={false} />
          <div>Custom Websites</div>
        </li>
        <li>
          <img src={`marketing.svg`} className={`icon-med`} id={`icon-marketing`} draggable={false} />
          <div>Digital Marketing</div>
        </li>
        <li>
          <img src={`phone.svg`} className={`icon-med`} id={`icon-phone`} draggable={false} />
          <div>Mobile Apps</div>
        </li>
      </ul>
    </section>

    <div id={`footer-container`}>
      <section id={`an-idea`}>
        <div className={`inner-title`}>It all starts with an idea.</div>
        <div className={`inner-contact`}>
          If you're looking for:
          <ul>
            <li>a clean, professional online presence that puts your brand's best foot forward</li>
            <li>hi-tech solutions without the technical jargon</li>
            <li>a Melbourne-based Aussie you can meet with in person when needed</li>
            <li>or just to have a chat about what's possible...</li>
          </ul>
          <p>... then let's get in touch!</p>
          <p>Your email: <input /></p>
          <textarea rows={5} placeholder={`Tell me a little bit about what you do. Make sure to include links to your current site and social media pages if you have them.`} />
          <button>Submit</button>
          <div>I'll follow up within a couple of business days and we'll go from there.</div>
        </div>
      </section>

      <section id={`footer`}>
        <div>&copy; 2020 Bellcurve. All rights reserved.</div>
      </section>
    </div>

    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Cookie|Mukta&display=swap');
      
      * {
        font-family: "Mukta", sans-serif;
      }
      
      #city-blur-container {
        background: url("city-blur.png"); /* TODO: optimise size */
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 400px;
        position: relative;
        top: 100px;
        margin-bottom: 100px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      
      #city-blur-container > div {
        font-family: "Mukta", sans-serif;
        color: #fff;
        font-size: 72px;
        width: 70%;
        line-height: 80px;
      }
      
      .blue-container {
        background: linear-gradient(45deg, #59C3D4, #245695);
        width: 100vw;
        overflow: auto;
        color: #fff;
        font-size: 24px;
        padding: 50px 0;
      }
      
      .blue-container > div {
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .blue-container section {
        width: 70%;
        padding: 0 5%;
      }
      
      .blue-container .text-left {
        text-align: left;
        float: left;
        clear: right;
      }
      
      .blue-container .text-right {
        text-align: right;
        float: right;
        clear: left;
      }
      
      .overhang {
        background: #fff;
        width: auto;
        padding: 20px;
        display: inline-flex;
      }
      
      .overhang-left {
        float: left;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        clear: left;
      }
      
      .overhang-right {
        float: right;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        clear: right;
      }
      
      .icon-overhang {
        height: 120px;
        margin: 40px;
      }
      
      #find-out-more {
        background: linear-gradient(45deg, #59C3D4, #245695);
        color: #fff;
        padding: 120px 0;
      }
      
      #find-out-more-text {
        font-family: "Cookie", sans-serif;
        font-size: 48px;
        text-align: center;
        margin-bottom: 80px;
      }
      
      #find-out-more-list {
        display: flex;
        justify-content: space-around;
      }
      
      #find-out-more-list li {
        list-style-type: none;
        display: block;
        text-transform: uppercase;
        font-family: "Mukta", sans-serif;
        font-size: 28px;
        text-align: center;
        display: block;
        padding: 40px;
        transition: background 0.3s;
        border-radius: 20px;
      }
      
      #find-out-more-list li:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) inset;
      }
      
      .icon-med {
        height: 100px;
      }
      
      #an-idea {
        background: url("desk.jpg"); /* TODO: optimise size */
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 400px;
        display: flex;
        text-align: center;
        // justify-content: center;
        justify-content: space-evenly;
        align-items: center;
        padding: 300px 0;
      }
      
      #an-idea > .inner-title {
        font-family: "Mukta", sans-serif;
        color: #fff;
        font-size: 72px;
        line-height: 80px;
      }
      
      #an-idea > .inner-contact {
        background: rgba(255, 255, 255, 0.9);
        padding: 40px;
        text-align: left;
      }
      
      .inner-contact textarea {
        width: 100%;
        font-size: 14px;
      }
      
      #footer-container {
        position: relative;
      }
      
      #footer {
        // text-align: center;
        width: 100vw;
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.3);
      }
      
      @media only screen and (min-width: 1920px) {
      .container-flex-right {
        position: relative;
        display: block;
      }
      
      .container-flex-right .overhang {
        width: 100%;
        transition: all 1s;
      }
      
      .container-flex-right .text-left {
        // opacity: 0;
        // width: 0;
        color: #000;
        position: absolute;
        width: 65%;
        transition: all 1s;
      }
      
        .overhang-left {
          border-top-left-radius: 40px;
          border-bottom-left-radius: 40px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          background: none;
        }
        
        .overhang-left img {
          filter: invert(100%);
        }
  
        .overhang-right {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: 40px;
          border-bottom-right-radius: 40px;
        }
        
        .container-flex-left {
          float: right;
        }
        
        .container-flex-right {
          float: left;
        }
        
        .container-flex-right, .container-flex-left {
          width: 50% !important;
          flex-direction: row-reverse;
        }
      }
      
      @media only screen and (max-width: 640px) {
        #an-idea, #find-out-more-list {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default Home
