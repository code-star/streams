import React from 'react'
import { node } from 'prop-types'

const style = {
  'position': 'sticky',
  'top': 0,
  'left': 0,
  'right': 0,
  'zIndex': 101,
}

const Header = ({ children }) => (
  <div className="bg-gray-dark" style={style}>
    <div className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container">
       <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
          <div className="flex-self-center Details-content--shown">
             <div className="dropdown js-menu-container js-select-menu">
                <h1 className="h4 text-normal">
                   <button className="btn-link text-white link-white no-underline js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
                      {children}
                   </button>
                </h1>
             </div>
          </div>
       </div>
    </div>
  </div>
)

Header.defaultProps = {
  children: null,
}

Header.propTypes = {
  children: node,
}

export default Header
