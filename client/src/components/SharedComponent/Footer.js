import {Row, Col} from 'antd'
import FooterWrapper from './Styles/FooterStyles'
import pantherLogo from '../../assets/Images/PantherLogo.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constRoutes'
import discord from '../../assets/Images/discord.svg'
import tweet from '../../assets/Images/twitter.svg'
import github from '../../assets/Images/github.svg'
import telegram from '../../assets/Images/telegram.svg'
import linkedin from '../../assets/Images/linkedIn.svg'
import { useEffect, useState } from 'react'

const Footer = () => {

  const [year, setYear] = useState()

  useEffect(()=>{
    const date = new Date()
    let yr = date.getFullYear()
    setYear(yr)

  }, [])

  return (
    <>
    <FooterWrapper>

      <div> 
    
      </div>
      <div className='footer'>
        <div className='wideContainer'>
          <Row gutter={[30,30]}>
            <Col xs={24} sm={24} md={14} lg={16} xl={16}>
              <div className='ft-about'>
                <Link to={ROUTES.INDEX}><img height="50px" width="216px" src={pantherLogo} alt="Panther Protocol" /></Link>
                <p>Panther is developing a modular solution that will allow enterprises to operate confidential trading Zones with programmable rules.</p>
                <p>Panther Ventures Limited is a web3 software development company and is not authorized to provide financial services.</p>
              </div>

             
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
            <h3> Resources </h3>
              <ul className='ft-links'>
              <li><a target="_blank" rel="noopener" href="https://docs.pantherprotocol.io">Documentation</a></li>
              <li><a href="https://blog.pantherprotocol.io/" rel="nofollow noopener" target="_blank">Panther Blog</a></li>
                </ul>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
            <h3> Support </h3>
              <ul className='ft-links'>
                  <li><Link to={ROUTES.PRIVACY_POLICY}>Privacy Policy </Link></li>
                  <li><Link to={ROUTES.EMAIL_DISCLAIMER}>Terms of use</Link></li>
              </ul>
            </Col>
            
          </Row>
        
          <div className='bottom-footer'>
          <div className='social-media-links'>
            <a href='https://twitter.com/ZKPanther' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"  src={tweet} alt='Panther Protocol on Twitter' /></a>
            <a href='https://discord.com/invite/WZuRnMCZ4c' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"   src={discord} alt='Panther Protocol Server on Discord' /></a>
            <a href='https://t.me/joinchat/GJ64F-nRiIF86Cxn' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"  src={telegram} alt='Panther Protocol on Telegram' /></a>
            <a href='https://www.linkedin.com/company/zkpanther/' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={linkedin} alt='Panther Protocol on LinkedIn' /></a>
            <a href='https://github.com/pantherprotocol/panther-core' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={github} alt='Panther Protocol on GitHub' /></a>
            </div>
            <p className='btm-footer'>© {year} Panther Ventures Limited. All Rights Reserved.</p>
        </div>
       
         
        </div>
      </div>

    </FooterWrapper>
    </>
  )
}

export default Footer