import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/constRoutes'
import {Row, Col, Card} from 'antd'
import ServiceWrapper from './Styles/ServiceDetail'
import styled from "styled-components";
import ser1 from '../../../assets/Images/ser1.svg'
import ser2 from '../../../assets/Images/ser2.svg'
import ser3 from '../../../assets/Images/ser3.svg'
import ser4 from '../../../assets/Images/ser4.svg'
import arrowRight from '../../../assets/Images/arrowRightW.svg'
// import InstiBG from '../../../assets/Images/BGInsti.png'
import InstiBG from '../../../assets/Images/BGInsti.webp'




const BGStyled = styled.div`
position:relative;
background: url(${InstiBG});
background-position: bottom;
background-size: cover;
background-repeat: no-repeat;
z-index:10;
`

const ServicesList = () => {
  return (
<BGStyled>    
    <ServiceWrapper>
         <div className='container'>
            <h4>Compliant zero-knowledge solutions</h4>
            <h3>
                <div className='text-resp'>Customizable solutions </div>
            for institutions</h3>

            <Row gutter={[30,30]} className='service-section'>
                
                <Col 
                // data-aos="fade-up" data-aos-duration="200"  data-aos-delay="200" data-aos-offset="50" 
                xs={24} sm={12} md={12} lg={12} xl={12}>  
                    <Card  className='service-card'>
                        <h5> <span><img  width="35px" height="34px" src={ser1} alt="Panther Protocol" /></span> Permissioned environments </h5>
                        <p>Manage a Panther Zone and whitelist users for maximum security and control.</p>
                    </Card>
                </Col>

                <Col 
                // data-aos="fade-up" data-aos-duration="200"  data-aos-delay="200" data-aos-offset="50"  
                xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card className='service-card'>
                        <h5><span><img width="31px" height="34px" src={ser2} alt="Panther Protocol" /></span>  OTC Desks </h5>
                        <p>Conduct zero-knowledge transactions within on-chain dark pools.</p>
                    </Card>
                </Col>

                <Col 
                // data-aos="fade-up" data-aos-duration="200"  data-aos-delay="300" data-aos-offset="50" 
                 xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card className='service-card'>
                        <h5> <span><img width="32px" height="24px" src={ser3} alt="Panther Protocol" /></span> On-chain compliance support </h5>
                        <p>Custom rules for Zone Managers. KYB support to onboard crypto asset managers.</p>
                    </Card>
                </Col>

                <Col 
                // data-aos="fade-up" data-aos-duration="200"  data-aos-delay="300" data-aos-offset="50" 
                 xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Card className='service-card'>
                        <h5> <span> <img width="30px" height="33px" src={ser4} alt="Panther Protocol" /></span> DeFi access </h5>
                        <p>Deploy assets to the most popular DeFi dApps and protocols for NFTs, lending, swapping, and more.</p>
                    </Card>
                </Col>

            
            </Row>
        {/* <div className='glow-effects' data-aos="fade-up"  data-aos-duration="500" data-aos-offset="50" data-aos-delay="100"> */}
        
            <div className='center' >
            <Link to={ROUTES.INSTITUTION}>
                <button className='button'>
                    <svg className='btn-svg' width="343" height="73" viewBox="0 0 343 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_9_2218)">
                        <rect x="0.12793" y="0.100098" width="342" height="73" rx="15" fill="#D9D9D9" fillOpacity="0.05"/>
                        <rect x="1.13213" y="1.1043" width="340.992" height="70.9916" rx="14" stroke="url(#paint0_linear_9_2218)" strokeWidth="2.0084"/>
                        </g>
                        <defs>
                        <filter id="filter0_b_9_2218" x="-99.8721" y="-99.8999" width="542" height="273" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_2218"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_2218" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_9_2218" x1="27.0593" y1="20.2688" x2="318.3" y2="32.3193" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#87F9C2"/>
                        <stop offset="1" stopColor="#6BB1D9"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <span>Panther for Institutions <img width="10px" height="14px" src={arrowRight} alt='Panther Protocol' /></span>
                </button>
            </Link>
            </div>

       
     

         {/* </div> */}

         </div>

    </ServiceWrapper>
    </BGStyled>

  )
}

export default ServicesList