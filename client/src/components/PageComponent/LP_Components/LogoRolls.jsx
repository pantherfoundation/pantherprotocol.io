import React from 'react'
import { Row, Col } from 'antd'
import RollsWrapper from './Styles/LogoRolls'
import Marquee from 'react-fast-marquee'
import logo1 from '../../../assets/Images/featured/reuters.svg'
import logo2 from '../../../assets/Images/featured/delphiDigital.svg'
import logo3 from '../../../assets/Images/featured/Messari.svg'
import logo4 from '../../../assets/Images/featured/Nasdaq.svg'
import logo5 from '../../../assets/Images/featured/Forbes.svg'
import logo6 from '../../../assets/Images/featured/greenfield.svg'
import logo7 from '../../../assets/Images/featured/theBlock.svg'
import logo8 from '../../../assets/Images/featured/CoinTelegraph.svg'
import logo9 from '../../../assets/Images/featured/Bloomberg.svg'
import logo10 from '../../../assets/Images/featured/AP.svg'
import logo11 from '../../../assets/Images/featured/BusinessInsider.svg'
import logo12 from '../../../assets/Images/featured/yahoofinance.svg'




const LogoRolls = () => {


  return (
    <RollsWrapper>
  <div className='container'>

    <div className='div'><p>Featured in</p></div>      
    <div >
        {/* <Row className='big-screens' gutter={[20,20]} style={{alignItems: 'center'}}>
            <Col data-aos="fade-up" data-aos-duration="300" data-aos-offset="0" data-aos-delay="300" xs={12} sm={8} md={8} lg={5} xl={5}>
            <div  >
                <img height='41px' width='161px'  className='partners_logo ethereum' src={ethereum} alt='' /></div>
            </Col>
            <Col  data-aos="fade-up" data-aos-duration="300" data-aos-offset="0" data-aos-delay="300" xs={12} sm={8} md={8} lg={5} xl={5}>
            <div  >
            <img  height="32px" width="148px" className=' partners_logo polygon' src={polygon} alt='' /></div>
            </Col>
            <Col data-aos="fade-up" data-aos-duration="300" data-aos-offset="0" data-aos-delay="300" xs={12} sm={8} md={8} lg={5} xl={5}>
            <div   >
            <img height="41px" width="127px" className='partners_logo flare' src={flare} alt='' /></div>
            </Col>
            <Col  data-aos="fade-up" data-aos-duration="300" data-aos-offset="0" data-aos-delay="300" xs={12} sm={8} md={8} lg={5} xl={5}>
            <div   >
            <img  height="34px" width="164px" className='partners_logo avalanche' src={avalanche} alt='' /></div>
            </Col>
            <Col data-aos="fade-up" data-aos-duration="300" data-aos-offset="0" data-aos-delay="300" xs={24} sm={8} md={8} lg={4} xl={4}>
            <div >
            <img height="52px" width="132px"  className='partners_logo near' src={near} alt='' /></div>
            </Col>
        </Row> */}

        <Row gutter={[80,40]} style={{alignItems: 'center'}}>
          <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={75}
          style={{maskImage:'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'}}
          >
            <Col> <div><img height='44px' width='155px'  className='partners_logo' src={logo1} alt='' /></div> </Col>
            <Col> <div><img height='36px' width='208px'  className='partners_logo' src={logo2} alt='' /></div> </Col>
            <Col> <div><img height='29px' width='141px'  className='partners_logo' src={logo3} alt='' /></div> </Col>
            <Col> <div><img height='36px' width='127px'  className='partners_logo' src={logo4} alt='' /></div> </Col>
            <Col> <div><img height='36px' width='141px'  className='partners_logo' src={logo5} alt='' /></div> </Col>
            <Col> <div><img height='50px' width='121px'  className='partners_logo' src={logo6} alt='' /></div> </Col>
            <Col> <div><img height='32px' width='215px'  className='partners_logo' src={logo7} alt='' /></div> </Col>
            <Col> <div><img height='50px' width='212px'  className='partners_logo' src={logo8} alt='' /></div> </Col>
            <Col> <div><img height='28px' width='143px'  className='partners_logo' src={logo9} alt='' /></div> </Col>
            <Col> <div><img height='45px' width='47px'  className='partners_logo' src={logo10} alt='' /></div> </Col>
            <Col> <div><img height='39px' width='110px'  className='partners_logo' src={logo11} alt='' /></div> </Col>
            <Col> <div><img height='40px' width='98px'  className='partners_logo' src={logo12} alt='' /></div> </Col>

            
            </Marquee>
        </Row>
    </div>  
     </div>
    </RollsWrapper>
  )
}

export default LogoRolls