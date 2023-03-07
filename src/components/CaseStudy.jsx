import React from 'react'
import { AppData } from '../ContextAPI';

const CaseStudy = () => {
    let { state } = AppData();
    console.log('state in casestudyjsx', state);
    let { cases } = state;
    console.log('all cases', cases)




    let totalCase = Object.entries(cases).length;
    return (
        <div id="case_study" className="section-case sections ">
            <h1 className="page-names">Case Study</h1>
            <div className="img_gallery">
                {

                    cases.map((item, index) =>
                        <div className='card_container' key={`${item.id}`}>
                            <div className="case_img">
                                <img src={`assets/${item.gallery.pictures.main} `} alt={item.name} />
                            </div>
                            <div className="numbers">
                                <h3>0{index + 1}/0{totalCase}</h3>
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default CaseStudy