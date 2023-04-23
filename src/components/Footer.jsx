import React, { useRef, createRef } from 'react'
import { FaLinkedinIn, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";

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
    const references = useRef(social.map(item => createRef(item)));
    return (
        <footer>
            <div className="footer_container">
                <div className="email_me">
                    <h3>Let's Talk</h3>
                    <img className="send_svg" src="./assets/images/send.svg" alt="send icon" />
                </div>
                <div className="social_media">
                    {


                        social.map((item, index) => {
                            const IconComponent = eval(item.name);
                            return (<div
                                ref={references.current[index]}
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
        </footer>
    )
}

export default Footer