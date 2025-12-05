import { Helmet } from 'react-helmet';
import {TopSection, RoadmapSection} from '../components/RoadMapPageComponent'
import OGImg from '../assets/Images/og_panther.png'
import {NewsletterSec} from '../components/PageComponent/LP_Components'
import {Footer} from '../components/SharedComponent';

const RoadMap = () => {
  
  return (
    <>
      <Helmet>
        <title> Roadmap - Panther Protocol</title>
        <meta property="og:image" content={OGImg} />
        <meta property="og:title" content="Roadmap - Panther Protocol"/>
        <meta property="og:description" content="Building on-chain privacy infrastructure for VASP-licensed entities"/>
      </Helmet>
      <div style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
      <TopSection />
      <RoadmapSection />
      <NewsletterSec />
      </div>
      <Footer />
    </>

  )
}

export default RoadMap