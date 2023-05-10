import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import useResize from '../hooks/useResize';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { gsap } from 'gsap';
import useHorizontalLoop from '../hooks/useSlider';
import horizontalLoop from '../hooks/useSlider';
import { motion, useMotionValue } from 'framer-motion';
import { IconContext } from 'react-icons';


const Cards = ({ subject }) => {

  let totalCase = subject.length;

  let deviceWidth = useResize();

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerScrollWidth, setContainerScrollWidth] = useState(0);
  const [containerConstraints, setContainerConstraints] = useState(0);
  const [position, SetPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  let x = useMotionValue(0);
  const containerRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    x.set(position);
    const unsubX = x.on('change', (latest) => SetPosition(latest))
    return () => unsubX;
  }, [x, position]);

  useEffect(() => {
    let containerRefCurrent = containerRef.current;
    let cardRefCurrent = cardRef.current;
    if (!containerRefCurrent || !cardRefCurrent) return;

    const updateContainerValsues = () => {
      if (containerRefCurrent) {
        let _containerWidth = containerRefCurrent.clientWidth;
        let _containerScrollWidth = containerRefCurrent.scrollWidth;
        let _currentCardWidth = cardRefCurrent.offsetWidth;

        setContainerWidth(_containerWidth);
        setContainerScrollWidth(_containerScrollWidth);
        setCardWidth(_currentCardWidth);
        setContainerConstraints(_containerScrollWidth - _containerWidth);

      }
    }
    updateContainerValsues();
  }, [deviceWidth]);


  const paginate = (direction) => {
    if (direction === "Forward" && containerRef.current) {
      x.set(position - containerWidth);
    } else if (direction === "Backward" && containerRef.current) {
      x.set(position + containerWidth);
    }
  }



  return (
    <>
      <motion.div
        ref={containerRef}
        // drag="x"
        initial={{ x: 0 }}
        style={{ x }}
        // dragConstraints={{
        //   left: -containerConstraints,
        //   right: 0
        // }}
        // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className='card_container'>

        {
          subject.map((item, index) => {
            return (
              <motion.div className='card'
                // id={item.id}
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                  restDelta: 0.01
                }}
                data-slider
              >
                <div className="card_inner">
                  {item.note ? <span className='note'>{item.note}</span> : null}
                  <div className="case_img">
                    <div className="imgwrap">
                      <img src={`./assets/${item.gallery.pictures.main} `} alt={item.name} />
                    </div>
                  </div>
                  <div className="numbers">
                    <p>0{index + 1}/0{totalCase}</p>
                  </div>
                  <div className="title">
                    {item.title}
                  </div>
                  <div className='disBTN' disabled >View Project</div>
                </div>
              </motion.div>
            )
          })
        }

      </motion.div>

      <div className="arrows">
        <IconContext.Provider
          value={{
            color: `${position >= 0 ? "gray" : "black"}`,
            className: "global-class-name"
          }} >
          <HiOutlineArrowLeft
            style={{
              pointerEvents: `${position >= 0 ? "none" : "auto"}`,
              cursor: `${position >= 0 ? "none" : "pointer"}`
            }}
            className='button prev'
            onClick={() => paginate("Backward")} />
        </IconContext.Provider>



        <IconContext.Provider
          value={{
            color: `${position <= -containerScrollWidth + containerWidth ? "gray" : "black"}`,
            className: "global-class-name"
          }}>
          <HiOutlineArrowRight
            style={{
              pointerEvents: `${position <= -containerScrollWidth + containerWidth ? "none" : "auto"}`,
              cursor: `${position <= -containerScrollWidth + containerWidth ? "none" : "pointer"}`,
            }}

            className='button next'
            onClick={() => paginate("Forward")} />
        </IconContext.Provider>
      </div>
    </>
  )
}

export default Cards