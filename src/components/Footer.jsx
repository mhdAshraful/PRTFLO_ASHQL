import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="email_me">
                    <h3>Contact me by email</h3><img className="send_svg" src="/images/send.svg" alt="send icon" />
                </div>
                <div className="social_media"><a href="https://Linkedin.com" className="links linkedin">LinkedIn</a><a href="https://behance.com" className="links bechance">Behance</a><a href="https://dribbble.com" className="links dribbble">Dribbble</a><a
                    href="https://instagram" className="links instagram">Instagram</a></div>
            </div>
        </footer>
    )
}

export default Footer