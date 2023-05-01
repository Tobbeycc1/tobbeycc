import htmlIcon from "../images/html icon.png";
import classes from "../Style/main.module.css";
import cssIcon from "../images/css icon.png";
import ExtLinkIcon from "../componets/externalLinksIcon";
import gitIcon from "../images/gitIcon.png";
import beIcon from "../images/be icon.png";
import linkedInIcon from "../images/linkedInIcon.png";
import cvIcon from "../images/cvIcon.png";
import bellIcon from "../images/bell icon.png";
import devIcon from "../images/devIcon.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import PTTerms from "../componets/ptBox";
import spIcon from "../images/designerIcon.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Works from "../componets/works";
import imgSnip from "../images/soundmac img snip.png";
import webIcon from "../images/web Icon.png";
import texzsnip from "../images/TEXZ img snip.png";
import abbySnip from "../images/abby snip.png";
import oldTexzsnip from "../images/oldTexzsnip.png";
import tobbeynetlifySnip from "../images/tobbeynetlifySnip.png";
import callIcon from "../images/callIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import igIcon from "../images/igLogo.png";
import mailIcon from "../images/mailIcon.png";
import feIcon from "../images/front end dev icon.png";
import { useState } from "react";
import gifTobbey from "../images/tobbey.gif";
import movieSnip from "../images/tobbey movie app snip.png";
import imageAPP from "../images/IMAGE DOWNLOADER.png";
import ekoSnip from "../images/eko_snip.png";
import greetingsSnip from "../images/greetings app snip.png";
import eko from "../images/mobile (9) (1).png";
import soundmacAdmin from "../images/mobile (8) (1).png";
import soundmac from "../images/mobile (7) (1).png";

// ..

AOS.init();

