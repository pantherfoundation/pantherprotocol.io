import Wrapper from './Styles/hiw'
import { Col, Row } from 'antd'
import React, { useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'



import hiw_new1 from '../../../assets/Images/hiw_new1.svg'


import video2 from '../../../assets/hiw/animations_new/02/video2.webm'
import videos2 from '../../../assets/hiw/animations_new/02/video2.mp4'
import video02 from '../../../assets/hiw/animations_new/02/video2m.mp4'

import video3 from '../../../assets/hiw/animations_new/03/video3.webm'
import videos3 from '../../../assets/hiw/animations_new/03/video3.mp4'
import video03 from '../../../assets/hiw/animations_new/03/video3m.mp4'

import video4 from '../../../assets/hiw/animations_new/04/video4.webm'
import videos4 from '../../../assets/hiw/animations_new/04/video4.mp4'
import video04 from '../../../assets/hiw/animations_new/04/video4m.mp4'


const Hiw = () => {
    const [slide, setSlide ] = useState(0)
    const slideLeft = ()=>{
      videoPlay()

      if(slide>0){
        setSlide(slide-1)
      } else if(slide===0){
        setSlide(2)
      }
      return false;
    }

    const videoPlay = ()=>{
      let videoPlay = document.getElementsByClassName("videoPlayFix")
      let videoArray = Object.keys(videoPlay).map((k) => videoPlay[k])

      

    videoArray?.map((video)=>{
      if(video.playing){
        return;
      } else {
        video.play()
        
      }
    })
    }

    const slideRight = ()=>{
      videoPlay()
      if(slide<2){
        setSlide(slide+1)
      } else if(slide === 2){
        setSlide(0)
      }

      return false;
    }


  return (
    <Wrapper>
         <div className='container'> 
         <h4>Why Panther for Enterprise?</h4>
          <h3>Panther will provide licensed service providers with:</h3>
        </div>

        <div className='container'>
        <Row className='works_container mt5 reverse-resp'>
            <Col className='box-container pr-5' xs={24} sm={24} md={24} lg={12} xl={12} 
            // data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="250" data-aos-offset="-200"  data-aos-easing="ease-in-sine"
            >
            <motion.div
              initial={{ x:"-30%", opacity:0 }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"-30%", opacity:0}}
              viewport={{ once: true }}
              className='text-work1'
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                    
                    <h2>Smart Compliance toolset</h2>
                     <p>Includes KYC, KYT and KYB support, custom rules and limits for each trading Zone, real-time transaction monitoring.</p>
             </motion.div>

            </Col>
            <Col className='img_work' xs={24} sm={24} md={24} lg={12} xl={12} >

            <div className='img_container'>

                <motion.div 
                initial={{ x: "30%", opacity:0 }}
                whileInView={{x:"0%", opacity:1}}
                viewport={{ once: true }}
                exit={{x:"30%", opacity:0}}
                transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
                className='img1'  

                > 
                    <img style={{width:'100%'}} src={hiw_new1}  alt='' />
                </motion.div>
              </div>
            </Col>
        </Row>
        </div>


        <div className='container'>
        <Row className='works_container mt5'>
         
            <Col className='img_work' xs={24} sm={24} md={24} lg={12} xl={12} >
            <div className='img_container'>
            <motion.video 
                     initial={{ x: "-30%", opacity:0 }}
                     viewport={{ once: true }}
                     whileInView={{x:"0%", opacity:1}}
                     exit={{x:"-30%", opacity:0}}
                     transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
                    className='video-size videoPlay img10 '   autoPlay muted loop playsInline 
                    style={{
                    mixBlendMode:"lighten"
                    
                    }}> 
                        <source src={videos2} type='video/mp4; codecs="hvc1"' />  
                        <source src={video2} type="video/webm" /> 
                        <source src={video02} type="video/mp4" /> 
                            Your browser does not support the <code>video</code> element.
                    </motion.video>
              </div>
             
            </Col>

            <Col className='box-container' xs={24} sm={24} md={24} lg={12} xl={12} 
            // data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="250" data-aos-offset="-200"  data-aos-easing="ease-in-sine"
            >
                   <div className='step2 '>
            <motion.div
               initial={{ x: "30%", opacity:0 }}
               viewport={{ once: true }}
               whileInView={{x:"0%", opacity:1}}
               exit={{x:"30%", opacity:0}}
              className='text-work1'
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                     <h2>Direct access to top DEXs</h2>
                     <p>Uniswap, Quickswap, Curve, and others.</p>
             </motion.div>
          </div>
            </Col>

        </Row>
        </div>








        <div className='container'>
        <Row className='works_container mt5 reverse-resp'>
            <Col className='box-container pr-5' xs={24} sm={24} md={24} lg={12} xl={12} 
            // data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="250" data-aos-offset="-200"  data-aos-easing="ease-in-sine"
            >
            <motion.div
              initial={{ x:"-30%", opacity:0 }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"-30%", opacity:0}}
              viewport={{ once: true }}
              className='text-work1'
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                    
                    <h2>P2P & OTC Transactions</h2>
                     <p>Secure and private OTC environment enabling P2P atomic swaps without centralized intermediary.</p>
             </motion.div>

            </Col>
            <Col className='img_work' xs={24} sm={24} md={24} lg={12} xl={12} >

            <div className='img_container'>



                <motion.video 
                    initial={{ x: "30%", opacity:0 }}
                     viewport={{ once: true }}
                     whileInView={{x:"0%", opacity:1}}
                     exit={{x:"30%", opacity:0}}
                     transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
                    className='video-size videoPlay img1'   autoPlay muted loop playsInline 
                    style={{
                    mixBlendMode:"lighten"
                    
                    }}> 
                        <source src={videos3} type='video/mp4; codecs="hvc1"' />  
                        <source src={video3} type="video/webm" /> 
                        <source src={video03} type="video/mp4" /> 
                            Your browser does not support the <code>video</code> element.
                    </motion.video>

              </div>
            </Col>
        </Row>
        </div>




        <div className='container'>
        <Row className='works_container mt5'>
         
            <Col className='img_work' xs={24} sm={24} md={24} lg={12} xl={12} >
            <div className='img_container'>
            <motion.video 
                     initial={{ x:"-30%", opacity:0 }}
                     whileInView={{x:"0%", opacity:1}}
                     exit={{x:"-30%", opacity:0}}
                     viewport={{ once: true }}
                     transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
                    className='video-size videoPlay img10 '   autoPlay muted loop playsInline 
                    style={{
                    mixBlendMode:"lighten"
                    
                    }}> 
                        <source src={videos4} type='video/mp4; codecs="hvc1"' />  
                        <source src={video4} type="video/webm" /> 
                        <source src={video04} type="video/mp4" /> 
                            Your browser does not support the <code>video</code> element.
                    </motion.video>
              </div>
             
            </Col>

            <Col className='box-container' xs={24} sm={24} md={24} lg={12} xl={12} 
            // data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="250" data-aos-offset="-200"  data-aos-easing="ease-in-sine"
            >
                   <div className='step2 '>
            <motion.div
              initial={{ x: "30%", opacity:0 }}
              viewport={{ once: true }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"30%", opacity:0}}
              className='text-work1'
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                     <h2>Preserve the confidentiality of your transactions</h2>
                     <p>Execute transactions within Zones, allow users to withdraw to any address, transact with regular tokens and NFTs, stake and manage contracts, and conduct token vesting and distributions.</p>
             </motion.div>
          </div>
            </Col>

        </Row>
        </div>


    


    
    </Wrapper>
  )
}

export default Hiw