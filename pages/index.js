import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
  return (<div>
    <Head>
      <title>Bellcurve | Get your small business where you want it to be.</title>
      <link rel="icon" href="/favicon.ico" />
      {/*Global site tag (gtag.js) - Google Ads: 971348549*/}
      {/*<script async src="https://www.googletagmanager.com/gtag/js?id=AW-971348549"></script>*/}
      {/*<script>*/}
      {/*  window.dataLayer = window.dataLayer || [];*/}
      {/*  function gtag(){dataLayer.push(arguments);}*/}
      {/*  gtag('js', new Date());*/}

      {/*  gtag('config', 'AW-971348549');*/}
      {/*</script>*/}

      {/*/!*Event snippet for Website lead conversion page*!/*/}
      {/*<script>*/}
      {/*  gtag('event', 'conversion', {{'send_to': 'AW-971348549/5MGrCNS4lboBEMW0ls8D'}});*/}
      {/*</script>*/}
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

    {/*<section id={}>*/}
    {/*  <div>Get in touch for a free quote - I don't bite!</div>*/}
    {/*  <div>So, what do you do? ...</div>*/}
    {/*  <textarea />*/}
    {/*  <button>Send an enquiry</button> or keep scrolling to see what my clients have to say...*/}
    {/*</section>*/}

    {/*<section id={`testimonials`}>*/}
    {/*  <div className={`testimonial`}>*/}
    {/*    <p>"Patrick went above and beyond with our picture frame business. The site is beautiful and functional, and with Bellcurve's assistance we've tripled our marketing reach on the same budget."</p>*/}
    {/*    <p>- Kim Lay, Bentleigh Art 'n' Frame</p> /!* TODO: her last name might actually be Heng, better check *!/*/}
    {/*    <p>See the case study &raquo;</p>*/}
    {/*  </div>*/}

    {/*  <div className={`testimonial`}>*/}
    {/*    <p>*/}
    {/*      "We came to Bellcurve with a very specific problem that no one we had talked to had been able to solve,*/}
    {/*      and Patrick listened carefully before coming up with the perfect solution.*/}
    {/*      I’d recommend his services to any small business looking for creative solutions*/}
    {/*      to their technical and business problems."*/}
    {/*    </p>*/}
    {/*    <p>- Andrew Rogers, Noise Consulting</p>*/}
    {/*    <p>See the case study &raquo;</p>*/}
    {/*  </div>*/}

    {/*  <div className={`testimonial`}>*/}
    {/*    <p>"I used to have a very plain homepage set up for my art business, as well as a small Instagram account.*/}
    {/*      Patrick showed me what a professional site could look like,*/}
    {/*      set me up with a beautiful custom design that perfectly fit what I was trying to express,*/}
    {/*      and now I have more students lining up for my art lessons than I can handle!"*/}
    {/*    </p>*/}
    {/*    <p>- Gayle Stone, artist</p>*/}
    {/*    <p>See the case study &raquo;</p>*/}
    {/*  </div>*/}
    {/*</section>*/}

    <section id={`case-studies`}>
      <h2>Case Studies</h2>
      <div id={`case-studies-row`}>
        <div className={`case-study`}>
          <a href={`https://swangosling.com`} target={`_BLANK`} rel={`noopener`}>
            <img src={`img/case-swan-gosling.jpg`} />
            <div>Swan & Gosling</div>
          </a>
          <div className={`description`}>Live music bar on the Mornington Peninsula.</div>
        </div>
        <div className={`case-study`}>
          <a href={`https://willstoneauthor.com`} target={`_BLANK`} rel={`noopener`}>
            <img src={`img/case-will-stone.jpg`} />
            <div>Will Stone</div>
          </a>
          <div className={`description`}>Melbourne-based fantasy author.</div>
        </div>
        <div className={`case-study`}>
          <a href={`https://microalgal.com.au`} target={`_BLANK`} rel={`noopener`}>
            <img src={`img/case-microalgal.jpg`} />
            <div>Microalgal Services</div>
          </a>
          <div className={`description`}>Environmental consultant in South-East Melbourne.</div>
        </div>
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
        <div className={`inner-title`}>It all starts with a quick message.</div>
        <div className={`inner-contact`}>
          If you're looking for:
          <ul>
            <li>A clean, professional online presence that puts your brand's best foot forward</li>
            <li>Hi-tech solutions without the technical jargon</li>
            <li>A Melbourne-based Aussie you can meet with in person when needed</li>
            <li>Or just to have a chat about what's possible...</li>
          </ul>
          <p>... then let's get in touch!</p>
          <form name={`contact`} method={`POST`} data-netlify="true" onSubmit={`handle-submit`}>
            <p id={`email-input-container`}><span id={`email-text`}>Your email:</span> <input type="text" name="email" placeholder={`you@example.com`} /></p>
            <textarea rows={5} name="message" placeholder={`Tell me a little bit about your business.
Make sure to include links to your current site and social media pages if you have them.`} />
            <button type={`submit`} className={`btn fifth`}>Let's go!</button>
            <p id={`follow-up`}>I'll follow up within a couple of business days with some more specific questions and we'll go from there.</p>
          </form>
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
        background: url("img/city-blur.jpg"); /* TODO: optimise size */
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
        font-size: 4em;
        width: 60%;
        min-width: 924px;
        line-height: 1.5em;
      }
      
      .blue-container {
        background: linear-gradient(45deg, #59C3D4, #245695);
        width: 100vw;
        overflow: auto;
        color: #fff;
        font-size: 16px;
        padding: 50px 0;
      }
      
      .blue-container > div {
        width: 60%;
        min-width: 924px;
        margin: 0 auto;
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
        border-radius: 40px;
        clear: left;
      }
      
      .overhang-right {
        float: right;
        border-radius: 40px;
        clear: right;
      }
      
      .icon-overhang {
        height: 120px;
        margin: 40px;
      }
      
      #find-out-more {
        background: linear-gradient(45deg, #59C3D4, #245695);
        color: #fff;
        padding: 80px 0;
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
        padding: 0;
        width: 60%;
        min-width: 924px;
        margin: 0 auto;
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
        width: 300px;
      }
      
      #find-out-more-list li:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) inset;
      }
      
      .icon-med {
        height: 100px;
      }
      
      #case-studies h2 {
        text-align: center;
        margin: 80px 0;
      }
      
      #case-studies-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 40px;
      }
      
      .case-study {
        text-align: center;
      }
      
      .case-study img {
        height: 250px;
        clear: both;
        transition: 1s transform;
      }
      
      .case-study img:hover {
        // transform: scale(2);
        // z-index: 50;
        // position: relative;
      }
        
      .case-study div {
        color: #000;
      }
      
      .case-study div:hover, .case-study div:focus {
        color: #444;
      }
      
      #an-idea {
        background: url("img/desk.jpg");
        background-position: center;
        background-size: cover;
        width: 90vw;
        height: 400px;
        display: flex;
        text-align: center;
        // justify-content: center;
        justify-content: space-evenly;
        align-items: center;
        padding: 300px 5vw;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) inset;
      }
      
      #an-idea > .inner-title {
        font-family: "Mukta", sans-serif;
        color: #fff;
        font-size: 4em;
        line-height: 80px;
        padding: 0 80px;
      }
      
      #an-idea > .inner-contact {
        background: #fff;
        padding: 40px;
        text-align: left;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
      }
      
      #follow-up {
        text-align: justify;
      }
      
      .inner-contact input {
        width: 300px;
        padding: 10px 20px;
        margin-left: 10px;
        font-size: 14px;
        border: 1px solid #aaa;
      }
      
      .inner-contact textarea {
        width: calc(100% - 28px);
        font-size: 14px;
        padding: 14px;
        resize: none;
        border: 1px solid #aaa;
      }
      
      .inner-contact input:focus, .inner-contact textarea:focus {
        outline: none;
        border: 1px solid #444;
      }
      
      .inner-contact button {
        background: #fff;
        font-size: 18px;
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
      
      @media only screen and (max-width: 1550px) {
        #an-idea {
          flex-direction: column;
          align-content: center;
          justify-items: center;
          align-items: center;
          justify-content: center;
        }
        
        #an-idea > .inner-title {
          font-size: 3em;
          line-height: 1.5em;
          margin: 40px 0;
        }
        
        #email-input-container {
          margin: 40px 0 20px;
        }
        
        #email-text {
        }
        
        #footer {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          left: 0;
          bottom: 0;
        }        
        
        #footer div {
          margin: 0;
          text-align: center;
          width: 100%;
          color: rgba(255, 255, 255, 0.6);
          padding: 10px 0;
        }
      }
      
      @media only screen and (max-width: 1400px) {
        #case-studies h2 {
          margin: 40px 0;
        }
        
        #case-studies-row {
          flex-direction: column;
        }
        
        .case-study {
          width: 80vw;
          margin: 40px 0;
        }
        
        .case-study img {
          width: 800px;
          min-width: 60%;
          height: auto;
          border: 4px solid #444;
        }
        
        .case-study .description {
          font-style: italic;
          color: #888;
        }
      }
      
      @media only screen and (max-width: 1024px) {
      
       #find-out-more-list {
          // flex-direction: column;
          align-content: center;
          justify-items: center;
          align-items: center;
          justify-content: center;
        }
      }
      
      @media only screen and (max-width: 1023px) {
        .blue-container {
          min-width: 100vw;
          width: 100vw;
        }
        
        .blue-container > .container-flex-left, .blue-container > .container-flex-right {
          min-width: 0;
          width: 80%;
          flex-direction: column;
        }
        
        .blue-container > .container-flex-right {
          flex-direction: column-reverse;
        }
        
        .overhang {
          background: none;
          border-radius: 0;
          width: 100%;
          padding: 0;
        }
        
        .overhang-left img, .overhang-right img {
          filter: invert(100%);
          margin: 40px auto;
        }
        
        .blue-container .text-left, .blue-container .text-right {
          width: 100%;
          text-align: justify;
          padding: 0;
        }
        
        #city-blur-container {
          height: auto;
          padding: 40px 20px;
          min-width: 0;
          width: calc(100vw - 40px);
        }
        
        #city-blur-container > div {
          font-size: 3em;
          min-width: 80vw;
        }
        
        #find-out-more {
          padding: 40px 0;
        }
      }
      
      @media only screen and (max-width: 900px) {
        #find-out-more-list {
          min-width: 100%;
          flex-direction: column;
        }
        
        #find-out-more-list li { 
          font-size: 18px;
          border-radius: 0;
          display: flex;
          align-content: center;
          justify-items: center;
          align-items: center;
          justify-content: center;
        }
        
        #find-out-more-list li > img {
          // width: 40vw;
        }
        
        #find-out-more-list li > div {
          padding-left: 40px;
          text-align: left;
        }
        
        .case-study img {
          width: 100%;
        }
        
        #an-idea {
          background: #fff;
          box-shadow: none;
          padding: 40px 0;
          overflow: auto;
          height: auto;
          width: 100vw;
        }
        
        #an-idea > .inner-title {
          font-size: 2em;
          color: #000;
          padding: 0;
        }
        
        #an-idea > .inner-contact {
          box-shadow: none;
          padding: 0 20px;
          width: calc(100% - 40px);
        }
        
        .inner-contact input {
          width: auto;
        }
        
      }
      
      @media only screen and (max-width: 375px) {
        #an-idea {
          min-width: 100%;
        }
        
        #city-blur-container {
          top: 60px;
          margin-bottom: 60px;
        }
        
        #city-blur-container > div {
          font-size: 2em;
        }
        
        #find-out-more-text {
          margin-bottom: 20px;
        }
      }
      
      
.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-weight: 400;
  line-height: 1;
  margin: 20px 0;
  padding: 1.2em 1.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.fifth {
  border-color: #2f66ae;
  border-radius: 0;
  color: #2f66ae;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
}
.fifth:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: #2f66ae;
  z-index: -1;
  transition: width 150ms ease-in-out;
}
.fifth:hover {
  color: #fff;
}
.fifth:hover:after {
  width: 110%;
}
    `}</style>
  </div>
  )}}

export default Home
