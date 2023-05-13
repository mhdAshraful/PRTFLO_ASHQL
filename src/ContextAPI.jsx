import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
// import * as THREE from "three";


const AppContext = createContext();
export const AppData = () => useContext(AppContext);

export const ContextWrapper = ({ children }) => {
  // console.log("context called----------------");
  const [Loading, setLoading] = useState(true);
  const [Progress, setProgress] = useState(0);
  // const loadingManager = new THREE.LoadingManager();

  const initialState = {
    data: [],
    cases: [],
    web: [],
    app: [],
    dash: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "ALL_DATA": {
        let data = action.payload;
        return { ...state, data };
      }
      case "SORT_DATA": {
        const cases = action.payload.filter((item) => item.category === "cases");
        const web = action.payload.filter((item) => item.category === "web");
        const app = action.payload.filter((item) => item.category === "app");
        const dash = action.payload.filter((item) => item.category === "dash");
        return { ...state, cases, web, app, dash }
      }
      default:
        return state;
    }
  }

  // {
  //     onDownloadProgress: progressEvent => {
  //         console.log('total amount', progressEvent.total);
  //         console.log('loadded', progressEvent.loaded);
  //         let percent = Math.floor((progressEvent.loaded / progressEvent.total) * 100)
  //         setProgress(percent);
  //     }
  // }


  useEffect(() => {
    const getdata = () => {
      setLoading(true)
      // console.log('loading started----------++++')
      // const url = "http://localhost:5999/api/allData"
      const url = "https://server-ashiq.vercel.app/api/allData"

      // const loadingManager = new THREE.LoadingManager();

      axios.get(url,
        {
          onDownloadProgress: progressEvent => {
            // console.log('total amount', progressEvent.bytes);
            // console.log('loadded', progressEvent.event.loaded);
            // console.log('event', progressEvent);
            let percent = Math.floor((progressEvent.event.loaded / progressEvent.bytes) * 100)
            setProgress(percent);
          }
        }
      )
        .then((response) => {

          if (response.status === 200) {
            dispatch({ type: "ALL_DATA", payload: response.data });
            dispatch({ type: "SORT_DATA", payload: response.data })
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log('axios call failed', e);
        })

    };
    getdata();
  }, [])




  let locSt = localStorage.getItem("A_P_DATA")

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, Loading, Progress }}>
      {/* {children} */}
      {children}
    </AppContext.Provider>
  )
}

// use this for animation screen


