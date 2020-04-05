import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({}) => {
  return (
    <div className="h-screen w-full bg-black absolute relative mt-20 px-20">
      <h3 className="text-gray text-2xl font-semibold pxm mt-20">
        Got a project for us?
      </h3>
    </div>
  )
}
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
