import React from 'react'
import Header from '../../patterns/molecules/navigation/Header'
import SideBar from '../../patterns/molecules/navigation/SideBar'
import HeroBanner from '../../patterns/molecules/banner/HeroBanner'

const StartPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <Header>Codestar Streams</Header>
       <div className="d-flex flex-wrap flex-lg-nowrap">
          <SideBar />
          <HeroBanner>
              <h1 className="f000-light mb-4">Codestar Streams</h1>
              <div className="f2-light pb-4">
                 Streaming Platform Demo
              </div>
          </HeroBanner>
       </div>
    </div>
  )
}

export default StartPage
