import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import Hoverbutton from './Hoverbutton';
import Footer from './Footer';
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




  const bringInView = (position) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: position,
        offsetY: 92
      },
      ease: "expo.inOut"
    })
  }




  return (
    width <= 1199 ?
      /** tab or mobile view */
      <>
        <div className="nav_container">
          <div className="logo">
            <img src='/assets/images/logo.svg' alt='logo' />
          </div>
          <div
            className="hamburger"
            ref={navBtnref}
            onClick={() => setShow(true)}>
            <span></span>
          </div>
        </div>

        {/* view stagger animation if true  */}
        <div className="mobileNavView" style={{
          top: show ? "0" : "-100vh"
        }}>
          {/* rename in css mobiletop */}
          {/* menu bar in tab or mobile */}
          <div className="mobileMenuBar">
            <div className="logo">
              <img src='/assets/images/logo.svg' alt='logo' />
            </div>
            <div className="cross"
              onClick={() => setShow(false)}
            >
              <img src="/assets/images/cross.svg" alt="cross icon" />
            </div>
          </div>
          {/* mobile menu view */}
          <div className="nav_mobile">
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
                  <Hoverbutton name={"Case Study"} /></li>
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
                  <Hoverbutton name={"Work Process"} />
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
                  <Hoverbutton name={"Recent Works"} />
                </li>
                <li
                  className="link LinkStag"
                  style={{
                    top: show ? "0" : "-100vh",
                    transitionDelay: show ? "0.2s" : "0.4s"
                  }} onClick={() => {
                    navigate("/about")
                    bringInView("#about_me")
                  }}  >
                  <Hoverbutton name={"About Me"} />
                </li>
              </ul>
            </div>
          </div>
          {/* <Footer style={{ transitionDelay: show ? "0.1s" : "0.6s" }} /> */}
        </div>



      </>
      :
      /** desktop view */
      <>
        <div ref={navBtnref} className="nav_container">
          <div className="logo">
            <img src='/assets/images/logo.svg' alt='logo' />
          </div>
          <div className="nav_desktop">
            <div className="links">
              <ul>
                <li className="link"><NavLink to={"/"} onClick={() => bringInView(0)}>Home</NavLink></li>
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

export default NavigationBar