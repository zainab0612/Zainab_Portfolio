
import { AboutSection } from '@/page/Home/aboutSection'
import { ContactSection } from '@/page/Home/contactSection'
import { ExperienceSection } from '@/page/Home/ExperienceSection'
import { HeroSection } from '@/page/Home/heroSection'
import { ProjectSection } from '@/page/Home/projectSection'
import { SkillSection } from '@/page/Home/skillSection'
import React from 'react'
const page = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default page