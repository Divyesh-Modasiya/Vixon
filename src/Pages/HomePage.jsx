import React from 'react'
import Header from '../Component/HomeComponent/Header'
import HeroSlide from '../Component/HomeComponent/HeroSlide'
import AboutUs from '../Component/HomeComponent/AboutUs'
import LuxuryStoneshowcase from '../Component/HomeComponent/LuxuryStoneshowcase'
import OurSkillsSection from '../Component/HomeComponent/OurSkillsSection'
import MarbleProductShowcase from '../Component/HomeComponent/MarbleProductShowcase'
import MarbleInstallationShowcase from '../Component/HomeComponent/MarbleInstallationShowcase'
import MarbleCounterSection from '../Component/HomeComponent/MarbleCounterSection'
import MarbleTestimonials from '../Component/HomeComponent/MarbleTestimonials'
import LuxuryFooter from '../Component/HomeComponent/LuxuryFooter'

function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSlide/>
      <AboutUs/>
      <LuxuryStoneshowcase/>
      <OurSkillsSection />
      <MarbleProductShowcase/>
      <MarbleInstallationShowcase/>
      <MarbleCounterSection/>
      <MarbleTestimonials/>
      <LuxuryFooter />
    </div>
  )
}

export default HomePage
