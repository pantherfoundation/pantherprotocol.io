import {useState} from 'react'
import styled from "styled-components";
import HeroWrapper from './Styles/InstiHeroStyle'
import LogoRolls from './InstPartners'
import { Navbar } from '../SharedComponent'
// import InstiBG from '../../assets/Images/BGInsti.png'
import InstiBG from '../../assets/Images/BGInsti.webp'



const BGStyled = styled.div`
position:relative;
background: url(${InstiBG});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
z-index:2;

`
const TopGradient = styled.div`
position:absolute;
z-index:2;
opacity:0.2;
background:radial-gradient( rgba(34, 36, 80, 0) 0, rgba(34, 36, 80,0.5) 60%, rgba(34, 36, 80, 0) 100%);
filter:blur(100px);
width:100%;
height:100%;
top:-10%;

img{

}

@media screen and (max-width: 768px){
}


`

const HeroSection = () => {
  const [update, setUpdate] = useState(true)


  const handleUpdate = (id)=>{
    if(id === true){
      setUpdate(false)
    }else{
      setUpdate(true)

    }
  }

  return (
  <>
   <BGStyled>  
  { update && <TopGradient></TopGradient>}
      
    <Navbar updateValue={handleUpdate} />
    <HeroWrapper>
         <div className='container'>
            <h1> 
              <span data-aos="fade-up" data-aos-duration="400" className='span1'> Customizable, compliant </span>
              <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="300" className='span2' >zero-knowledge solutions</span> 
              <span data-aos="fade-up" data-aos-duration="400" data-aos-delay="450" className='span1'> for institutions </span>
            </h1>
            <p data-aos="fade-up"  data-aos-duration="500" data-aos-delay="600"> Trade between trusted counterparties, OTC transactions, and more. Own your data. </p>
          </div>
    </HeroWrapper>
   <LogoRolls />
 
   </BGStyled>
  
   </>
  )
}

export default HeroSection