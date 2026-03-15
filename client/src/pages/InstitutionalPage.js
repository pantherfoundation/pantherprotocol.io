import { Helmet } from 'react-helmet'
import {useState} from 'react'
import {NewsletterSec} from '../components/PageComponent/LP_Components'
import InstiForm from '../components/InstitutionalComponent/InstiForm'
import { Footer } from '../components/SharedComponent'
import OGImg from '../assets/Images/og_panther.png'
import {Navbar} from '../components/SharedComponent'

const InstitutionalPage = () => {

  const [, setUpdate] = useState(true)


  const handleUpdate = (id)=>{
    if(id === true){
      setUpdate(false)
    }else{
      setUpdate(true)

    }
  }

  return (
    <>
    {/* { update && <TopGradient></TopGradient>} */}
     <Helmet>
            <title> Contact Us - Panther Protocol </title>
            <meta property="og:image" content={OGImg} />
            <meta property="og:title" content="Contact Us - Panther Protocol"/>
            <meta property="og:description" content="Building on-chain privacy infrastructure for VASP-licensed entities"/>
        </Helmet>
    {/* <InstiHero /> */}
    
    <div style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
    <Navbar updateValue={handleUpdate} />
    <InstiForm />
    <NewsletterSec />
    </div>
    <Footer />
    </>
  )
}

export default InstitutionalPage