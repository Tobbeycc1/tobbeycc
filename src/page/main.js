import htmlIcon from '../images/html icon.png'
import classes from '../Style/main.module.css'
import cssIcon from '../images/css icon.png'
import ExtLinkIcon from '../componets/externalLinksIcon'
import gitIcon from '../images/gitIcon.png'
import beIcon from '../images/be icon.png'
import linkedInIcon from '../images/linkedInIcon.png'
import cvIcon from '../images/cvIcon.png'
import bellIcon from '../images/bell icon.png'
import devIcon from '../images/devIcon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import PTTerms from '../componets/ptBox'
import spIcon from '../images/designerIcon.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Works from '../componets/works'
import imgSnip from '../images/soundmac img snip.png'
import webIcon from '../images/web Icon.png'
import texzsnip from '../images/TEXZ img snip.png'
import abbySnip from '../images/abby snip.png'
import oldTexzsnip from '../images/oldTexzsnip.png'
import tobbeynetlifySnip from '../images/tobbeynetlifySnip.png'
import callIcon from '../images/callIcon.png'
import twitterIcon from '../images/twitterIcon.png'
import igIcon from '../images/igLogo.png'
import mailIcon from '../images/mailIcon.png'
import feIcon from '../images/front end dev icon.png'
import { useEffect, useState } from 'react'
import gifTobbey from '../images/tobbey.gif'


// ..


AOS.init();


