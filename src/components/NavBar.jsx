import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
gsap.registerPlugin(ScrollToPlugin);



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



    const bringInView = (position) => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: position,
                offsetY: 92
            },
            ease: "expo.inOut",
        })
    }





    return (
        width <= 1199 ?
            <>
                <div className="nav_container">
                    <div className="logo">
                        <img src='/assets/images/logo.svg' alt='logo' />
                    </div>
                    <div ref={navBtnref} onClick={() => setShow(show => !show)} className="hamburger">
                        <span></span>
                    </div>
                </div>

                {show ?
                    <div className='mobileNavView '>
                        {/* mobileMenuBar */}
                        <div className="mobiletop">
                            <div className="logo">
                                <img src='/assets/images/logo.svg' alt='logo' />
                            </div>
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
                                        {/* <Link onClick={() => {
                                            gsap.to(window, { duration: 1, scrollTo: { y: "#case_study" }, ease: "easeIn" })
                                        }}>Case Study</Link> */}
                                        <Link onClick={() => bringInView("#case_study")}>Case Study</Link>
                                    </li>
                                    <li className="link"  >
                                        <Link onClick={() => bringInView("#recent_work")}>Recent Works</Link>
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
                    <div className="logo">
                        <img src='/assets/images/logo.svg' alt='logo' />
                    </div>
                    <div className="nav_desktop">
                        <div className="links">
                            <ul>
                                <li className="link"><NavLink to={"/"} onClick={() => bringInView("#home")}>Home</NavLink></li>
                                <li className="link"><NavLink onClick={() => bringInView("#case_study")}>Case study</NavLink></li>
                                <li className="link"><NavLink onClick={() => bringInView("#recent_work")}>Recent Work</NavLink></li>
                                <li className="link"><NavLink to={"/about"}>About me</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="email">Let's Talk</div>
                </div>
            </>
    )
}


export default NavBar;