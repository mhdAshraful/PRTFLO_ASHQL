import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ScrollIcon from './ScrollIcon';
import useResize from '../hooks/useResize';
gsap.registerPlugin(ScrollTrigger);

const Titletext = ({ name, title }) => {
  const ttl = useRef();
  const ovr = useRef();
  const width = useResize();

  useLayoutEffect(() => {
    const newTitle = new SplitType(ttl.current);
    const newOver = new SplitType(ovr.current);
    // const newTitle = new SplitType("#" + name);


    gsap.fromTo(newTitle.chars,
      {
        x: "-120vw",
        scale: 2.2
      },
      {
        scrollTrigger: {
          trigger: "#hero",
          start: "top center"
        },
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.inOut",
        stagger: {
          amount: 0.8
        }
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



  }, [width])


  return (
    <>
      <div id="hero" className="sections section-hero">
        <p ref={ovr} className="oevrline">md ashiqul islam</p>
        <h1 ref={ttl} className="hero_heading" id={name}>{title}</h1>
        <ScrollIcon />
      </div>
    </>
  )
}

export default Titletext
