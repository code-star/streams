import './Marker.scss'
import React from 'react'
import cx from 'classnames'
import {string, bool} from 'prop-types'

const markerPosition = {
  position: 'absolute',
  width: 46,
  height: 59,
  left: -46 / 2,
  top: -59
}

const Marker = ({ text, active, label }) => (
    <div className={cx('marker', { 'marker--active': active })} style={markerPosition}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" viewBox="0 0 44 55">
            <g fill="none" fillRule="evenodd">
                {label ? <path className="marker__body marker__body--ema" stroke="#FFF" strokeWidth="3" d="M22 53s20-18.758 20-31.362S33.046 2 22 2 2 9.034 2 21.638C2 34.242 22 53 22 53z" />
                : <path className="marker__body" stroke="#FFF" strokeWidth="3" d="M22 53s20-18.758 20-31.362S33.046 2 22 2 2 9.034 2 21.638C2 34.242 22 53 22 53z" />}
                {label && <path fill="#FFF" fillRule="nonzero" d="M21.91 13l2.636 4.663 5.274 1.053-3.644 3.935.623 5.314-4.889-2.231-4.889 2.23.623-5.313L14 18.716l5.274-1.053z" />}
            </g>
        </svg>
        <div className="marker__text">
            {text}
        </div>
    </div>
);

Marker.propTypes = {
  text: string,
  label: bool,
  active: bool
};

Marker.defaultProps = {
  text: '',
  label: false,
  active: false
};

export default Marker;
