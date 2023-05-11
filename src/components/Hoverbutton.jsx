
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import useResize from '../hooks/useResize';


function Hoverbutton({ name, activeSection, btn_id }) {
  const [isHovered, setHover] = useState(false);
  // const btnref = useRef();

  let topTextRef = useRef();
  let bottomTextRef = useRef();
  const width = useResize();

  useLayoutEffect(() => {
    // const btn2 = new SplitType("." + name, { types: 'lines, words, chars' });
    // const btn = new SplitType("#" + name, { types: 'lines, words, chars' });

    let btn2 = new SplitType(topTextRef.current);
    let btn = new SplitType(bottomTextRef.current);

    isHovered ? gsap.fromTo(btn.chars,
      { y: "0" },
      {
        y: "-100%",
        duration: 1.2,
        ease: "expo.out",
        stagger: { amount: 0.3 },
      },
    ) && gsap.fromTo(btn2.chars,
      { y: "100%" },
      {
        y: "0",
        duration: 1,
        ease: "expo.out",
        delay: -0.1,
        stagger: { amount: 0.3 },
      }
    )
      // && gsap.fromTo(btnref.current,
      //   { left: "-100%" },
      //   {
      //     left: 0,
      //     duration: 1,
      //     ease: "ease.in"
      //   }
      // )
      : gsap.fromTo(btn2.chars,
        { y: "0" },
        {
          y: "100%",
          duration: 1,
          ease: "expo.out",
          delay: -0.1,
          stagger: { amount: 0.3 },
        }
      ) && gsap.fromTo(btn.chars, { y: "-100%" },
        {
          y: "0",
          duration: 1,
          ease: "expo.out",
          stagger: { amount: 0.3 },
        }
      )

    // && gsap.to(btnref.current,
    //   {
    //     left: "100%",
    //     duration: 1,
    //     ease: "ease.out"
    //   }
    // )



  }, [isHovered])




  return (
    <div className="btns-wrapper">
      <div className={activeSection === btn_id ? "btn active" : "btn"} onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
        <div ref={topTextRef} id={name} data-btn={name} className="btn-top-text" >
          {name}
        </div>
        <div ref={bottomTextRef} id='bottom-texts' className={name}  >
          {name}
        </div>
        {/* <span ref={btnref} id='bottom-line'></span> */}
      </div>
    </div>
  )
}

export default Hoverbutton