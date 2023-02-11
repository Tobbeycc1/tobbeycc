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
                "https://docs.google.com/document/d/1ccoTq7nKmXb4FiapZqHssdyrbTNHdn0r/edit?usp=sharing&ouid=102225848585073195592&rtpof=true&sd=true"
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
          I am Glad you are here and its my pleasure to meet you
        </h2>
        <h2
          className={classes.iAmGlad}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          I am <span className={classes.purpleIam}>Tobbey C. Chime</span>{" "}
        </h2>

        <h2
          className={classes.purpleIamB}
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Do you want to know more asides my name? Here You Go ↓
        </h2>

        <p
          className={classes.overThree}
          data-aos="fade-down"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          My career as a user interface (UI) designer, web developer, and in
          this sector generally has centered around my critical cross-browser
          compatibility design and image optimization talents for  years .  I've
          worked remotely for organizations, provided startup consulting, and
          worked with various talent to develop digital solutions for both
          commercial and consumer use.
        </p>

        <p
          className={classes.overThree}
          data-aos="fade-down"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Through the use of my capacity to learn and develop, as well as my
          interpersonal awareness skills, over the past few years, I have
          strengthened my communication skills and built a reputation as a
          significant contributor. As a team player, I work cooperatively with
          colleagues to find methods to incorporate useful insights. With these
          traits, I am passionate about learning and growth, have faith in my
          abilities to promote positive change and group effort, want to utilize
          my skills on a larger development team, and am motivated to take on
          more challenging issues in order to continue maximizing user
          efficiency.
        </p>

        <h2
          className={classes.purpleIam2}
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          HERE IS TOBBEY IN PROFESSIONAL TERMS ↓
        </h2>

        {/* professional terms */}

        {/* For Designer */}
        <PTTerms
          bgColor={"var(--purple)"}
          spIcon={spIcon}
          title={"UI DESIGNER"}
          tools={"TOOLS"}
          subTitle={
            "I value simple content structure, clean design patterns and thoughtful interactions."
          }
          toolsText={"Figma, Adobe XD, CorelDraw, Adobe PhotoShop, Sketch"}
        />

        {/* For Developer */}
        <PTTerms
          bgColor={"var(--blue)"}
          spIcon={feIcon}
          title={"FRONT END DEV."}
          tools={"TOOLS"}
          subTitle={
            "I like to code and  enjoy bringing ideas to life in the browser"
          }
          toolsText={"HTML, CSS, JS, React.Js, Tailwind, Node.js Git"}
        />

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
          {/* eko hotel snip */}
          <SplideSlide>
            <Works
              imgSnip={ekoSnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              availability={
                "Git and Web Links are only available on request due to privacy "
              }
              worksWebIcon={webIcon}
              worksGitLink={""}
              worksWebLink={""}
              heading={"Eko Hotels"}
              techStack={
                "Full-stack: HTML, CSS, JS, React, Axios, Context Api, Loading Skeleton, MngoDB, render, nodemailer Node.Js"
              }
              description={
                "Eko hotel ticket system is an admin dashboard web app that generates tickets for customers, the app also has a section to scan valid tickets on the day of the show, all other amazing features were done on the app"
              }
            />
          </SplideSlide>

          {/* SoundMac snip */}
          <SplideSlide>
            <Works
              imgSnip={imgSnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/SOUNDMACMUSIC-ORG"}
              worksBeLink={"https://www.behance.net/gallery/147054179/SoundMac"}
              worksWebLink={"https://www.soundmac.co/"}
              heading={"SOUNDMAC"}
              techStack={
                "Full-stack: HTML, CSS, JS, React, Axios, Context Api, Loading Skeleton, MngoDB, Heroku, Fluterwave, Node.Js, Express.js"
              }
              description={
                "SoundMac is an online application for music marketing that aids artists in promoting their work and content, tracks their development, and reports daily stream."
              }
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
              techStack={"Tech Stack: HTML, CSS, JS, React, Axios, Api"}
              description={
                "A straightforward ReactJS movies app based on the OMDb API."
              }
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
              techStack={"Tech Stack: HTML, CSS, JS, Axios, React, Api"}
              description={
                "A search engine for photographs and related images that you want"
              }
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
              techStack={"Tech Stack: React-TypeScript, HTML, CSS, JS"}
              description={
                "A simple React/Typescript that displays the selcted names of people to be greeted "
              }
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
              heading={"TEX-Z Inc"}
              techStack={"Tech Stack: HTML, CSS, JS, React"}
              description={
                "A logistics app aimed at striking a balance between retailers of large sized goods and its respective customers in terms of the supposed goods movements."
              }
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
              techStack={"Tech Stack: HTML, CSS, DOM, Vanilla JS,"}
              description={
                "A very captivating Single Page Application (React-like) Portfolio wbsite built with vanillas javascript"
              }
            />
          </SplideSlide>

          {/* Abby's place */}
          <SplideSlide>
            <Works
              imgSnip={abbySnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/Abbys-place-website"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://abbysplace.netlify.app/"}
              heading={"ABBY'S PLACE"}
              techStack={"Tech Stack: HTML, CSS, JS"}
              description={"A simple website."}
            />
          </SplideSlide>

          {/* OLD TEXz Snip */}
          <SplideSlide>
            <Works
              imgSnip={oldTexzsnip}
              worksIcon={gitIcon}
              worksBeIcon={beIcon}
              worksWebIcon={webIcon}
              worksGitLink={"https://github.com/Tobbeycc1/New-texz"}
              worksBeLink={"https://www.behance.net/tobbeyjayjay"}
              worksWebLink={"https://tex-z.netlify.app/"}
              heading={"OLD TEX-Z INC"}
              techStack={"Tech Stack: HTML, CSS, JS"}
              description={"A Simple website."}
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
