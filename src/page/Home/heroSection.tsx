'use client'
import Image from 'next/image'
import Link from 'next/link'
import Picture from '../../../public/images/picture.png'
import quote from '../../../public/images/quote.svg'
import React from 'react'
import '../../styles/Home/heroSection.css'

export const HeroSection = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Zainab's_Resume.pdf";
        link.download = "Zainab's_Resume.pdf";
        link.click();
    };
    return (
        <>
            <div className="intro-section">
                <div className="intro-left">
                    <div className="intro-text-wrapper">
                        <h1 className="intro-title">
                            Hi, I&apos;m <span className='text-primary'> Zainab </span><br />Front-End Developer
                        </h1>
                        <p className="intro-description">
                            Frontend Developer building scalable, responsive web applications with React & Next.js.
                        </p>
                        <div className="intro-button-wrapper ">
                            <Link href="/project">
                                <button className="intro-button">
                                    View Projects
                                </button>
                            </Link>
                            <button
                                className="intro-button intro-button-secondary"
                                onClick={handleDownload}
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
                <div className="intro-right">
                    <div className="intro-image-container">
                        <Image src={Picture} alt="Picture" className='md:p-10' />
                    </div>
                    <div className="intro-banner">
                        <div className="intro-banner-bar"></div>
                        <p className="intro-banner-text">
                            Turning business ideas into clean, user-focused digital experiences.
                        </p>
                    </div>
                </div>
            </div>

            <div className="quote-section">
                <Image src={quote} alt="quote" className="quote-image" />
            </div>

        </>
    )
}
