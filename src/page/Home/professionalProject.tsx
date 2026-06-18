import Image from 'next/image'
import payvay from '../../../public/images/Payvay.png'
import qbs from '../../../public/images/qbs.png'
import waslhub from '../../../public/images/waslhub.png'
import qbsli from '../../../public/images/qbsli.png'
import rfid from '../../../public/images/rfid.png'
import React from 'react'
import '../../styles/Home/projectSection.css'

export const ProfessionalProjects = () => {
    return (
        <>
            <div className="project-section">
                <div className="project-heading">
                    <h1 className="project-title">
                        <span className="text-primary">#</span>professional projects
                    </h1>
                    <div className="project-line"></div>
                </div>

                <div className="project-cards">

                    {/* Payvay */}
                    <div className="project-card">
                        <Image
                            src={payvay}
                            alt="Payvay"
                            className="project-image"
                        />

                        <div className="project-stack">
                            Next.js • React • Tailwind CSS • REST API
                        </div>

                        <div className="project-content">
                            <h1 className="project-name">
                                Fintech Digital Wallet Application
                            </h1>

                            <p className="project-description">
                                Developed responsive interfaces for a fintech web application and admin portal with secure authentication and REST API integration.
                            </p>

                            <div className="project-button-wrapper">
                                <a
                                    href="https://payvay.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="project-button">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* QBS */}
                    <div className="project-card">
                        <Image
                            src={qbs}
                            alt="QBS"
                            className="project-image"
                        />

                        <div className="project-stack">
                            Next.js • React • Tailwind CSS
                        </div>

                        <div className="project-content">
                            <h1 className="project-name">
                                QBS Corporate Website
                            </h1>

                            <p className="project-description">
                                Developed a corporate
                                website showcasing enterprise solutions,
                                AI-driven products, digital transformation,
                                and business consulting services.
                            </p>

                            <div className="project-button-wrapper">
                                <a
                                    href="https://www.qbsco.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="project-button">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WaslHub */}
                    <div className="project-card">
                        <Image
                            src={waslhub}
                            alt="WaslHub AI"
                            className="project-image"
                        />

                        <div className="project-stack">
                            Next.js • TypeScript • Tailwind CSS • AOS Animation
                        </div>

                        <div className="project-content">
                            <h1 className="project-name">
                                WaslHub AI Website
                            </h1>

                            <p className="project-description">
                                Built a modern business website showcasing AI-powered solutions, digital transformation services, and enterprise innovations.
                            </p>

                            <div className="project-button-wrapper">
                                <a
                                    href="https://waslhub.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="project-button">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* QBSLI */}
                    <div className="project-card">
                        <Image
                            src={qbsli}
                            alt="QBS Leadership Institute"
                            className="project-image"
                        />

                        <div className="project-stack">
                            Next.js • React • Tailwind CSS
                        </div>

                        <div className="project-content">
                            <h1 className="project-name">
                                QBS Leadership Institute
                            </h1>

                            <p className="project-description">
                                Developed responsive web interfaces for a
                                professional learning and leadership
                                development platform, delivering engaging
                                digital learning experiences.
                            </p>

                            <div className="project-button-wrapper">
                                <a
                                    href="https://qbsli.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="project-button">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <Image src={rfid} alt="RFID Dashboard" className="project-image" />

                        <div className="project-stack">
                            Next.js • TypeScript • Tailwind CSS • REST API
                        </div>

                        <div className="project-content">
                            <h1 className="project-name">
                                RFID Asset Management Dashboard
                            </h1>

                            <p className="project-description">
                                Built a responsive RFID Asset Management Dashboard with advanced
                                filtering, analytics, reporting, asset tracking, and interactive
                                data visualization for enterprise asset management.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}