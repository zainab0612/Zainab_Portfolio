import Image from 'next/image'
import about from '../../../public/images/about-me.png'
import '../../styles/Home/aboutSection.css'
import React from 'react'

export const AboutSection = () => {
    return (
        <>
            <div className="about-section">
                <div className="about-left">
                    <div className="about-heading">
                        <h1 className="about-title">
                            <span className="text-primary">#</span>about-me
                        </h1>
                        <div className="about-line"></div>
                    </div>

                    <div className="about-content">
                        <p className="about-paragraph">
                            I’m a Frontend Developer passionate about building responsive, scalable, and user-centric web applications. With hands-on experience in developing production-ready websites, enterprise dashboards, and admin portals, I focus on creating clean, reusable, and high-performance user interfaces.<br /><br />
                            I enjoy solving real-world problems through modern web technologies and continuously improving my skills to build impactful digital experiences.
                        </p>
                        <div className="about-button-wrapper">
                            <button className="about-button">Read more &gt;</button>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-image-wrapper">
                        <Image src={about} alt="Picture" className="about-image" />
                    </div>
                </div>
            </div>

        </>
    )
}
