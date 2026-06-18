import Image from 'next/image'
import group from '../../../public/images/Group 36.svg'
import React from 'react'
import '../../styles/Home/skillSection.css'

export const SkillSection = () => {
    return (
        <>
            <div className="skills-section">
                <div className="skills-left">
                    <div className="skills-heading">
                        <h1 className="skills-title">
                            <span className="text-primary">#</span>skills
                        </h1>
                        <div className="skills-line"></div>
                    </div>
                    <div className="skills-image">
                        <Image src={group} alt="group" />
                    </div>
                </div>

                <div className="skills-right">
                    <div className="skills-column skills-column-1">
                        <div className="skills-box">
                            <div className="skills-box-header">Languages</div>
                            <div className="skills-box-content">
                                HTML<br />CSS<br />JavaScript<br />TypeScript
                            </div>
                        </div>
                    </div>

                    <div className="skills-column skills-column-2">
                        <div className="skills-box">
                            <div className="skills-box-header">Frameworks/Libraries</div>
                            <div className="skills-box-content">
                                Bootstrap<br />
                                Tailwind CSS<br />
                                Next.js<br />
                                React.js<br />
                                Express.js
                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-box-header">Deployment</div>
                            <div className="skills-box-content">
                                Vercel<br />
                                Netlify<br />
                                Firebase<br />
                                Docker
                            </div>
                        </div>

                    </div>

                    <div className="skills-column skills-column-3">
                        <div className="skills-box">
                            <div className="skills-box-header">Tools</div>
                            <div className="skills-box-content">
                                Git & Github<br />
                                VS Code<br />
                                Figma<br />
                                Postman<br />
                                Material UI<br />
                                Shadcn UI<br />
                            </div>
                        </div>

                        <div className="skills-box">
                            <div className="skills-box-header">Databases</div>
                            <div className="skills-box-content">
                                SQL<br />
                                MongoDB
                            </div>
                        </div>

                        {/* New Deployment Card */}
                        <div className="skills-box">
                            <div className="skills-box-header">Other</div>
                            <div className="skills-box-content">OOP</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