function Main() {
  const [test, setTest] = useState(
    <div className={classes.gifTobbeyDiv}>
      <img src={gifTobbey} alt="gifTobbey" className={classes.gifTobbey} />
    </div>
  );

  setTimeout(function () {
    setTest(" ");
    // console.log("I will run after 2 seconds");
  }, 6000);

  return (
    <div className={classes.mainDiv}>
      {test}
      <div className={classes.mainHeading}>
        <img src={htmlIcon} className={classes.htmlIcon} alt="html Icon" />

        <div className={classes.headingDiv}>
          <h2
            className={classes.heading}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            UI designer <br /> & Front-end developer
          </h2>

          <div
            className={classes.extLinkDiv}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {/* Git */}
            <ExtLinkIcon link={"https://github.com/Tobbeycc1"} icon={gitIcon} />

            {/* Behance Net */}
            <ExtLinkIcon
              link={"https://www.behance.net/tobbeyjayjay"}
              icon={beIcon}
            />

            {/* Linked In */}
            <ExtLinkIcon
              link={"https://www.linkedin.com/in/tobbey-chime-a721a3215/"}
              icon={linkedInIcon}
            />

            {/* Resume */}
            <ExtLinkIcon
              link={
                "https://drive.google.com/file/d/1QVJsrg75YXAmSkhdK2nDxrM2TjdRzdiH/view?usp=share_link"
              }
              icon={cvIcon}
            />
          </div>
        </div>

        <img src={cssIcon} className={classes.cssIcon} alt="Css Icon" />

        <img src={bellIcon} className={classes.bellIcon} alt="bell icon" />

        <img src={devIcon} className={classes.devIcon} alt="dev icon" />
      </div>
      <div className={classes.iAmGladDiv}>
        <h2
          className={classes.iAmGlad}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          I am <span className={classes.purpleIam}>Tobbey Celestine Chime</span>{" "}
        </h2>

        {/* My Recent Project */}
        <h2
          className={classes.purpleIam3}
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          SWIPE THE CAROUSEL TO SEE SOME BEAUTIFUL WORKS ↓
        </h2>

        <Splide
          options={{
            rewind: true,
            type: "loop",
            padding: "20%",
            gap: "20px",
            pagination: false,
          }}
        >
          {/* audio converter */}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(12).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/convert-audio"}
              heading={"SUPER AUDIO CONVERTER"}
              // techStack={
              //   "Full-stack: HTML, CSS, JS, React, AxiosInstance, Context Api, Loading Skeleton, MngoDB, Heroku, Fluterwave, Node.Js, Express.js"
              // }
              description={
                "Converts your audio files to other formats in 3 seconds"
              }
            />
          </SplideSlide>

          {/* Landing page generator snip */}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(10).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={
                "https://firebasestorage.googleapis.com/v0/b/soundmac-0.appspot.com/o/chris%20brown.soundmac.html?alt=media&token=b2109244-4e00-4d9c-8f17-6bff9394d041"
              }
              heading={"LANDING PAGE GENERATOR"}
              // techStack={
              //   "Full-stack: HTML, CSS, JS, React, AxiosInstance, Context Api, Loading Skeleton, MngoDB, Heroku, Fluterwave, Node.Js, Express.js"
              // }
              description={
                "Creates a landing page that holds all your music links"
              }
            />
          </SplideSlide>

          {/* sales analytics */}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(13).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/dashboard/sales-analytics"}
              heading={"MUSIC STREAM ANALYTICS"}
              description={
                "Analyses all your music based on popularity & countries with Spotify's API"
              }
            />
          </SplideSlide>

          {/* Audio player */}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(17).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"#"}
              heading={"MULTI FUNCTIONAL AUDIO PLAYER"}
              description={
                "Listen to songs, approves and constructs smart mails"
              }
            />
          </SplideSlide>

          {/* auth*/}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(14).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/"}
              heading={"MODERN AUTH-SYSTEM"}
              description={"Login & register system with email verifier"}
            />
          </SplideSlide>

          {/* Upload songs and album */}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(15).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/upload/single"}
              heading={"UPLOAD ALBUM & SINGLES"}
              description={
                "Converts, Upload music files & its details to soundmac's database"
              }
            />
          </SplideSlide>

          {/* Handle accounts*/}
          <SplideSlide>
            <Works
              imgSnip={"https://sconchun.sirv.com/mobile%20(16).png"}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/dashboard"}
              heading={"ACCOUNT DESIGNATOR"}
              description={
                "Uses a payment gateway (PAY-STACK) to designate account type"
              }
            />
          </SplideSlide>

          {/* eko hotels */}
          <SplideSlide>
            <Works
              imgSnip={eko}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={""}
              worksWebLink={""}
              heading={"Eko Hotels (private)"}
              description={"QR Ticket code scanner & event's verifier"}
            />
          </SplideSlide>

          {/* Tobbey's MovieApp*/}
          <SplideSlide>
            <Works
              imgSnip={movieSnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/tobbeymovieapp"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://tobbeymovieapp-fl9l.vercel.app/"}
              heading={"TOBBEY MOVIE APP"}
              description={"Consumes OMDb API."}
            />
          </SplideSlide>

          {/*Image Downloader */}
          <SplideSlide>
            <Works
              imgSnip={imageAPP}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/image-story-app"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://image-story-app.vercel.app/"}
              heading={"IMAGE LOOKUP APP"}
              description={"Search images using Unsplash API"}
            />
          </SplideSlide>

          {/*Greetings App */}
          <SplideSlide>
            <Works
              imgSnip={greetingsSnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/sample"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://sample-tobbeycc1.vercel.app/"}
              heading={"GREETINGS APP"}
              description={"The selcted names of people to be greeted"}
            />
          </SplideSlide>

          {/*Tex-z Snip */}
          <SplideSlide>
            <Works
              imgSnip={texzsnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/Tobbey-s-Portfolio"}
              worksBeLink={
                "https://www.behance.net/gallery/147028053/TEX-Z-inc"
              }
              worksWebLink={"https://texzweb.vercel.app/"}
              heading={"JUST UI"}
              description={"A landing page with beautiful UI"}
            />
          </SplideSlide>

          {/* old Portfolio project */}
          <SplideSlide>
            <Works
              imgSnip={tobbeynetlifySnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/Tobbey-s-Portfolio"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://tobbey.netlify.app/"}
              heading={"Portfolio Website"}
              description={
                "A very captivating Single Page Application Portfolio website built with vanillas javascript"
              }
            />
          </SplideSlide>
        </Splide>

        <h2
          className={classes.purpleIam4}
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Interested in collaborating with me?
        </h2>
        <h2 className={classes.sayHello}>Say Hello</h2>

        <div>
          <a
            href="tel: 09058387301"
            className={classes.callIconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={callIcon} alt="callIcon" className={classes.callIcon} />
          </a>
          <a
            href="https://twitter.com/tobbey_cc"
            className={classes.callIconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterIcon}
              alt="twitterIcon"
              className={classes.callIcon}
            />
          </a>
          <a
            href="https://www.instagram.com/tobbey_cc/"
            className={classes.callIconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={igIcon} alt="igIcon" className={classes.callIcon} />
          </a>
          <a
            href="mailto: chimetobbey@gmail.com"
            className={classes.callIconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={mailIcon} alt="mailIcon" className={classes.callIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Main;
