import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom';
import CaseStudy from './CaseStudy';
import RecentWorks from './RecentWorks';

import gsap from 'gsap';



const NavBar = ({ width }) => {

    let [show, setShow] = useState(false);
    let navBtnref = useRef()
    useEffect(() => {
        const outside = (e) => {
            if (!navBtnref.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.body.addEventListener('click', outside)
        return () => document.body.removeEventListener('click', outside)
    }, [navBtnref])
    console.log("setShow is:", show);


    return (
        width <= 1199 ?
            <>
                <div className="nav_container">
                    <div className="logo">iQ</div>
                    <div ref={navBtnref} onClick={() => setShow(show => !show)} className="hamburger">
                        <span></span>
                    </div>
                </div>

                {show ?
                    <div className='mobileNavView '>
                        <div className="mobiletop">
                            <div className="log">LOGO</div>
                            <div onClick={() => setShow(false)} className="cross">
                                <img src="/assets/images/cross.svg" alt="cross icon" />
                            </div>
                        </div>
                        <div className="nav_mobile">
                            <div className="links">
                                <ul>
                                    <li className="link">
                                        <Link to={"/"} onClick={() => {
                                            gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "easeIn" })
                                        }}>Home</Link>
                                    </li>
                                    <li className="link">
                                        <p onClick={() => {
                                            gsap.to(window, { duration: 1, scrollTo: "#case_study", ease: "easeIn" })
                                        }}>Case Study</p>
                                    </li>
                                    <li className="link"  >
                                        <p onClick={() => {
                                            gsap.to(window, { duration: 1, scrollTo: "#recent_work", ease: "easeIn" })
                                        }}>Recent Works</p>
                                    </li>
                                    <li className="link">
                                        <NavLink to={"/about"}>About Me</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : null}
            </>
            :
            <>
                <div ref={navBtnref} className="nav_container">
                    <div className="logo">logo</div>
                    <div className="nav_desktop">
                        <div className="links">
                            <ul>
                                <li className="link"><NavLink>Home</NavLink></li>
                                <li className="link"><NavLink>Case study</NavLink></li>
                                <li className="link"><NavLink>Recent Work</NavLink></li>
                                <li className="link"><NavLink>About me</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="email">Let's Talk</div>
                </div>
            </>
    )
}


export default NavBar;