import React, { useState } from 'react'
import { AppData } from '../ContextAPI'

const RecentWorks = () => {

    const [showWeb, setWeb] = useState(true);
    const [showApp, setApp] = useState(false);
    const [showDash, setDash] = useState(false);



    const { state } = AppData();
    let { web, app, dash } = state;

    return (
        <div id="recent_work" className="section_recent sections">
            <h1>Recent work</h1>
            <div className="work_container">
                <div className="work_types">
                    <div className={`tabs ${showWeb ? "active" : ""}`} onClick={() => {
                        setWeb(true);
                        setApp(false);
                        setDash(false)
                    }} >Website</div>
                    <div className={`tabs ${showApp ? "active" : ""}`} onClick={() => {
                        setWeb(false);
                        setApp(true);
                        setDash(false)
                    }}>Mobile App</div>
                    <div className={`tabs ${showDash ? "active" : ""}`} onClick={() => {
                        setWeb(false);
                        setApp(false);
                        setDash(true);
                    }}>Dashboard</div>
                </div>
                <div className="viewTab">
                    {/* <div id="web" className="work_gallery" > */}
                    <div id="web" className={` work_gallery ${showWeb ? "show" : "hide"} `} >
                        {
                            web.map((item, index) =>
                                <div key={`${item.id}`} className="card">
                                    <div className="pic">
                                        <img src={`assets/${item.gallery.pictures.main}`} alt={item.name} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div id="app" className={` work_gallery ${showApp ? "show" : "hide"} `}>
                        {
                            app.map((item, index) =>
                                <div key={`${item.id}`} className="card">
                                    <div className="pic">
                                        <img src={`assets/${item.gallery.pictures.main}`} alt={item.name} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div id="dash" className={` work_gallery ${showDash ? "show" : "hide"} `}>
                        {
                            dash.map((item, index) =>
                                <div key={`${item.id}`} className="card">
                                    <div className="pic">
                                        <img src={`assets/${item.gallery.pictures.main}`} alt={item.name} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecentWorks