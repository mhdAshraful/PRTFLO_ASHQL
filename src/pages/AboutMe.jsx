import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react'
import useNavScrollController from '../hooks/useNavScrollController';

import AboutTitle from '../components/AboutTitle';
import Footer from '../components/Footer';
import useResize from '../hooks/useResize';
gsap.registerPlugin(ScrollTrigger);
export const AboutMe = () => {

  const details1 = useRef();
  const details2 = useRef();
  const details3 = useRef();
  const details4 = useRef();
  const details5 = useRef();
  const width = useResize()

  // const deviceWidth = useResize()
  useLayoutEffect(() => {
    const lines1 = new SplitType(details1.current);
    const lines2 = new SplitType(details2.current);
    const lines3 = new SplitType(details3.current);
    const lines4 = new SplitType(details4.current);
    const lines5 = new SplitType(details5.current);






    gsap.fromTo(lines1.lines,
      { y: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#content",
          start: "top 60%"
        },
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.1 + 0.2,
        stagger: {
          amount: 0.2,
          each: 0.1,
        },
        ease: "power4.out"
      })
    gsap.fromTo(lines2.lines,
      { y: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#content",
          start: "top 80%"
        },
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.2 + 0.2,
        stagger: {
          amount: 0.2,
          each: 0.1,
        },
        ease: "power4.out"
      })
    gsap.fromTo(lines3.lines,
      { y: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#content",
          start: "top 80%"
        },
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.3 + 0.2,
        stagger: {
          amount: 0.2,
          each: 0.1,
        },
        ease: "power4.out"
      })
    gsap.fromTo(lines4.lines,
      { y: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#content",
          start: "top 80%"
        },
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.4 + 0.2,
        stagger: {
          amount: 0.2,
          each: 0.1,
        },
        ease: "power4.out"
      })
    gsap.fromTo(lines5.lines,
      { y: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#content",
          start: "top 80%"
        },
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.5 + 0.2,
        stagger: {
          amount: 0.2,
          each: 0.1,
        },
        ease: "power4.out"
      })


  }, [width])

  return (
    <>
      <main id='top' className="main_content_container">
        <div data-section id='about_me' className="section">
          <div className="about_wrapper">
            <AboutTitle
              name="aboutTitle"
              title="Md Ashiqul Islam"
            />

            <div id='content' className="about_content">
              <h1 className="page-names">About Me</h1>
              <div className="inner">
                <div className="heading">Hello,☺️</div>
                <p ref={details1} className='details'>
                  I'm Ashiq, a Product Designer with two years of
                  professional working experience. I began my
                  career as a Graphic Designer in 2018 before
                  fully transitioning to Product Designer. oho I'm
                  also a ginger tea lover.🍵
                </p>
                <p ref={details2} className="details">
                  During my two-year tenure in the industry, I've
                  developed strong analytic and collaboration
                  skills, facilitating seamless teamwork. I've also
                  served as a product designer for various
                  projects, honing my design abilities.
                </p>

                <p ref={details3} className="details">
                  To me, every new project presents a chance to
                  challenge myself, expand my knowledge, and
                  explore my own capabilities in ways I never
                  thought possible. Each project is an opportunity to engage with different perspectives and
                  collaborate with people who bring diverse experiences and ideas to the table, broadening
                  my understanding of the world and enriching
                  my own ideas.
                </p>

                <p ref={details4} className="details">
                  I'm surprised you actually read all of that, well
                  thanks for your patience.😅🥹
                </p>
                <p ref={details5} className="details">
                  I'm available for full-time roles and freelance
                  projects worldwide. As long as you don't mind
                  watching me work from millions of screens
                  away. That might be an exaggeration, or not.
                </p>
                <p className="details">
                  Cheers! <br />
                  ❤️ & 🧠
                </p>

              </div>
            </div>

            <div className="about_content">
              <div className="page-names">Work Experience</div>
              <div className="inner">

                <div className="info">
                  <div className="topLine">
                    <h3>UIUX Designer</h3>
                    <a href="https://www.linkedin.com/company/taqwah-digital/" target="_blank" rel="noopener noreferrer">Taqwah</a>
                  </div>
                  <div className="bottomline">
                    <p>Sep 2021 - Present</p>
                    <p>Hybrid office</p>
                    <p>Full Time</p>
                  </div>
                  <div className="description">Taqwah is a software company that focuses
                    on empowering emerging businesses.</div>
                </div>
                <div className="info">
                  <div className="topLine">
                    <h3>Product Designer</h3>
                    <a href="https://www.linkedin.com/company/taqwah-digital/" target="_blank" rel="noopener noreferrer">UXChips</a>
                  </div>
                  <div className="bottomline">
                    <p>Oct 2022 - Feb 2023</p>
                    <p>Remote</p>
                    <p>Part Time</p>
                  </div>
                  <div className="description">UXchips is a startup empowering UI Designers
                    with innovation.</div>
                </div>
                <div className="info">
                  <div className="topLine">
                    <h3>Jr. Product Designer</h3>
                    <a href="https://www.linkedin.com/company/taqwah-digital/" target="_blank" rel="noopener noreferrer">Durjoy Sales</a>
                  </div>
                  <div className="bottomline">
                    <p>Sep 2021 - Dec 2022</p>
                    <p>Remote</p>
                    <p>Part Time</p>
                  </div>
                  <div className="description">An initiative to empower Retail Stores to
                    interact with Retail Distributors & Customer
                    digitally.</div>
                </div>
                <div className="info">
                  <div className="topLine">
                    <h3>UX Design Intern</h3>
                    <a href="https://www.linkedin.com/company/taqwah-digital/" target="_blank" rel="noopener noreferrer">Hadiyat</a>
                  </div>
                  <div className="bottomline">
                    <p>Jun 2021 - Oct 2021</p>
                    <p>Remote</p>
                    <p>Part Time</p>
                  </div>
                  <div className="description">Hadiyat is a Consultancy Digital Agency, focus
                    on business growth hacking strategies.</div>
                </div>
              </div>
            </div>
            <div className="about_content">
              <h1 className="page-names">Certificates</h1>
              <div className="inner">

                <div className="info">
                  <div className="topLine">
                    <h3>Conducting Usability Testing</h3>
                    <a href="https://www.interaction-design.org/members/md-ashiqul-islam/certificate/course/3053d7bf-deee-4d19-8c89-850f0c354016" target="_blank" rel="noopener noreferrer">Link</a>
                  </div>
                  <div className="bottomline">
                    <p>Provided by</p>
                    <p>Interaction Design Foundation</p>
                  </div>
                  <div className="description">Learned how to run a user test smoothly and
                    effectively, avoiding common mistakes
                    throughout.</div>
                </div>

                <div className="info">
                  <div className="topLine">
                    <h3>UI/UX Design</h3>
                    <a href="https://drive.google.com/drive/folders/1lPonGOBFzwk5e0Ama_-R-uf3fk2pYQAB" target="_blank" rel="noopener noreferrer">Link</a>
                  </div>
                  <div className="bottomline">
                    <p>Provided by</p>
                    <p>Shikhbe Shobai</p>
                  </div>
                  <div className="description">Learned how to develop a product design
                    from the sketch to the final visual design and
                    user testing</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
