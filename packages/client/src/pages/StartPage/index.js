import React from 'react'
import { Link } from 'react-router-dom'
import {
  demoPageRoute,
} from '../../routes'

const style = {
  'position': '-webkit-sticky',
  'position': 'sticky',
  'top': 0,
  'left': 0,
  'right': 0,
  'zIndex': 101
}

const StartPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  return (
    <div>
       <div className="bg-gray-dark" style={style}>
          <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container">
             <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
                <div className="flex-self-center Details-content--shown">
                   <div className="dropdown js-menu-container js-select-menu">
                      <h1 className="h4 text-normal">
                         <button className="btn-link text-white link-white no-underline js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                            Codestar Streams
                         </button>
                      </h1>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="d-flex flex-wrap flex-lg-nowrap">
          <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
             <ul className="list-style-none">
                <li className="px-4 my-4">
                   <span className="position-relative f4 d-block text-gray-dark">
                   Demo
                   </span>
                   <ul className="pt-2 list-style-none">
                      <li className="">
                      <Link to={demoPageRoute} className="position-relative f5 py-1 d-block">
                          Transport
                          <span className="position-absolute right-0">
                             <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                                <svg height="18" className="octicon octicon-primitive-dot v-align-text-top" viewBox="0 0 8 16" version="1.1" width="9" aria-hidden="true">
                                   <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
                                </svg>
                             </span>
                          </span>
                      </Link>
                      </li>
                   </ul>
                </li>
                <li className="mt-4 border-bottom"></li>
             </ul>
          </nav>
          <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
             <div className="flex-row width-full bg-blue py-3 py-lg-6">
                <div className="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
                   <div className="">
                      <h1 className="f000-light mb-4">Codestar Streams</h1>
                      <div className="f2-light pb-4">
                         Streaming Platform Demo
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3"></div>
          </div>
       </div>
    </div>
  )
}

export default StartPage
