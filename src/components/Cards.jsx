import { motion, useMotionValue } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import useResize from '../hooks/useResize';
import { useNavigate } from 'react-router-dom';


const Cards = ({ subject }) => {
  let totalCardItems = subject.length
  const navigate = useNavigate();

  const [containerWidth, setContainerWidth] = useState(0)
  const [containerScrollWidth, setContainerScrollWidth] = useState(0)
  // const [containerContraints, setContainerConstraints] = useState(0)
  const [position, setPosiiton] = useState(0)


  let x = useMotionValue(0);
  const containerRef = useRef()
  const cardRef = useRef()

  useEffect(() => {
    x.set(position);
    // may need to change
    const unsubX = x.on("change", (latest) => setPosiiton(latest))
    return () => unsubX
  }, [x, position])

  let deviceWidth = useResize()
  useEffect(() => {
    let sliderContainerRef = containerRef.current
    let cardCurrentRef = cardRef.current
    if (!sliderContainerRef || !cardCurrentRef) return;

    const updateSliderContainerValues = () => {
      if (sliderContainerRef) {
        let _containerWidth = sliderContainerRef.clientWidth;
        let _containerScrollWidth = sliderContainerRef.scrollWidth;
        setContainerWidth(_containerWidth);
        setContainerScrollWidth(_containerScrollWidth);
        // setContainerConstraints(_containerScrollWidth - _containerWidth);
      }
    }
    updateSliderContainerValues();

  }, [deviceWidth]);

  function paginate(direction) {
    if (direction === "Forward" && containerRef.current) {
      x.set(position - containerWidth);
      // console.log("position", position);
    } else if (direction === "Backward") {
      x.set(position + containerWidth);
      // console.log("position", position);
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
        //   left: -containerContraints - 8,
        //   right: 0
        // }}
        // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className="cardContainer">
        {
          subject.map((item, index) =>

            <motion.div
              ref={cardRef}
              className='card'
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
                restDelta: 0.01
              }}
            // exit="exit"
            >

              <motion.div className="card_inner">
                <div className="card_img">
                  <div className="imgwrap">
                    <motion.img
                      src={`./assets/${item.gallery.pictures.main}`} alt={item.name} />
                  </div>
                </div>
                <div className="numbers">
                  <p>0{index + 1}/0{totalCardItems}</p>
                </div>
                <div className="title">
                  {item.title}
                </div>
                <div className='detailsBTN' onClick={() => navigate(`/details/${item.id}`)}> View Project</div>
              </motion.div>
            </motion.div>
          )
        }

      </motion.div >

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