import React from 'react'
import { string, node } from 'prop-types'
import { Link } from 'react-router-dom'
import { demoPageRoute } from '../../../routes'

const SideBar = ({ className, children }) => (
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
)

SideBar.defaultProps = {
  className: '',
  children: null,
}

SideBar.propTypes = {
  className: string,
  children: node,
}

export default SideBar
