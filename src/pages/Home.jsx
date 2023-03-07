import React from 'react'
import CaseStudy from '../components/CaseStudy'
import Footer from '../components/Footer'
import RecentWorks from '../components/RecentWorks'
import SlideBanner from '../components/SlideBanner'



const Home = () => {


    return (
        <>
            <main className="main_content_container">
                <div id="hero" className="sections section-hero">
                    <p className="oevrline">md ashiqul islam</p>
                    <h1 className="hero_heading">Creating meaningful user experiences through product design</h1>
                    <img className="scroller" src="/assets/images/scroll.svg" alt="scroll icon" />
                </div>
                <CaseStudy />
                <SlideBanner />
                <RecentWorks />
            </main>
            <Footer />
        </>
    )
}

export default Home