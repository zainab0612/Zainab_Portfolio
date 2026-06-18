import Image from 'next/image'
import linkedIn from '../../../public/images/Linkedin.svg'
import email from '../../../public/images/Email.svg'
import quote from '../../../public/images/quote (1).svg'
import React from 'react'
import '../../styles/Home/contactSection.css'

export const ContactSection = () => {
    return (
        <>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-heading">
                        <h1 className="contact-title">
                            <span className="text-primary">#</span>contacts
                        </h1>
                        <div className="contact-line"></div>
                    </div>

                    <div className="contact-content">
                        <p className="contact-paragraph">
                            Interested in frontend opportunities, collaborations, and building impactful digital products.
                        </p>
                    </div>
                    <div className="contact-button-wrapper">

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=znaeem0612@gmail.com&su=Let's%20Connect"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-card">
                        <div className="contact-card-title">Message me here</div>

                        <div className="contact-item">
                            <a href="https://www.linkedin.com/in/zainab0612" target="_blank" className="contact-link">
                                <Image src={linkedIn} alt='linkedIn' className="contact-icon" />
                                <span className="contact-text">linkedin.com/in/zainab0612</span>
                            </a>
                        </div>

                        <div className="contact-item pr-2">
                            <a href="mailto:znaeem0612@gmail.com" className="contact-link">
                                <Image src={email} alt="EMAIL" className="contact-icon" />
                                <span className="contact-text contact-left">znaeem0612@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote-section">
                <Image src={quote} alt="quote" className="quote-image" />
            </div>

        </>
    )
}
