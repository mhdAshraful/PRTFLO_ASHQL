import React, { useRef, createRef } from 'react'
import { FaLinkedinIn, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";
import Hoverbutton from './Hoverbutton';


const social = [
  {
    name: "FaLinkedinIn",
    url: "https://www.linkedin.com/in/mdashiqdesigner/"
  },
  {
    name: "FaBehance",
    url: "https://www.behance.net/mdashiq_designer"
  },
  {
    name: "FaDribbble",
    url: "https://dribbble.com/mdashiq_designer"
  },
  {
    name: "FaInstagram",
    url: "https://www.behance.net/mdashiq_designer"
  }
]

const Footer = () => {
  // const references = useRef(social.map(item => createRef(item)));
  return (
    <div className="footer_container">
      <div className="email_me">
        {/* <Hoverbutton name="Let's Talk" /> */}
        <a>Let's Talk</a>
        {/* <img className="send_svg" src="./assets/images/send.svg" alt="send icon" /> */}
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.083 18.4133H2.91634" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.833 2.99683L4.16634 14.6635" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.833 11.5552V2.99683H7.27467" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="social_media">
        {


          social.map((item, index) => {
            const IconComponent = eval(item.name);
            return (<div
              // ref={references.current[index]}
              key={index}
              id={item.name}
              alt={item.name} className='icons'
              onClick={() => window.open(item.url, '_blank')}
            >
              <IconComponent />
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Footer