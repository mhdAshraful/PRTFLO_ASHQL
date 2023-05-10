import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react'
import ScrollIcon from './ScrollIcon';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const AboutTitle = ({ name, title }) => {
  const ttl = useRef();
  const ovr = useRef();

  useLayoutEffect(() => {
    const newTitle = new SplitType(ttl.current);

    // const newTitle = new SplitType("#" + name);
    const newOver = new SplitType(ovr.current);


    gsap.fromTo(newTitle.words,
      {
        // x: "-120vw",
        y: "-100%",
        // scale: 2.2,
        opacity: 0
      },
      {
        // scrollTrigger: {
        //   trigger: "#hero",
        //   start: "top center"
        // },
        // x: 0,
        y: 0,
        // scale: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
        // stagger: {
        //   amount: 0.8
        // }
      });


    gsap.fromTo(newOver.words,
      {
        y: "120%",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#hero",
          start: "top center"
        },
        y: 0,
        opacity: 1,
        stagger: 0.14,
        ease: "back.inOut",
        duration: 1.5,
      }

    )



  }, [])


  return (
    <>
      <div id="hero" className="sections section-hero">
        <h1 ref={ttl} className="hero_heading" id={name}>{title}</h1>
        <Link to="/assets/Md-Ashiqul-Islam.pdf" target="_blank" download ref={ovr} className="underlay">Download Resume</Link>
        <ScrollIcon />
      </div>
    </>
  )
}

export default AboutTitle