function Main(props) {
    const [test, setTest]= useState( <div className={classes.gifTobbeyDiv}>
        <img src={gifTobbey} alt='gifTobbey' className={classes.gifTobbey}/>
    </div>)

    setTimeout(function () {
        setTest(' ')
        console.log('I will run after 2 seconds');
    }, 6000);
    

   
    return(

    <div className={classes.mainDiv} >
    {test}
        <div className={classes.mainHeading}>
            <img src={htmlIcon} className={classes.htmlIcon} alt='html Icon'/>

            <div className={classes.headingDiv}>
            <h2 className={classes.heading} data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            UI designer <br/> & Front-end developer
            </h2>

            <div className={classes.extLinkDiv}
            data-aos="fade-up" data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">

                {/* Git */}
                <ExtLinkIcon 
                link={"https://github.com/Tobbeycc1"}
                icon = {gitIcon}
                />

                {/* Behance Net */}
                <ExtLinkIcon 
                link={"https://www.behance.net/tobbeyjayjay"}
                icon = {beIcon}
                />

                 {/* Linked In */}
                 <ExtLinkIcon 
                link={"https://www.linkedin.com/in/tobbey-chime-a721a3215/"}
                icon = {linkedInIcon}
                />

                {/* Resume */}
                <ExtLinkIcon 
                link={"https://drive.google.com/file/d/1EHzzehXUaYuaApq1Pso1tmT1AslKmyCp/view"}
                icon = {cvIcon}
                />

            </div>
            </div>
           

            <img src={cssIcon} className={classes.cssIcon} alt='Css Icon'/>
            

            <img src={bellIcon} className={classes.bellIcon} alt='bell icon'/>

            <img src={devIcon} className={classes.devIcon} alt='dev icon'/>


        </div>
        <div className={classes.iAmGladDiv}>
        <h2 className={classes.iAmGlad} data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">I am Glad you are here and its my pleasure to meet you</h2>
        <h2 className={classes.iAmGlad} data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">I am <span className={classes.purpleIam}>Tobbey C. Chime</span> </h2>

<h2 className={classes.purpleIamB} data-aos="fade-down" data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">Do you want to know more asides my name? Here You Go ↓</h2>
    
    <p className={classes.overThree} data-aos="fade-down" data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">Over Three (3) years and counting since beginning my journey as a UI designer, Web Developer and
this field at large, constantly revolving around my essential cross-browser compatibility design and image 
optimization skills. I've done remote work for organizations, consulted for startups, and collaborated with 
different talentsto create digital products for both business and consumer use.</p>

<p className={classes.overThree} data-aos="fade-down" data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">These past years, I have developed strong communication abilities and fostered a reputation as a key 
            contributor by using ability to learn and grow and interpersonal awareness skills. As a team player,
            I am collaborative with peers, searching for ways to integrate valuable insights. With these qualities, 
            I have confidence in my ability to facilitate positive change and collective effort and passionate about 
            learning and development with a desire to apply skills on a larger development team and also eager to tackle
            more complex problems and continue to find ways to maximize user efficiency.</p>
        
            <h2 className={classes.purpleIam2} data-aos="fade-down" data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">HERE IS TOBBEY IN PROFESSIONAL TERMS ↓</h2>

            {/* professional terms */}

            {/* For Designer */}
            <PTTerms 
            bgColor={'var(--purple)'}
            spIcon = {spIcon}
            title = {'UI DESIGNER'}
            tools= {'TOOLS'}
            subTitle= {'I value simple content structure, clean design patterns and thoughtful interactions.'}
            toolsText = {'Figma, Adobe XD, CorelDraw, Adobe PhotoShop, Sketch'}
            />

             {/* For Developer */}
             <PTTerms 
             
            bgColor={'var(--blue)'}
            spIcon = {feIcon}
            title = {'FRONT END DEV.'}
            tools= {'TOOLS'}
            subTitle= {'I like to code and  enjoy bringing ideas to life in the browser'}
            toolsText = {'HTML, CSS, JS, React.Js, Tailwind, Node.js Git'}
            />


            {/* My Recent Project */}
            <h2 className={classes.purpleIam3} data-aos="fade-down" data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">SWIPE THE CAROUSEL TO SEE SOME BEAUTIFUL WORKS ↓</h2>
          
            <Splide
            options={ {
                rewind: true,
                type   : 'loop',
                padding: '20%',
                gap:'20px'
              } }
            >
                {/* SoundMac snip */}
             <SplideSlide>
                <Works 
                imgSnip={imgSnip}
                worksIcon ={gitIcon} 
                worksBeIcon ={beIcon}
                worksWebIcon ={webIcon}
                worksGitLink={'https://github.com/Tobbeycc1/soundmac'}
                worksBeLink = {'https://www.behance.net/gallery/147054179/SoundMac'}
                worksWebLink = {'https://soundmac.vercel.app/'}/>
                </SplideSlide>

                {/*Tex-z Snip */}
                <SplideSlide>
                <Works 
                imgSnip={texzsnip}
                worksIcon ={gitIcon} 
                worksBeIcon ={beIcon}
                worksWebIcon ={webIcon}
                worksGitLink={'https://github.com/Tobbeycc1/Tobbey-s-Portfolio'}
                worksBeLink = {'https://www.behance.net/gallery/147028053/TEX-Z-inc'}
                worksWebLink = {'https://texzweb.vercel.app/'}/>
                </SplideSlide>

                <SplideSlide>
                <Works 
                imgSnip={abbySnip}
                worksIcon ={gitIcon} 
                worksBeIcon ={beIcon}
                worksWebIcon ={webIcon}
                worksGitLink={'https://github.com/Tobbeycc1/Abbys-place-website'}
                worksBeLink = {'https://www.behance.net/tobbeyjayjay'}
                worksWebLink = {'https://abbysplace.netlify.app/'}/>
                </SplideSlide>

                {/* OLD TEXz Snip */}
                <SplideSlide>
                <Works 
                imgSnip={oldTexzsnip}
                worksIcon ={gitIcon} 
                worksBeIcon ={beIcon}
                worksWebIcon ={webIcon}
                worksGitLink={'https://github.com/Tobbeycc1/New-texz'}
                worksBeLink = {'https://www.behance.net/tobbeyjayjay'}
                worksWebLink = {'https://tex-z.netlify.app/'}/>
                </SplideSlide>

                {/* old Portfolio project */}
                <SplideSlide>
                <Works 
                imgSnip={tobbeynetlifySnip}
                worksIcon ={gitIcon} 
                worksBeIcon ={beIcon}
                worksWebIcon ={webIcon}
                worksGitLink={'https://github.com/Tobbeycc1/Tobbey-s-Portfolio'}
                worksBeLink = {'https://www.behance.net/tobbeyjayjay'}
                worksWebLink = {'https://tobbey.netlify.app/'}/>
                </SplideSlide>
             
            </Splide>
            
            <h2 className={classes.purpleIam4} data-aos="fade-down" data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">Interested in collaborating with me?</h2>
            <h2 className={classes.sayHello}>Say Hello</h2>

              <div >
              <a href="tel: 09058387301" className={classes.callIconLink} target="_blank" rel="noreferrer"><img src={callIcon} alt= 'callIcon' className={classes.callIcon} /></a>
              <a href="https://twitter.com/tobbey_cc" className={classes.callIconLink} target="_blank" rel="noreferrer"><img src={twitterIcon} alt= 'twitterIcon' className={classes.callIcon} /></a>
              <a href="https://www.instagram.com/tobbey_cc/" className={classes.callIconLink} target="_blank" rel="noreferrer"><img src={igIcon} alt= 'igIcon' className={classes.callIcon} /></a>
              <a href="mailto: jayjaytobbey@gmail.com" className={classes.callIconLink} target="_blank" rel="noreferrer"><img src={mailIcon} alt= 'mailIcon' className={classes.callIcon} /></a>

                
 

              </div>
        </div >
        
        
    </div>
        
    )
}
export default Main