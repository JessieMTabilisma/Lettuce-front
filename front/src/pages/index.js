import React from 'react'
// import { Link } from 'gatsby'
import BannerImg from '../images/team.svg'
import WebApp from '../images/webapp.svg'
import LogoDesign from '../images/logo.svg'
import Portfolio from '../images/portfolio.svg'
import Wordpress from '../images/wordpress.svg'

import Layout from '../components/layout'
import Gallery from '../components/gallery'
import SEO from '../components/seo'

const IndexPage = () => (
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
        <div className="w-1/2 h-auto md:border-solid md:border-gray md:border-r md:border-b block  justify-center">
          <WebApp className="h-32 w-full mt-10" />
          <h3 className="mt-10 font-semibold w-1/2 ml-10">
            Website and Mobile Application
          </h3>
          <p className="mt-5 font-thin w-3/4 ml-10 mb-10">
            We Design and Develop Mobile and Web Application with modern
            approach and technology wise.
          </p>
        </div>
        <div className="w-1/2 h-auto md:border-solid md:border-gray md:border-b block">
          <LogoDesign className="h-32 w-full mt-10" />
          <h3 className="mt-10 font-semibold w-1/2 ml-10">Logo Design</h3>
          <p className="mt-5 font-thin w-3/4 ml-10 mb-10">
            We provide digital assets for you and your company from marketing to
            advertising to social media assets.
          </p>
        </div>
        <div className="w-1/2 h-auto md:border-solid md:border-gray md:border-r block">
          <Portfolio className="h-32 w-full mt-10" />
          <h3 className="mt-10 font-semibold w-1/2 ml-10">Portfolio Design</h3>
          <p className="mt-5 font-thin w-3/4 ml-10 mb-10">
            Are you a hobbyist of a professional we provide professional and
            good looking portfolio website for you.
          </p>
        </div>
        <div className="w-1/2 h-auto md:border-solid block">
          <Wordpress className="h-32 w-full mt-10" />
          <h3 className="mt-10 font-semibold w-1/2 ml-10">Wordpress</h3>
          <p className="mt-5 font-thin w-3/4 ml-10 mb-10">
            We provide the whole process of setting up your wordpress site from
            idealization into hosting to managing and maintaining the site.
          </p>
        </div>
      </div>
    </div>
    <Gallery />
  </Layout>
)

export default IndexPage
