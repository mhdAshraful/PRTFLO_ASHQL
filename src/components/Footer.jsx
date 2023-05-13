import React from 'react'
import { FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";



const social = [
  {
    name: "GrLinkedinOption",
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
    url: "https://www.instagram.com/mdashiq_designer/"
  }
]


export const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a className='email' href={`mailto:${email}${params}`}>{children}</a>;
};





const Footer = () => {







  return (
    <div className="footer_container">
      <div className="email_me">

        <Mailto email="mdashiquli4@gmail.com" subject='New Design Project!!' body='Hi, Ashiq, I would like to discuss about my next Interesting Project. Please contact me with the details below, and here is an overview of the project:'>
          Let's Talk
        </Mailto>

        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.083 18.4133H2.91634" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.833 2.99683L4.16634 14.6635" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.833 11.5552V2.99683H7.27467" stroke="#292D32" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="social_media">
        <div
          id="GrLinkedinOption"
          alt="GrLinkedinOption"
          className='icons'
          onClick={() => window.open("https://www.linkedin.com/in/mdashiqdesigner/", '_blank')}
        >
          <GrLinkedinOption />
        </div>
        <div
          id="FaBehance"
          alt="FaBehance"
          className='icons'
          onClick={() => window.open("https://www.behance.net/mdashiq_designer", '_blank')}
        >
          <FaBehance />
        </div>
        <div
          id="FaDribbble"
          alt="FaDribbble"
          className='icons'
          onClick={() => window.open("https://dribbble.com/mdashiq_designer", '_blank')}
        >
          <FaDribbble />
        </div>
        <div
          id="FaInstagram"
          alt="FaInstagram"
          className='icons'
          onClick={() => window.open("https://www.instagram.com/mdashiq_designer/", '_blank')}
        >
          <FaInstagram />
        </div>

      </div>
    </div>
  )
}

export default Footer