import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Gallery = ({}) => {
  return (
    <div className="h-auto w-full bg-gray absolute -ml-32 md:flex overflow-x-hidden">
      <div className="h-64 custom-w bg-white md:flex overflow-x-scroll overflow-y-hidden p-20">
        <div className="h-full bg-black w-screen p-20 "></div>
        <div className="h-full bg-gray w-screen p-20"></div>
        <div className="h-full bg-black w-screen p-20 "></div>
      </div>
    </div>
  )
}
Gallery.propTypes = {
  siteTitle: PropTypes.string,
}

Gallery.defaultProps = {
  siteTitle: ``,
}

export default Gallery

postgres://
rpvtsxbdmnngfw
b71e47ea8cfb4e0982ef164d367a13869c11e87382e6496d8d502025a55a3797
ec2-52-86-33-50.compute-1.amazonaws.com
5432
daed60mdofh5v2