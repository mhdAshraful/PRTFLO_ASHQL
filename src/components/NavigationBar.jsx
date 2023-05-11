import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import Hoverbutton from './Hoverbutton';
import Footer, { Mailto } from './Footer';
import useNavScrollController from '../hooks/useNavScrollController';
gsap.registerPlugin(ScrollToPlugin);

const NavigationBar = ({ width }) => {
  let [show, setShow] = useState(false);
  let navBtnref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const outside = (e) => {
      if (!navBtnref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.body.addEventListener('click', outside)
    return () => document.body.removeEventListener('click', outside)
  }, [navBtnref])

  /**
   * Slide in to view
   */
  const bringInView = (position, offY = 80) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: position,
        offsetY: offY
      },
      ease: "expo.inOut"
    })
  }

  let { activeSection, navColr } = useNavScrollController()





  return (
    /** tab or mobile view */
    // id="home"
    <header style={{
      backgroundColor: navColr ? "hsla(40,23%,97%,1)" : "white",
      WebkitBackdropFilter: navColr ? "blur(4px)" : "none",
      backdropFilter: navColr ? "blur(4px)" : "none",
      // filter: navColr ? "blur(2px)" : "none",
      borderBottom: navColr ? "1px solid hsla(213, 5%, 58%, 0.4)" : "none",
      transition: "all 1.4s"
    }}>
      {
        width <= 1199 ?
          <>
            <div className="nav_container"  >
              <div className="logo" style={{ cursor: 'pointer' }} onClick={() => {
                navigate("/")
                bringInView("#home", 240)
              }} >
                <img src='/assets/images/logo.svg' alt='logo' />
              </div>
              <div
                className={show ? "hamburger spin" : "hamburger"}
                ref={navBtnref}
                onClick={() => setShow(!show)}>
                <span ></span>
              </div>
            </div>

            {/* view stagger animation if true  */}
            <div className="mobileNavView" style={{
              // display: show ? "flex" : "none",
              top: show ? "80px" : "-100vh"
            }}>

              {/* mobile menu view */}
              <div className="nav_mobile" style={{
                top: show ? "0px" : "-100vh"
              }} >
                <div className="links">
                  <ul>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.8s" : "0.1s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#case_study")
                      }}
                    >
                      <Hoverbutton name={"Case Study"} activeSection={activeSection} btn_id="case_study" /></li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.6s" : "0.2s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#work_process")
                      }}
                    >
                      <Hoverbutton name={"Work Process"} activeSection={activeSection} btn_id="work_process" />
                    </li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.4s" : "0.3s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#recent_works")
                      }}
                    >
                      <Hoverbutton name={"Recent Works"} activeSection={activeSection} btn_id="recent_works" />
                    </li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.2s" : "0.4s"
                      }} onClick={() => {
                        navigate("/about")
                        bringInView("#top")
                      }}  >
                      <Hoverbutton name={"About Me"} activeSection={activeSection} btn_id="about_me" />
                    </li>
                  </ul>
                  <Footer style={{
                    transitionDelay: show ? "0.1s" : "0.6s"
                  }} />
                </div>
              </div>
            </div>
          </>
          :
          /** desktop view */
          <>
            <div ref={navBtnref} className="nav_container">
              <div className="logo" onClick={() => {
                navigate("/")
                bringInView("#home", 240)
              }}>
                <img src='/assets/images/logo.svg' alt='logo' />
              </div>
              <div className="nav_desktop">
                {/* <div className="links">
                  <ul>
                    <li className="link"><NavLink to={"/"} onClick={() => bringInView(0)}>Home</NavLink></li>
                    <li className="link"><NavLink onClick={() => bringInView("#case_study")}>Case study</NavLink></li>
                    <li className="link"><NavLink onClick={() => bringInView("#recent_work")}>Recent Work</NavLink></li>
                    <li className="link"><NavLink to={"/about"}>About me</NavLink></li>
                  </ul>
                </div> */}

                <div className="links">
                  <ul>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.8s" : "0.1s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#case_study")
                      }}
                    >
                      <Hoverbutton name={"Case Study"} activeSection={activeSection} btn_id="case_study" /></li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.6s" : "0.2s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#work_process")
                      }}
                    >
                      <Hoverbutton name={"Work Process"} activeSection={activeSection} btn_id="work_process" />
                    </li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.4s" : "0.3s"
                      }}
                      onClick={() => {
                        navigate("/")
                        bringInView("#recent_works")
                      }}
                    >
                      <Hoverbutton name={"Recent Works"} activeSection={activeSection} btn_id="recent_works" />
                    </li>
                    <li
                      className="link LinkStag"
                      style={{
                        top: show ? "0" : "-100vh",
                        transitionDelay: show ? "0.2s" : "0.4s"
                      }} onClick={() => {
                        navigate("/about")
                        bringInView("#top")
                      }}  >
                      <Hoverbutton name={"About Me"} activeSection={activeSection} btn_id="about_me" />
                    </li>
                  </ul>

                </div>
              </div>
              <Mailto email="mdashiquli4@gmail.com" subject='New Design Project!!' body='Hi, Ashiq, I would like to discuss about my next Interesting Project. Please contact me with the details below, and here is an overview of the project:'>
                Let's Talk
              </Mailto>
              {/* <div className="email">Let's Talk</div> */}
            </div>
          </>
      }
    </header>
  )
}

export default NavigationBar