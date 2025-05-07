import React, { useEffect } from 'react'
import AboutUs from '../Component/AboutComponent/AboutUs'
import MissionVisionQuality from '../Component/AboutComponent/MissionVisionQuality'
import CompanyProfile from '../Component/AboutComponent/CompanyProfile'
import CompanyTimeline from '../Component/AboutComponent/CompanyTimeline'
import MarbleFlooringComponent from '../Component/AboutComponent/MarbleFlooringComponent'
import PageHeaderAbout from '../Component/AboutComponent/PageHeaderAbout'

function AboutPage() {

  return (
    <div className='overflow-hidden'>
      <PageHeaderAbout/>
      <CompanyProfile/>
      <CompanyTimeline/>
      <AboutUs/>
      <MissionVisionQuality/>
      <MarbleFlooringComponent/>
    </div>
  )
}

export default AboutPage
