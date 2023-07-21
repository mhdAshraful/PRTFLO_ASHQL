import React, { useEffect, useRef, useState } from 'react'
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { IconContext } from 'react-icons';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import useResize from '../hooks/useResize';
import { useNavigate } from 'react-router-dom';


const Cards = ({ subject }) => {
  const cardRef = useRef()
  let totalCardItems = subject.length
  const navigate = useNavigate();
  let width = useResize()
  const swipRef = useRef(null)

  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(null);


  const handleNext = () => {
    if (swipRef.current && swipRef.current.slideNext) {
      swipRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swipRef.current && swipRef.current.slidePrev) {
      swipRef.current.slidePrev();
    }
  };

  return (
    <div className="cardContainer">
      <Swiper
        spaceBetween={36}
        slidesPerView={width < 768 ? 1 : width < 1400 ? 2 : 3}
        onSlideChange={(swiper) => {
          console.log('slide change')
          swiper.activeIndex === 0 ? setFirst(true) : setFirst(false);
          swiper.isEnd ? setLast(true) : setLast(false);
        }}
        onSwiper={(swiper) => { swipRef.current = swiper; }}
        slideNextClass='.swiper-button-next'
        slidePrevClass='.swiper-button-prev'
        onReachEnd={() => {
          setLast(true)
          setFirst(false)
        }}
        modules={[Virtual, Navigation]}
      >
        {subject.map((item, index) =>

          <SwiperSlide className='card' key={index} virtualIndex={index} ref={cardRef} >
            <div className="card_inner">
              <div className="card_img">
                <div className="imgwrap">
                  <img
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
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <div className="arrows">
        <IconContext.Provider
          value={{
            color: `${first ? "gray" : "black"}`,
            className: "global-class-name"
          }}

        >
          <HiOutlineArrowLeft aria-hidden="false"
            style={{
              pointerEvents: `${first ? "none" : "auto"}`,
              cursor: `${first ? "none" : "pointer"}`
            }}
            className='swiper-button-prev' onClick={handlePrev} />
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: `${last ? "gray" : "black"}`,
            className: "global-class-name"
          }}

        >
          <HiOutlineArrowRight aria-hidden="false"
            style={{
              pointerEvents: `${last ? "none" : "auto"}`,
              cursor: `${last ? "none" : "pointer"}`
            }}
            className='swiper-button-next' onClick={handleNext} />
        </IconContext.Provider>
      </div>


    </div >
  )
}

export default Cards