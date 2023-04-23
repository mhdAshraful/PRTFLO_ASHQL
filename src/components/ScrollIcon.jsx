import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const ScrollIcon = () => {
    const arrowRef = useRef();
    useLayoutEffect(() => {
        gsap.fromTo(arrowRef.current, { y: "-300%", opacity: 0 }, { y: "0", opacity: 1, ease: "ease.inOut", duration: 1.5, repeat: -1 })
    }, [])
    return (
        <div className="scroller">
            <div className='svg-wrapper'>
                <svg width="52" height="88" viewBox="0 0 52 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Mouse">
                        <rect id="Rectangle-67" x="1" y="1" width="50" height="86" rx="25" stroke="#1C1C1C" strokeWidth="2" />
                        <g ref={arrowRef} id="arrowDown" clipPath="url(#clip0_170_2224)">
                            <g id="Group">
                                <path id="Vector" d="M26.6636 71.725L26.6645 71.7242L31.5395 66.8256C31.9047 66.4586 31.9033 65.865 31.5363 65.4997C31.1693 65.1345 30.5758 65.1359 30.2105 65.5028L26.9375 68.7918L26.9375 48.9375C26.9375 48.4197 26.5178 48 26 48C25.4822 48 25.0625 48.4197 25.0625 48.9375L25.0625 68.7917L21.7895 65.5029C21.4243 65.1359 20.8307 65.1345 20.4637 65.4998C20.0966 65.865 20.0953 66.4587 20.4605 66.8256L25.3355 71.7242L25.3364 71.7251C25.7029 72.0923 26.2984 72.0911 26.6636 71.725Z" fill="#1C1C1C" />
                            </g>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_170_2224">
                            <rect width="24" height="24" fill="white" transform="translate(38 48) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ScrollIcon