import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react'
import { AppData } from '../ContextAPI'
import useResize from '../hooks/useResize';

// import Cards from "./CardsCopy";
import Cards from "./Cards";
// import CaseStudy from "./CaseStudy copy 2";

const RecentWorks = () => {

  const [showWeb, setWeb] = useState(true);
  const [showApp, setApp] = useState(false);
  const [showDash, setDash] = useState(false);

  const { state } = AppData();
  let { web, app, dash } = state;

  let width = useResize()

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: width >= 640 ? 2 : 1,
  //   slidesToScroll: 1,
  // };


  const [subject, setSubject] = useState(web)

  const changeItems = (items) => {
    console.log(items);
    if (items === "app") {
      setSubject(app);
      console.log("changed", subject);
    } else if (items === "dash") {
      setSubject(dash);
      console.log("changed", subject);
    } else if (items === "web") {
      setSubject(web)
      console.log("changed", subject);
    }
  }




  return (
    <div data-section id="recent_works" className="section_recent sections">
      <h1 className="page-names">Recent work</h1>
      <div className="work_container">
        <div className="work_types">
          <div className={showWeb ? "tabs active" : "tabs"} onClick={() => {
            setWeb(true);
            setApp(false);
            setDash(false);
            changeItems("web")
          }} >Website</div>
          <div className={showApp ? "tabs active" : "tabs"} onClick={() => {
            setWeb(false);
            setApp(true);
            setDash(false)
            changeItems("app")
          }}>Mobile App</div>
          <div className={showDash ? "tabs active" : "tabs"} onClick={() => {
            setWeb(false);
            setApp(false);
            setDash(true);
            changeItems("dash")
          }}>Dashboard</div>
        </div>
        <span className="line"></span>
        <div className="viewTab">
          {showWeb && <Cards subject={subject} />}

          {showApp && <Cards subject={subject} />}

          {showDash && <Cards subject={subject} />}

        </div>

      </div>
    </div>

  )
}

export default RecentWorks