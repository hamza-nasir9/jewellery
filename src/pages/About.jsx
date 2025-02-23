import React from 'react'
import Banner from '../component/Banner'
import Abouttext from '../component/about/Abouttext'

function About() {
  return (
    <div>
      <Banner subheading={"A few words"} mainhead={"About us"} btn={"shop now"} firstline={"At FizaHam Treasures , we craft timeless jewelry that transforms moments into. "} secline={" memories With a focus on exceptional quality and elegant designs. we aim to celebrate your unique story. Discover the perfect piece to make every occasion extraordinary."}/>
      <Abouttext/>
    </div>
  )
}

export default About