import React from 'react'
import SCWrapper from './Styles/SCStyle'
import logo11 from '../../../assets/Images/certik.svg'
import logo12 from '../../../assets/Images/analytics.svg'
import logo13 from '../../../assets/Images/veridise.svg'
import arrowRight from '../../../assets/Images/ar-right.svg'
import { Row, Col } from 'antd'



const SCAudit = () => {


  return (
    <div className='relative'> 
    <SCWrapper>
      <div className='container'>
            <h4>Smart Contract Audits</h4>
            
            
            <Row gutter={[12,12]} className='audit-sec'>

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-duration="200" data-aos-offset="-170" data-aos-anchor-placement="top-center" xs={24} sm={12} md={12} lg={6} xl={6}>
                <div className='sec-card' >
                <div className='sec-overlay'>
                <a target="_blank" rel="noopener noreferrer" href='/resources/REP-Panther-ZKP-Token.pdf'>
                        <div className='sec-layer'>
                        <img height="40px" width="166px" src={logo11} alt='Panther Protocol' />
                        <h5><span>Panther ZKP Token Audit </span> <img height="12px" width="12px" src={arrowRight} alt='Panther Protocol' /> </h5>
                        </div>
                        </a>
                        </div>
                 </div>  
                </Col>
                
                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-duration="200" data-aos-offset="-170" data-aos-delay="200" data-aos-anchor-placement="top-center" xs={24} sm={12} md={12} lg={6} xl={6}>
                <div className='sec-card' > 
                <div className='sec-overlay'>
                <a target="_blank" rel="noopener noreferrer" href='/resources/Panther_v0.5_Audit .pdf'>
                        <div className='sec-layer'>
                        <img height="40px" width="215px" src={logo12} alt='Panther Protocol' />
                        <h5><span>Panther v0.5 Audit </span> <img  height="12px" width="12px" src={arrowRight} alt='Panther Protocol' /> </h5>
                        </div>
                        </a>
                        </div>
                    </div>

                </Col>

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-duration="200" data-aos-offset="-170"  data-aos-delay="400" data-aos-anchor-placement="top-center" xs={24} sm={12} md={12} lg={6} xl={6}>
                <div className='sec-card' >
                <div className='sec-overlay'>
                <a target="_blank" rel="noopener noreferrer" href='/resources/REP-Panther-ZKP-Vesting.pdf'>
                        <div className='sec-layer'>
                        <img height="40px" width="166px" src={logo11} alt='Panther Protocol' />
                        <h5><span>Panther ZKP Vesting Audit</span> <img  height="12px" width="12px" src={arrowRight} alt='Panther Protocol' /> </h5>
                        </div>
                        </a>
                        </div>
                  </div> 
                </Col> 

                <Col  data-aos-once='true'  data-aos="fade-up" data-aos-duration="200" data-aos-offset="-170"  data-aos-delay="400" data-aos-anchor-placement="top-center" xs={24} sm={12} md={12} lg={6} xl={6}>
                <div className='sec-card'  >
                <div className='sec-overlay' style={{cursor:'not-allowed'}}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" style={{ cursor: 'not-allowed', pointerEvents: 'none', color: 'gray' }}>
                    <div className='sec-layer'>
                        <img height="36px" width="155px" src={logo13} alt='Panther Protocol' />
                        <h5><span>Panther Veridise Audit</span> <img  height="12px" width="12px" src={arrowRight} alt='Panther Protocol' /> </h5>
                        </div>
                        </a>
                        </div>
                  </div> 
                </Col> 

            </Row>

            
            </div>
    </SCWrapper>
    </div>
  )
}

export default SCAudit