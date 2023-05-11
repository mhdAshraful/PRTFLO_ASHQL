import './SASS/index.scss'
import FontFaceObserver from 'fontfaceobserver';
import { useEffect, useState, useRef, memo } from 'react';
// import { Canvas } from '@react-three/fiber'
import { Route, Routes } from 'react-router-dom';

// import { Bloom, EffectComposer } from '@react-three/postprocessing'
//components
import Home from './pages/Home';
import CaseDetails from './pages/Details';
import { AboutMe } from './pages/AboutMe';
import { AppData } from './ContextAPI';
import NavigationBar from './components/NavigationBar';

import useResize from './hooks/useResize';



(
  function () {
    document.documentElement.className += ("wf-inactive");
    sessionStorage.font = true;
    if (sessionStorage.fontsLoaded) {
      document.documentElement.classList.remove("wf-inactive");
      console.log(
        "%c Fonts installed!",
        "color: PaleGoldenrod; font-family: Clash Display; font-weight:300; background-color: crimson; font-size: 1rem"
      );
      document.documentElement.classList.add("wf-active");
      return;
    }

    var fontA = new FontFaceObserver('Clash Display');

    // if no promise used
    // fontA.load('').then(function () {
    //     console.log("%c Fonts installed!",
    //        "color: PaleGoldenrod; font-family: Clash Display; font-weight:300; background-color:black; font-size: 1rem"
    // });

    Promise.all([fontA.load(null, 5000)]).then(
      function () {
        document.documentElement.classList.remove("wf-inactive");
        console.log(
          "%c Fonts installed!",
          "color: PaleGoldenrod; font-family: Clash Display; font-weight:300; background-color: crimson; font-size: 1rem"
        );
        document.documentElement.classList.add("wf-active");
        // Optimization for Repeat Views
        sessionStorage.fontsLoaded = true;
      }
    )
  }
)();

function App() {
  const { Loading } = AppData()
  let width = useResize()

  return (
    Loading ?
      <Load />
      :
      <div className="App">
        <NavigationBar width={width} />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/details/:id' element={<CaseDetails />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </div>
  )
}

function Load({ children }) {

  return (
    <div className="load">
      <span className='loader'>
        {children}
      </span>
    </div>
  )
}





export default memo(App);



/**
 <Canvas style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }}>
                    <EffectComposer>
                        <Bloom mipmapBlur intensity={2} />
                    </EffectComposer>
                    <mesh>
                        <sphereGeometry />
                        <meshStandardMaterial color="hotpink" emissive="hotpink" />
                    </mesh>
                </Canvas>
 */