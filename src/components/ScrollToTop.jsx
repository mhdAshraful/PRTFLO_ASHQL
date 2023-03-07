import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
gsap.registerPlugin(ScrollToPlugin);


const ScrollToTop = () => {

    let { pathname } = useLocation()
    useEffect(() => {
        gsap.to(window, { duration: 1.2, scrollTo: 0, ease: "power2" });
        // window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollToTop