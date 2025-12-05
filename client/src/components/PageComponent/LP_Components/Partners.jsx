import React from 'react'
import Marquee from "react-fast-marquee";
import PartnerWrapper from './Styles/PartnerStyle'
import {Row, Col} from 'antd'
import logo1 from '../../../assets/Images/partnerslogo/logo1.svg'
import logo2 from '../../../assets/Images/partnerslogo/logo2.svg'
import logo3 from '../../../assets/Images/partnerslogo/logo3.svg'
import logo4 from '../../../assets/Images/partnerslogo/logo4.svg'
import logo5 from '../../../assets/Images/partnerslogo/logo5.svg'
import logo6 from '../../../assets/Images/partnerslogo/logo6.svg'
import logo7 from '../../../assets/Images/partnerslogo/logo7.svg'
import logo8 from '../../../assets/Images/partnerslogo/logo8.svg'
import logo9 from '../../../assets/Images/partnerslogo/logo9.svg'
import logo10 from '../../../assets/Images/partnerslogo/logo10.svg'
import logo11 from '../../../assets/Images/partnerslogo/logo11.svg'
import logo12 from '../../../assets/Images/partnerslogo/logo12.svg'
import logo13 from '../../../assets/Images/partnerslogo/logo13.svg'
import logo14 from '../../../assets/Images/partnerslogo/logo14.svg'
import logo15 from '../../../assets/Images/partnerslogo/logo15.svg'






const Partners = () => {
  return (
    <>
    <PartnerWrapper>
        <div className='container'>
            <h4> Ecosystem & Partners </h4>
           
            <Row gutter={[30,40]} data-aos-once='true'  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className='big-screens' style={{alignItems:'center', justifyContent:'center'}}>
           <Col lg={8} xl={5}>          
           <div> 
              <a href="https://purefi.io/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo1} alt='Panther Protocol' /> </a>
            </div>
            </Col>
  
            <Col  lg={8} xl={5}> 
            <div data-aos-once='true' data-aos-delay="150"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://amlbot.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo2} alt='Panther Protocol' /> </a>
            </div>
            </Col> 

            <Col  lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://www.chainalysis.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo3} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col   lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://www.fenwick.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo4} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col  lg={8} xl={4}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://uniswap.org/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo5} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://ethereum.org/en/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo6} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col  lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://polygon.technology/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo7} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col   lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://www.gibraltarlaw.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo8} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col  lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://www.xreg.consulting/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo9} alt='Panther Protocol' /></a>
            </div>
            </Col> 

            <Col lg={8} xl={4}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <a href="https://quickswap.exchange/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo10} alt='Panther Protocol' /></a>
            </div>
            </Col> 


            </Row>


            <Row className='small-screens' gutter={[50,40]} style={{alignItems:'center'}}>
            <Marquee
              pauseOnHover={true}
              gradient={false}
              speed={100}
            >
              <Col>
                <div> 
                    <a href="https://purefi.io/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo1} alt='Panther Protocol' /> </a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://amlbot.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo2} alt='Panther Protocol' /> </a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://www.chainalysis.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo"  src={logo3} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://www.fenwick.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo4} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://uniswap.org/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo5} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://ethereum.org/en/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo6} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://polygon.technology/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo7} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://www.gibraltarlaw.com/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo8} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://www.xreg.consulting/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo9} alt='Panther Protocol' /></a>
                </div>
              </Col>

              <Col>
                <div> 
                <a href="https://quickswap.exchange/" rel="nofollow noopener noreferrer" target='_blank'> <img className="imgLogo" src={logo10} alt='Panther Protocol' /></a>
                </div>
              </Col>

    
      

              </Marquee>
            </Row>
           
        </div>
    </PartnerWrapper>

    <PartnerWrapper>
        <div className='container'>
            <h4> Elite Backing From</h4>
           
            <Row gutter={[30,50]} data-aos-once='true'  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className='big-screens' style={{alignItems:'center', justifyContent:'center'}}>
           <Col lg={8} xl={5}>          
            <div style={{background:'#030619'}}> 
               <img style={{mixBlendMode:'screen'}} className="imgLogo"  src={logo11} alt='Panther Protocol' />
            </div>
            </Col>
  
            <Col  lg={8} xl={5}> 
            <div data-aos-once='true' data-aos-delay="150"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
             <img className="imgLogo"  src={logo12} alt='Panther Protocol' /> 
            </div>
            </Col> 

            <Col  lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
               <img className="imgLogo"  src={logo13} alt='Panther Protocol' />
            </div>
            </Col> 

            <Col   lg={8} xl={5}> 
            <div data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <img  className="imgLogo" src={logo14} alt='Panther Protocol' />
            </div>
            </Col> 

            <Col  lg={8} xl={4}> 
            <div  style={{background:'#030619'}} data-aos-once='true'  data-aos-delay="300"  data-aos="fade-up" data-aos-duration="150" data-aos-offset="-150" data-aos-anchor-placement="top-center" className=''>
              <img style={{mixBlendMode:'screen'}} className="imgLogo" src={logo15} alt='Panther Protocol' />
            </div>
            </Col> 


            </Row>


            <Row className='small-screens' gutter={[50,40]} style={{alignItems:'center'}}>
            <Marquee
              pauseOnHover={true}
              gradient={false}
              speed={100}
              direction={'right'}
            >
              <Col>
                  <div style={{background:'#030619'}}> 
                  <img style={{mixBlendMode:'screen'}} className="imgLogo" src={logo11} alt='Panther Protocol' />
                  </div>
              </Col>
              <Col>
              <div >
              <img className="imgLogo" src={logo12} alt='Panther Protocol' />
              </div>
              </Col>
              <Col>
              <div>
              
              <img className="imgLogo" src={logo13} alt='Panther Protocol' />

              </div>
              </Col>

              <Col>
              <div>   
                <img className="imgLogo" src={logo14} alt='Panther Protocol' />
              </div>
              </Col>

              <Col>
              <div style={{background:'#030619'}}>
                <img style={{mixBlendMode:'screen'}} className="imgLogo" src={logo15} alt='Panther Protocol' />
              </div>
              </Col>
            

      


              </Marquee>
            </Row>
           
        </div>
    </PartnerWrapper>
    </>
  )
}

export default Partners