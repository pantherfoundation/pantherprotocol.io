import React, { lazy , Suspense} from 'react'
import OGImg from '../assets/Images/og_panther.png'
import { Helmet } from 'react-helmet'
import { HeroSection, ServiceDetail } from '../components/PageComponent/LP_Components'
const NewsletterSec = lazy(()=>import('../components/PageComponent/LP_Components/NewsletterSec'));
const Partners = lazy(()=>import('../components/PageComponent/LP_Components/Partners'));
const BlogSection = lazy(()=>import('../components/PageComponent/LP_Components/BlogSection'));
const SCAudit = lazy(()=>import('../components/PageComponent/LP_Components/SCAudit'));
const Footer = lazy(()=>import('../components/SharedComponent/Footer'));
const Hiw = lazy(()=>import('../components/PageComponent/LP_Components/hiw'));


const LandingPage = () => {
  
  return (
    <>
    <Helmet>
      <title> Panther Protocol </title>
      {/* <link rel="preload" href={Sora} as="font" type="font/ttf" crossorigin />
      <link rel="preload" href={Poppins} as="font" type="font/ttf" crossorigin />
      <link rel="preload" href={Inter} as="font" type="font/ttf" crossorigin /> */}

      <meta property="og:image" content={OGImg} />
      <meta property="og:title" content="Home - Panther Protocol"/>
      <meta property="og:description" content="Building on-chain privacy infrastructure for VASP-licensed entities"/>
    </Helmet>
      <HeroSection />
      <ServiceDetail />
      <Suspense> <Hiw /></Suspense>
      <Suspense><SCAudit /></Suspense>
      <Suspense ><Partners /></Suspense>
      <div style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
        <Suspense><BlogSection /></Suspense>
        <Suspense> <NewsletterSec /></Suspense>
        <Suspense><Footer /></Suspense>
      </div>
    </>
  )
} 

export default LandingPage