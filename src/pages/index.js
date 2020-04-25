import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Blob from '../images/background/blob.svg'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full h-auto block md:flex mt-20 sm:px-5 md:px-20 lg:px-32">
        <div className="w-full md:w-2/5 px-8">
          <h1 className="text-4xl font-bold mt-12 text-black">
            Branding to the next level.
          </h1>
          <p className="text-black mt-5 font-thin">
            We took branding to the next level transforming our passion into
            something that you need. How about we talk it with a coffee?
          </p>
          <button className="px-16 py-5 mt-8 bg-blue text-white cursor-pointer hover:shadow-xl rounded border-0">
            Lets talk
          </button>
        </div>
        <div className="w-full md:w-3/5 md:p-16 mt-5 md:-mt-16 justify-right">
          <img
            src={data.file.publicURL}
            alt={data.file.name}
            className="h-full w-full px-16"
          />
        </div>
      </div>
      <div className="block pb-10 mt-10">
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
          className="bg-white shadow-xl w-1/2 md:w-5/12 px-10 py-8 text-left z-50 ml-10 md:ml-32 relative block rounded"
        >
          <h1 className="text-black font-semibold text-2xl pxm-font">
            Our works
          </h1>
          <span className="text-xs uppercase text-darkgray">
            Featured and current projects
          </span>
        </div>
        <div className="w-full -mt-10 bg-gray py-32 h-auto block md:grid md:grid-cols-2 md:gap-16 mb-20 px-10 md:px-32 z-0 relative">
          {data.allStrapiPortfolios.edges.map(portfolio => {
            return (
              <div
                key={portfolio.node.id}
                className="w-full bg-white mt-10 h-auto block px-10 py-10 rounded"
              >
                <img
                  className="w-full h-64 mt-10"
                  src={portfolio.node.projectImage.publicURL}
                  alt={portfolio.node.projectTitle}
                />
                <span className="text-xs antialiased text-black">
                  {portfolio.node.projectCategory}
                </span>
                <h2 className="text-black font-normal text-xl mt-3 pb-10 pxm-font">
                  {portfolio.node.projectTitle}
                </h2>
                <div className="w-full text-right">
                  <a className="text-black capitalize pb-2 border-b cursor-pointer">
                    View Work
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* branding */}
      <div className="marquee -mt-10">
        <div className="track">
          <span className="text-6xl text-darkgray uppercase pxm-font font-semibold">
            We Develop & Design Website, Logo and Graphics, Brand Identity and
            Social media Graphics
          </span>
        </div>
      </div>
      {/* Services section */}
      <div className="w-full h-auto mt-10 sm:px-5 md:px-20 lg:px-32">
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="100"
          data-sal-easing="ease"
          className="block text-center md:text-left"
        >
          <Blob className="h-32 relative z-0 -ml-48 md:-ml-64" />
          <h2 className="px-10 md:px-0 text-xl font-semibold relative z-50 -mt-20 pxm-font font-semibold">
            Awesome Services
          </h2>
        </div>
        <div className="h-auto w-full mt-20 md:flex md:flex-wrap">
          {data.allStrapiServices.edges.map((service, index) => {
            return (
              <div
                key={service.node.id}
                className={`w-full md:w-1/2 h-auto md:border-solid justify-center ${
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
                {service.node.serviceImage.extension === 'svg' ? (
                  <img
                    src={service.node.serviceImage.publicURL}
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
      {/* Partners section */}
      <div className="h-64 w-5/6 bg-blue rounded-lg ml-10 mt-32 py-20"></div>
    </Layout>
  )
}

export default IndexPage

export const landingQuery = graphql`
  query landing {
    allStrapiServices {
      edges {
        node {
          serviceDescription
          serviceName
          id
          serviceImage {
            id
            extension
            publicURL
          }
        }
      }
    }
    file(relativeDirectory: { eq: "background" }, name: { eq: "banner" }) {
      publicURL
      name
    }
    allStrapiPortfolios(limit: 5) {
      edges {
        node {
          id
          projectCategory
          projectTitle
          projectImage {
            publicURL
            id
            extension
          }
        }
      }
    }
  }
`
