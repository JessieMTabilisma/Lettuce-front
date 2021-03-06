import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => {
  const pageLink = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'Works' },
    { id: 3, link: 'Blog' },
    { id: 4, link: 'Contact us' },
  ]
  return (
    <header className="p-5 bg-white sm:px-5 md:px-16 lg:px-20 xl:px-32">
      <div>
        <h1 className="pxm-font font-semibold text-blue text-2xl md:text-base lg:text-xl ">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="hidden md:block">
          <ul className="flex float-right -mt-6">
            {pageLink.map(link => {
              if (link.id === 4) {
                return (
                  <li className="px-5 py-2 -mt-2 bg-black text-white cursor-pointer shadow-lg hover:shadow-xl rounded">
                    {link.link}
                  </li>
                )
              } else {
                return <li className="mr-10 cursor-pointer">{link.link}</li>
              }
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
