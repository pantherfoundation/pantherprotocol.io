import React from 'react'
import ServiceWrapper from './Styles/ServiceStyle'
import {Row, Col, Card} from 'antd'
import {motion} from 'framer-motion'
import service1 from '../../../assets/Images/service1.svg'
import service2 from '../../../assets/Images/service2.svg'
import service3 from '../../../assets/Images/service3.svg'
import service4 from '../../../assets/Images/service4.svg'




const ServiceDetail = () => {


    
  return (
    <div style={{
        position:'relative',
        background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))",
        zIndex:'1'
    }}>

  

    <ServiceWrapper>  
        <div className='container'>
            <h4>Developing on-chain confidential transaction infrastructure for enterprises</h4>
            <h3>Safeguard your on-chain data</h3>
            <p>Panther will enable greater confidentiality, security, and efficiency for digital asset management. </p>

            <Row gutter={[30,30]} className='service-section'>
               <Col  data-aos-once='true' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-180"  data-aos-duration="200" 
                xs={24} sm={12} md={12} lg={12} xl={6}>
                    <motion.div className='animation-div'>

                    <Card>
                        <div className='img-container'> 
                            <img src={service2} alt='Panther Protocol' />
                        </div>
                        <h5 style={{width:'83%', marginLeft:'auto', marginRight:'auto'}}>Scalable and modular zones</h5>
                        <p>Customizable allowlist for assets, users, transaction limits, and DeFi application access.</p>
                   
                    </Card>
                    </motion.div>
                </Col>

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-180" data-aos-duration="200"  data-aos-delay="200"  
                xs={24} sm={12} md={12} lg={12} xl={6}>
                <motion.div className='animation-div'
                
                >
                <Card >
                    <div className='img-container'>
                    <img src={service1} alt='Panther Protocol' />
                    </div>
                    <h5>Confidential portfolio management </h5>
                    <p>Will support various token types across different standards, protecting your strategy and offering MEV resistance through shielded OTC-style trading.</p>
                    </Card>
                    </motion.div>
                </Col>

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-180" data-aos-duration="200"  data-aos-delay="400" 
                xs={24} sm={12} md={12} lg={12} xl={6}>
                <motion.div className='animation-div'>
                    <Card >
                    <div className='img-container'>
                    <img style={{ marginTop:'7px'}} src={service3} alt='Panther Protocol' />
                        </div>
                        <h5 style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>Data safe </h5>
                        <p>Programatically control, decrypt and analyze transaction data in a risk.</p>
     
                    </Card>
                    </motion.div>
                </Col>

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-180" data-aos-duration="200"  data-aos-delay="600" 
                xs={24} sm={12} md={12} lg={12} xl={6}>
                <motion.div className='animation-div'>
                    <Card>
                    <div className='img-container'>
                    <img src={service4} alt='Panther Protocol' />
                    {/* <video className='videoPlay2' ref={zoneRef} width="65px" height="65px" style={{mixBlendMode:"lighten"}} src={zones} muted  playsInline /> */}
                        </div>

                        <h5>Access DeFi <br /> liquidity</h5>
                        <p>Access liquidity via top DEXs using Panther Protocol’s DeFi adapters.</p>
                
                    </Card>
                    </motion.div>
                </Col>

                
            </Row>
            </div>

    </ServiceWrapper>
    {/* <LeftGrad>
     
    </LeftGrad> */}
    </div>
  )
}

export default ServiceDetail