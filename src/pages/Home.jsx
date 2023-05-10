import React from 'react'
import CaseStudy from '../components/CaseStudy'
import Footer from '../components/Footer'
import RecentWorks from '../components/RecentWorks'
import SlideBanner from '../components/SlideBanner'
import Titletext from '../components/Titletext'
import Workprocess from '../components/Workprocess'



const Home = () => {
  return (
    <>
      <main className="main_content_container">
        <div data-section id='home' className="section">
          <Titletext name="topTitle" title="Creating meaningful user experiences through product design" />
          <SlideBanner className="ban" />
          <CaseStudy />
          <Workprocess />
          <RecentWorks />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home