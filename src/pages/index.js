import React from 'react'
import { Link, graphql } from 'gatsby'
import BannerImg from '../images/team.svg'

import Gallery from '../components/gallery'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full h-auto flex mt-20">
        <div className="w-2/5 bg-black px-8">
          <h1 className="text-4xl pxm font-bold mt-12 text-white">
            Branding to the next level.
          </h1>
          <p className="text-white mt-5 font-thin">
            We took branding to the next level transforming our passion into
            something that you need. How about we talk it with a coffee?
          </p>
          <button className="px-10 py-3 mt-8 bg-white text-black cursor-pointer shadow-lg hover:shadow-xl">
            Lets talk
          </button>
        </div>
        <div className="w-3/5 p-16 justify-right">
          <BannerImg className="h-full w-full" />
        </div>
      </div>
      <div className="w-full h-auto mt-32">
        <h2 className="text-xl font-semibold">Awesome Services</h2>
        <div className="h-auto w-full mt-5 md:flex md:flex-wrap">
          {data.allStrapiServices.edges.map((service, index) => {
            return (
              <div
                key={service.node.id}
                className={`w-1/2 h-auto md:border-solid justify-center ${
                  index === 0
                    ? 'md:border-solid md:border-gray md:border-r md:border-b block'
                    : '' || index === 1
                    ? 'md:border-solid md:border-gray md:border-b'
                    : '' || index === 2
                    ? 'md:border-solid md:border-gray md:border-r'
                    : '' || index === 3
                    ? 'md:border-solid'
                    : ''
                }`}
              >
                {service.node.thumbnail.extension === 'svg' ? (
                  <img
                    src={service.node.thumbnail.publicURL}
                    alt={service.node.serviceName}
                    className="h-32 w-full mt-10"
                  />
                ) : null}
                <h3 className="mt-10 font-semibold w-1/2 ml-10">
                  {service.node.serviceName}
                </h3>
                <p className="mt-5 font-thin w-3/4 ml-10 mb-10">
                  {service.node.serviceDescription}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <Gallery />
    </Layout>
  )
}

export default IndexPage

export const serviceQuery = graphql`
  query service {
    allStrapiServices {
      edges {
        node {
          id
          serviceDescription
          serviceName
          thumbnail {
            id
            extension
            publicURL
          }
        }
      }
    }
  }
`
