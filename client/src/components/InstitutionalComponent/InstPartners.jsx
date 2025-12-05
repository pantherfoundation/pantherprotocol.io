import React from 'react'
import { Row, Col } from 'antd'
import RollsWrapper from './Styles/InstiPartnerStyles'
import Marquee from "react-fast-marquee";

import logo1 from '../../assets/Images/logo-1.svg'
import logo2 from '../../assets/Images/logo-2.svg'
import logo3 from '../../assets/Images/logo-3.svg'
import logo4 from '../../assets/Images/logo-4.svg'
import logo5 from '../../assets/Images/logo-5.svg'
import logo6 from '../../assets/Images/logo-6.svg'
import logo7 from '../../assets/Images/logo-7.svg'
import logo8 from '../../assets/Images/logo-8.svg'
import logo9 from '../../assets/Images/logo-9.svg'
import logo10 from '../../assets/Images/logo-10.svg'


const LogoRolls = () => {


  return (
    <RollsWrapper>
  <div className='wideContainer'>

    <div className='div'><p>Our Partners:</p></div>      
    <div >

        <Row gutter={[75,40]} style={{alignItems: 'center'}}>
          <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={90}
          >
           <Col>
                  <div > 
                 <a href="https://elrond.com" rel="nofollow noopener noreferrer" target='_blank'> <img className='partners_logo elrond' src={logo1} alt='Panther Protocol' /> </a>
                  </div>
              </Col>
              <Col>
              <div >
              <a href="https://polygon.technology" rel="nofollow noopener noreferrer" target='_blank'> <img className='partners_logo polygon'  src={logo2} alt='Panther Protocol' /> </a>
              </div>
              </Col>
              <Col>
              <div>
              <a href="https://flare.xyz" rel="nofollow noopener noreferrer" target='_blank'> 
              <img className='partners_logo flare' src={logo3} alt='Panther Protocol' /></a>
              </div>
              </Col>
              <Col>  
              <div  >
              <a href="https://near.org" rel="nofollow noopener noreferrer" target='_blank'> <img className=' partners_logo near' src={logo4} alt='Panther Protocol' /> </a>
              </div>
              </Col>
              <Col>  
              <div>
              <a href="https://www.bumper.fi" rel="nofollow noopener noreferrer" target='_blank'> <img className='partners_logo bumper'  src={logo5} alt='Panther Protocol' /></a>
              </div></Col>

              <Col>  
              <div >
              <a href="https://skynettrading.com" rel="nofollow noopener noreferrer" target='_blank'> <img className=' partners_logo net-trading' src={logo6} alt='Panther Protocol' /></a></div></Col>
              <Col>  
              <div  >
              <a href="https://supraoracles.com/" rel="nofollow noopener noreferrer" target='_blank'> 
              <img className='partners_logo supra-oracles'  src={logo7} alt='Panther Protocol' /></a></div></Col>
              <Col>  
              <div >
              <a href="https://shyft.network/" rel="nofollow noopener noreferrer" target='_blank'> 
              <img className='partners_logo shyft' src={logo8} alt='Panther Protocol' />
              </a></div></Col>
              <Col>  
              <div>
              <a href="https://firo.org" rel="nofollow noopener noreferrer" target='_blank'> 
              <img className='partners_logo firo'  src={logo9} alt='Panther Protocol' />
              </a></div></Col>
              <Col>  
              <div  >
              <a href="https://sentinel.co" rel="nofollow noopener noreferrer" target='_blank'> <img className='partners_logo sentinel'  src={logo10} alt='Panther Protocol' />
              </a>
              </div></Col>
            </Marquee>
        </Row>
    </div>  
     </div>
    </RollsWrapper>
  )
}

export default LogoRolls