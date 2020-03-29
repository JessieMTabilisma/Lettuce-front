import PropTypes from 'prop-types'
import React from 'react'

const Gallery = ({}) => {
  return (
    <div className="h-screen w-full md:grid md:grid-cols-2 md:gap-20">
      <div className="bg-gray h-64 shadow-base mt-20"></div>
      <div className="bg-gray h-64 shadow-base mt-20"></div>
      <div className="bg-gray h-64 shadow-base"></div>
      <div className="bg-gray h-64 shadow-base"></div>
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
