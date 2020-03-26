import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Banner = ({}) => {
  return <div className="bg-black h-64 pb-32"></div>
}

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
