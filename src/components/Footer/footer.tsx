import Image from 'next/image';
import React from 'react'
import LogoImg from '../../../public/images/logoIcon.png';
import github from '../../../public/images/Github.svg'
import linkedIn from '../../../public/images/Linkedin.svg'
import email from '../../../public/images/Email.svg'
import './footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="footer-container">
                <div className="footer-main">
                    <div className='footer-left'>
                        <div className="footer-logo-section">
                            <Image alt="Logo" src={LogoImg} className='p-2' />
                            <h1 className="footer-name">Zainab</h1>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=znaeem0612@gmail.com&su=Let's%20Connect">
                                <p className="footer-email">znaeem0612@gmail.com</p>
                            </a>
                        </div>
                        <div className="footer-title">Frontend Developer | React.js | Next.js</div>
                    </div>
                    <div className='footer-media'>
                        <h2 className="footer-media-title">Media</h2>
                        <div className="footer-icons">
                            <a href="https://github.com/zainab0612" target='_blank'>
                                <Image src={github} alt='Github' className='footer-icon' />
                            </a>
                            <a href="https://www.linkedin.com/in/zainab0612" target='_blank'>
                                <Image src={linkedIn} alt='linkedIn' className='footer-icon' />
                            </a>
                            <a href="mailto:znaeem0612@gmail.com">
                                <Image src={email} alt='email' className='footer-icon' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className="footer-bottom-text">
                        Zainab © {year}. All rights reserved.
                    </p>
                </div>
            </div>

        </>
    )
}
