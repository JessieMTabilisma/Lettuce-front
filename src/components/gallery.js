import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import Slider from './slider'
import { useStaticQuery, graphql } from 'gatsby'

const items = [
  {
    projectImage:
      'https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      '(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      '(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      '(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
  {
    projectImage:
      'https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    projectTitle: 'What is Lorem Ipsum?',
    projectCategory: 'Web Application',
  },
]
const Gallery = ({}) => {
  return (
    <div className="gallery bg-black w-full h-auto flex">
      <div className="h-auto">
        <Slider items={items} width={650} visible={2}>
          {({ projectImage, projectTitle, projectCategory }, i) => (
            <div className="h-full w-full p-10">
              <span>{String(i).padStart(2, '0')}</span>
              <img
                src={projectImage}
                style={{ width: '100%', height: '100%' }}
              />
              <h1>{projectTitle}</h1>
              <span>{projectCategory}</span>
            </div>
          )}
        </Slider>
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
