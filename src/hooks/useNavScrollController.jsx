import React, { useEffect, useRef, useState } from 'react'

function useNavScrollController() {
  const [activeSection, setActiveSection] = useState("home");
  const [navColr, setNavColr] = useState(false);

  const sections = useRef([]);

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", scrollHandller, sections);
    return () => {
      window.removeEventListener("scroll", scrollHandller);
    }
  }, [window.location.pathname]);

  const scrollHandller = () => {
    let pageYoffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffcetTop = section.offsetTop;
      const sectionOffcetHeight = section.offsetHeight;

      if (pageYoffset > 50) {
        setNavColr(true);
      } else if (pageYoffset < 50) {
        setNavColr(false);
      }

      //here 120 is from header height measured manually from figma
      if (pageYoffset >= sectionOffcetTop - 120 && pageYoffset < sectionOffcetHeight + sectionOffcetTop) {
        newActiveSection = section.id
      }
      setActiveSection(newActiveSection);
    })
  }
  return { activeSection, navColr };
}

export default useNavScrollController;