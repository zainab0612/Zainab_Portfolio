import React from "react";
import "../../styles/Home/experienceSection.css";

export const ExperienceSection = () => {
    return (
        <section className="experience-section">
            <div className="experience-heading">
                <h1 className="experience-title">
                    <span className="text-primary">#</span>professional experience
                </h1>
                <div className="experience-line"></div>
            </div>

            <div className="experience-card">

                <div className="experience-top">
                    <div>
                        <h2>Frontend Engineer</h2>
                        <h3>QBS Co. Pvt. Ltd.</h3>
                    </div>

                    <div className="experience-date">
                        Jul 2024 - Present
                    </div>
                </div>

                <p className="experience-location">
                    Karachi, Pakistan
                </p>

                <div className="experience-tech">
                    <span>React.js</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                    <span>REST APIs</span>
                    <span>Git/GitHub</span>
                </div>

                <ul className="experience-list">
                    <li>Developed responsive web applications and enterprise solutions.</li>
                    <li>Built reusable UI components following modern frontend practices.</li>
                    <li>Integrated REST APIs for dynamic data rendering.</li>
                    <li>Developed CMS, admin portals and enterprise dashboards.</li>
                    <li>Optimized application performance and enhanced user experience.</li>
                    <li>Collaborated with cross-functional teams using Git/GitHub.</li>
                </ul>

            </div>
        </section>
    );
};