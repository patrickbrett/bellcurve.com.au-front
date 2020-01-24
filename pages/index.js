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
    this.state = { email: "", message: "", moreInfoSelection: "web" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-2", ...this.state })
    })
        .then(() => {
          this.setState({ didSubmit: true })
        })
        .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  getMoreInfo = name => {
    this.setState(prevState => ({ moreInfoSelection: name }))
  }

  render() {
    const { email, message, didSubmit, moreInfoSelection } = this.state

    let moreInfo;
    switch (moreInfoSelection) {
      case "web": {
        moreInfo = (
          <>
            <h2>Custom Websites</h2>
            <img className={`service-img`} src={`img/service-custom-websites.jpg`} />
          <p>Let's face it: as we enter the 2020s, an online presence is necessary for even small, brick-and-mortar businesses.</p>
          <p>
              A good website showcases the best of your business, allowing your customers to find out more about you,
              discover content that highlights your subject matter expertise, and even interact with your business in innovative ways.
              Done well, a website is like a 24/7 salesperson, only much cheaper!
            </p>
            <p>
              On the other hand, a poorly designed website tells your customers that you don't care - about your business, the details, and them.
            </p>
            <p>When it comes to getting online, there are three main options:</p>
            <ol>
              <li>Use a do-it-yourself editor, spend weeks trying to understand how everything works, and end up with a sub-par, cookie-cutter site that lacks uniqueness and professionalism...</li>
              <li>Shell out for a large agency likely to overcharge and treat you as a just another customer...</li>
              <li>Or work with a trusted, local professional who can not only manage everything for you at a reasonable price, but will consult with you to understand exactly what your business goals are and how to take the steps needed to achieve them.</li>
            </ol>
            <p>Of course, I naturally have a strong bias towards the last one!</p>
            <p>I have experience developing sites and web applications for a wide variety of clients:
              from a simple locate-and-contact-us site for a local consultancy, to a complex real-time data visualisation application
              for a $30 million technology company, and just about everything in between. Shoot me a message with the form below to see what I can do for you.</p>
          </>
        )
        break;
      }
      case "marketing": {
        moreInfo = (
            <>
              <h2>Digital Marketing</h2>
              <img className={`service-img`} src={`img/service-digital-marketing.jpg`} />
              <p>Many see digital marketing as nothing more than putting a few ads on Google and Facebook and hoping for the best. This couldn't be further from the truth!</p>
              <p>Digital marketing involves everything about the online journey your customers take: from the search they make, the social media post they see or the article they read, to the in-store visit, online sale or continuing customer relationship.</p>
              <p>A good marketing strategy answers the following questions:</p>
              <ul>
                <li>How do my customers currently find me? How do I want them to find me? Are there avenues I can explore that I haven't tried yet? What are the costs and benefits of these?</li>
                <li>How does my online presence, including my website, social media pages and search listings, contribute to my sales? How does this compare to brick-and-mortar methods?</li>
                <li>Do I have a well-designed sales funnel in place on my website? Is it clear what I want customers to do?</li>
                <li>How can I work with the data available to me to optimise leads and conversions?</li>
              </ul>
              <p>A great thing about these online methods is they are suitable for businesses of almost any size -
                from local family owned pizza businesses to international retail empires. While renting a billboard only becomes a feasible strategy once your company
                is past a certain size, online marketing budgets can be wildly variable - anywhere from a few dozen dollars per month up to many millions for larger companies.</p>
              <p>The unfortunate truth, however, is that often it is only larger businesses that know how to use digital marketing to their advantage, and to enjoy the benefits these platforms bring.
                This is why I also provide digital marketing services for many of my clients, including setting up and managing social media pages, social and search advertising campaigns, and more. This has a beautiful synergy with website design, as so much of online marketing comes down to the design of the pages your leads land on.</p>
              <p>Get in touch with me to discuss how digital marketing can benefit your business - or, if you already have some strategies in place, I can analyse what we can do to improve conversions, optimise your sales funnel, and even explore new strategies.</p>
            </>
        )
        break;
      }
      case "apps": {
        moreInfo = (
            <>
              <h2>Mobile Apps</h2>
              <img className={`service-img`} src={`img/service-mobile-apps.jpg`} />
            <p>I’m very much a believer of “more is less”: keeping it simple creates better conversions, clearer branding,
              and higher customer satisfaction. Of course, I also work with businesses with a wide variety of needs, and mobile apps
              are something that come up on occasion. As I have experience in this area, it is a service I offer if I believe it could be beneficial.</p>

              <p>I’ll keep it straight: most small businesses don’t need a mobile app.
              A web presence is often enough, and the web is getting better and better at handling complex tasks that used to need apps,
              such as uploading photos, and even websites that work offline.</p>

              <p>There are, however, some situations in which a mobile app for your business may make sense.
                An example would be having an in-store loyalty program that matches an online one:
                in this case there are some benefits only apps can bring, such as being able to send notifications
                directly to your customers’ phones. Many larger businesses, especially food retailers, have apps that do this.</p>

              <p>Another would be a system for employees to manage inventory,
                clock in and out, or accomplish other business-specific tasks if existing solutions don’t meet your needs.
                Of course, if there is a pre-built system out there that I believe would work for you, I will recommend that first!
              </p>

              <p>I have a wide variety of experience building both iOS and Android apps, with apps on both the App Store and Google Play.
              Get in touch for a free, no-obligation discussion of what this or my other services can do for you and your business.</p>
            </>
        )
        break;
      }
      default: {
      }
    }

  return (<div>
    <Head>
      <title>Bellcurve | High-touch digital solutions for your small business</title>
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
      <div>High-touch digital solutions for your small business.</div>
    </div>

    <div className={`blue-container`}>
      <div className={`container-flex-right`}>
        <section className={`text-left`}>
          <p>
            Bellcurve is a one-man web design, development and marketing agency
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

    <section id={`case-studies`}>
      <h2>Showcase</h2>
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
        <li onClick={() => this.getMoreInfo("web")} className={moreInfoSelection === 'web' ? 'selected' : ''}>
          <img src={`laptop.svg`} className={`icon-med`} id={`icon-laptop`} draggable={false} />
          <div>Custom Websites</div>
        </li>
        <li onClick={() => this.getMoreInfo("marketing")} className={moreInfoSelection === 'marketing' ? 'selected' : ''}>
          <img src={`marketing.svg`} className={`icon-med`} id={`icon-marketing`} draggable={false} onClick={() => this.getMoreInfo("marketing")} />
          <div>Digital Marketing</div>
        </li>
        <li onClick={() => this.getMoreInfo("apps")} className={moreInfoSelection === 'apps' ? 'selected' : ''}>
          <img src={`phone.svg`} className={`icon-med`} id={`icon-phone`} draggable={false} onClick={() => this.getMoreInfo("apps")} />
          <div>Mobile Apps</div>
        </li>
      </ul>
    </section>

    <section id={`more-info`}>
      <div id={`more-info-inner`} className={moreInfoSelection ? "" : "hidden"}>
        <div>
          {moreInfo}
        </div>
      </div>
    </section>

    <div id={`footer-container`}>
      <section id={`an-idea`}>
        <div className={`inner-title`}>It all starts with a quick message.</div>
        <div className={`inner-contact ${didSubmit ? `did-submit` : ``}`}>
          If you're looking for:
          <ul>
          <li>A clean, professional online presence that puts your brand's best foot forward</li>
          <li>Hi-tech solutions without the technical jargon</li>
          <li>A Melbourne-based Aussie you can meet with in person when needed</li>
          <li>Or just to have a chat about what's possible...</li>
          </ul>
          <p>... then let's get in touch!</p>
          <div id={`before-submit`}>
            <form name={`contact-2`} method={`POST`} data-netlify="true" onSubmit={this.handleSubmit}>
              <p id={`email-input-container`}><span id={`email-text`}>Your email:</span> <input value={email} onChange={this.handleChange} type="text" name="email" placeholder={`you@example.com`} /></p>
              <textarea rows={5} onChange={this.handleChange} name="message" value={message} placeholder={`Tell me a little bit about your business.

Make sure to include links to your current site and social media pages if you have them.`} />
              <button type={`submit`} className={`btn fifth`}>Let's go!</button>
              <p id={`follow-up`}>I'll follow up within a couple of business days with some more specific questions and we'll go from there.</p>
            </form>
            <div id={`thank-you`}>Thank you for your message. I'll be in touch shortly.</div>
          </div>
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
      
      .service-img {
        width: 100%;
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
        padding: 20px;
        transition: background 0.3s;
        border-radius: 20px;
        width: 300px;
        margin: 0 20px;
      }
      
      #find-out-more-list li:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) inset;
      }
      
      #find-out-more-list li.selected {
        cursor: default;
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) inset;
      }
      
      #find-out-more-list li.selected:after {
        content: "";
        position: absolute;
        color: #000;
        bottom: 0;
        background: #fff;
        width: 120px;
        height: 60px;
        transform: translateX(-60px);
        
        clip-path: polygon(
          0 100%,
          50% 0,
          100% 100%,
          0 100%
        );
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
        transition: 0.4s opacity, 0.4s transform;
        border: 4px solid #444;
      }
      
      .case-study img:hover {
        opacity: 0.6;
        transform: scale(1.1);
        z-index: 1;
        position: relative;
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
      
      #thank-you {
        visibility: hidden;
      }
      
      .did-submit #thank-you {
        visibility: visible;
        opacity: 0;
        animation: fade-in 1s forwards;
        position: absolute;
        text-align: center;
        top: 50%;
        width: 100%;
      }
      
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        
        100% {
          opacity: 1;
        }
      }
      
      .did-submit #before-submit {
        position: relative;
      }
      
      .did-submit #before-submit form {
        visibility: hidden;
      }
      
      #more-info-inner {
        width: calc(30vw + 400px);
        min-width: 400px;
        text-align: justify;
        margin: 80px auto;
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
        
        #find-out-more-list li.selected:after {
          visibility: hidden;
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
        
        #more-info-inner {
          width: 80vw;
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


// #city-blur-container {
// padding-bottom: 6vw;
// clip-path: polygon(
//     0 0,
//     100% 0,
//     100% 100%,
//     0 calc(100% - 6vw)
//   );
// }

.blue-container {
// padding-top: 10vw;
padding-bottom: 10vw;
position: relative;
// top: -6vw;
clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 6vw),
    0 100%
  );
}

#case-studies {
  position: relative;
  top: -6vw;
  padding-top: 6vw;
  padding-bottom: 6vw;
  clip-path: polygon(
    0 6vw,
    100% 0,
    100% calc(100% - 6vw),
    0 100%
  );
  
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 1);
}

#find-out-more {
  position: relative;
  top: -6vw;
  padding-top: 12vw;
  clip-path: polygon(
    0 6vw,
    100% 0,
    100% 100%,
    0 100%
  );
  margin-bottom: -6vw;
}
    `}</style>
  </div>
  )}}

export default Home
