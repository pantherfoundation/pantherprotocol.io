import { Col, Row } from 'antd'
import React, { useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Wrapper from './Styles/HowItWorksStyle'
import step0 from '../../../assets/Images/step0.svg'
import step1 from '../../../assets/Images/step1.svg'
import step2 from '../../../assets/Images/step2.svg'
import step3 from '../../../assets/Images/step3.svg'
import step4 from '../../../assets/Images/step4.svg'
import step5 from '../../../assets/Images/step5.svg'

import arrowGreen from '../../../assets/Images/arrowGreen.svg'
import leftArrow from '../../../assets/Images/leftArrow.svg'
import styled from 'styled-components'

import video1 from '../../../assets/hiw/animations_new/01/video1.webm'
import videos1 from '../../../assets/hiw/animations_new/01/video1.mp4'
import video01 from '../../../assets/hiw/animations_new/01/video1m.mp4'

import video2 from '../../../assets/hiw/animations_new/02/video2.webm'
import videos2 from '../../../assets/hiw/animations_new/02/video2.mp4'
import video02 from '../../../assets/hiw/animations_new/02/video2m.mp4'

import video3 from '../../../assets/hiw/animations_new/03/video3.webm'
import videos3 from '../../../assets/hiw/animations_new/03/video3.mp4'
import video03 from '../../../assets/hiw/animations_new/03/video3m.mp4'

import video4 from '../../../assets/hiw/animations_new/04/video4.webm'
import videos4 from '../../../assets/hiw/animations_new/04/video4.mp4'
import video04 from '../../../assets/hiw/animations_new/04/video4m.mp4'

import video5 from '../../../assets/hiw/animations_new/05/video5.webm'
import videos5 from '../../../assets/hiw/animations_new/05/video5.mp4'
import video05 from '../../../assets/hiw/animations_new/05/video5m.mp4'


const LeftGrad = styled.div`
position:absolute;
height:60%;
width:65%;
opacity:0.3;
background:radial-gradient(ellipse at center, rgba(34, 36, 80, 1) 0, rgba(34, 36, 80, 0.5) 50%, rgba(34, 36, 80, 0)100%);
filter:blur(100px);
bottom:-20%;
z-index:1;
overflow:hidden;
left:-30%;



img{
    width:100%;
    height:100%;
}

@media screen and (min-width: 768px)and (max-width: 1050px) {
  top:25%;
  height:100%;
  width:65%;
  left:-10%;
  opacity:0.3;

  // opacity:1;
}

@media screen and (min-width: 451px)and (max-width: 767px) {
  top:35%;
  height:100%;
  width:65%;
  opacity:0.3;
  left:-10%;

  // opacity:1;
}

@media screen and (max-width: 451px) {
  top:35%;
  width:65%;
  height:100%;
  left:-10%;
  opacity:0.3;
  // opacity:1;
}

`

const RightGrad = styled.div`

position:absolute;
height:60%;
width:62%;
opacity:0.3;
background:radial-gradient(circle at center, rgba(34, 36, 80, 1) 0, rgba(34, 36, 80, 0.5) 50%, rgba(34, 36, 80, 0)100%);
filter:blur(100px);
bottom:30%;
right:-30%;
z-index:1;
overflow:hidden;




// position:absolute;
// right:-15%;
// z-index:1;
// transform: translate3d(0, 0, -100px);
// opacity:1;
// top:-15%;
// overflow-x:hidden;




img{
    width:100%;
    height:100%;
}


@media screen and (min-width: 768px)and (max-width: 1050px) {
  top:-20%;
  width:65%;
  height:100%;
  right:-10%;
  opacity:0.3;
  // opacity:1;
}

@media screen and (min-width: 451px)and (max-width: 767px) {
  top:-20%;
  width:65%;
  right:-10%;
  opacity:0.3;
  height:100%;
  // opacity:1;
}

@media screen and (max-width: 451px) {
  top:-30%;
  width:65%;
  height:100%;
  right:-10%;
  opacity:0.3;
  // opacity:1;
}


`

const HowItWorks = () => {
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

    // useEffect(()=>{   
    //   Object.defineProperty(HTMLMediaElement.prototype, 'playing2', {
    //     get: function () {
    //         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    //     }
    // });
    // }, [])


  return (
    <Wrapper>
        <div className='container'> 
            <h4 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-220" data-aos-duration="100" >Get started</h4>
            <h3 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-offset="-220" data-aos-duration="100" data-aos-delay="100">How it works</h3>
        </div>

<div className='container'>
    <Row className='works_container  reverse-resp'>

         <Col className='box_container' xs={24} sm={24} md={24} lg={12} xl={12} 
         data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="250" data-aos-offset="-200"  data-aos-easing="ease-in-sine"
         >
          <div>
             <motion.div
              initial={{ x:"-30%", opacity:0 }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"-30%", opacity:0}}
              viewport={{ once: true }}
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
              >
                     <h2>Shield Your Assets</h2>
                     <p>Deposit your assets into Panther to use 1:1 collateralized shielded assets called <strong>zAssets</strong>.</p>
                     <ul>
                         <li data-aos="fade-right"  data-aos-delay="100" data-aos-duration="200"  data-aos-easing="linear">Store multiple asset types in Panther Pools.</li>
                         <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="200"  data-aos-easing="linear">Protect your on-chain data with zero-knowledge proofs</li>
                     </ul>
             </motion.div>
             </div>
         </Col>

         <Col  className='works_img ' xs={24} sm={24} md={24} lg={12} xl={12} 
         data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="350" data-aos-offset="-200" data-aos-easing="ease-in-sine"
         >
             {/* <div > */}
             <motion.div
              initial={{ x: "30%", opacity:0 }}
              whileInView={{x:"0%", opacity:1}}
              viewport={{ once: true }}
              exit={{x:"30%", opacity:0}}
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
               className='img1 '>

              <video className='video-size videoPlay'  autoPlay muted loop playsInline style={{mixBlendMode:"lighten"}}> 
                 <source src={videos1} type='video/mp4; codecs="hvc1"' />  
                 <source src={video1} type="video/webm" /> 
                 <source src={video01} type="video/mp4" /> 
                    Your browser does not support the <code>video</code> element.
              </video>

                </motion.div>
                {/* </div> */}
         </Col>

        {/* <RightGrad> */}
          {/* <picture>
            <source srcSet={RightOneGrad} type="image/avif" />
            <img src={RightOneGrad0} alt='Panther Protocol'  />
          </picture> */}
        {/* </RightGrad> */}
     </Row>
     </div>
     <div className='h-500 container'>
     <Row  className='works_container container  '>
     <AnimatePresence mode='wait'>
        <Col key={slide}  className='works_img ' xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-right" data-aos-anchor-placement="top-center"  data-aos-duration="350" data-aos-offset="-225" data-aos-easing="ease-in-sine">
        <div >
            {slide === 0 && <motion.div  
              initial={{ x: "-30%", opacity:0 }}
              viewport={{ once: true }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"-30%", opacity:0}}
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
              className='img2'>
                   <video className='video-size2 videoPlay left'  autoPlay muted loop playsInline style={{mixBlendMode:"lighten"}}> 
                 <source src={videos2} type='video/mp4; codecs="hvc1"' />  
                 <source src={video2} type="video/webm" /> 
                 <source src={video02} type="video/mp4" /> 
                    Your browser does not support the <code>video</code> element.
              </video>

                </motion.div>}
            {slide === 1 && <motion.div 
               initial={{ x: "-30%", opacity:0 }}
               viewport={{ once: true }}
               onAnimationComplete={ ()=>videoPlay()}
               whileInView={{x:"0%", opacity:1}}
               exit={{x:"-30%", opacity:0}}
               transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
               className='img2 '>
                  <video className='video-size2 videoPlay left videoPlayFix' autoPlay  muted loop playsInline style={{mixBlendMode:"lighten"}}> 
                 <source src={videos3} type='video/mp4; codecs="hvc1"' />  
                 <source src={video3} type="video/webm" /> 
                 <source src={video03} type="video/mp4" /> 
                    Your browser does not support the <code>video</code> element.
              </video>

                </motion.div>}
            {slide === 2 && <motion.div 
               initial={{ x: "-30%", opacity:0 }}
               viewport={{ once: true }}
               onAnimationComplete={ ()=>videoPlay()}
               whileInView={{x:"0%", opacity:1}}
               exit={{x:"-30%", opacity:0}}
               transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
              className='img2 '>
                    <video className='video-size2 videoPlay left videoPlayFix' autoPlay  muted loop playsInline style={{mixBlendMode:"lighten"}}> 
                 <source src={videos4} type='video/mp4; codecs="hvc1"' />  
                 <source src={video4} type="video/webm" /> 
                 <source src={video04} type="video/mp4" /> 
                    Your browser does not support the <code>video</code> element.
              </video>
                </motion.div>}
          </div>
         </Col>

</AnimatePresence>
         <Col className='box_container btn-container' xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-left"  data-aos-anchor-placement="top-center" data-aos-duration="350" data-aos-offset="-225"  data-aos-easing="ease-in-sine">  
            <div className='steps-container' >
                <img width="15px" height="21px" onClick={slideLeft} className='as-left' src={leftArrow} alt='Slide Left' />
                <img width="51px" height="51px" onClick={()=>{
                  setSlide(0)
                  videoPlay()
                  }} src={slide===0 ? step2 : step3}  alt='Panther Protocol' />
                <img width="51px" height="51px"  onClick={()=>{
                    
                    setSlide(1)
                    videoPlay() 
                    }} src={slide===1 ? step4 : step0} alt='Panther Protocol' />

                <img width="51px" height="51px"  onClick={()=>{
                    setSlide(2)
                    videoPlay()}} src={slide===2 ? step5 : step1} alt='Panther Protocol' />

                <img width="15px" height="21px"  onClick={slideRight} className='as-right' src={arrowGreen} alt='Slide Right' />
            </div>

            <AnimatePresence mode='wait'>
            <div key={slide} className='step2' 
            // data-aos="fade-left"  data-aos-anchor-placement="top-center" data-aos-duration="350" data-aos-offset="-250"  data-aos-easing="ease-in-sine"
            >
            

            { 
            slide===0 &&  
            <motion.div 
              initial={{ x: "30%", opacity:0 }}
              whileInView={{x:"0%", opacity:1}}
              exit={{x:"30%", opacity:0}}
              viewport={{ once: true }}
              transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                <h2>Use DeFi Adaptors</h2>
                <p>Interact with the most popular DeFi dApps and protocols directly from Panther.</p>
                    <ul>
                      <li data-aos="fade-left" data-aos-delay="100" data-aos-duration="150"   data-aos-easing="linear">One-click swaps on DEXs</li>
                      <li data-aos="fade-left" data-aos-delay="250" data-aos-duration="150"  data-aos-easing="linear">Interact with NFT marketplaces</li>
                      <li data-aos="fade-left" data-aos-delay="400" data-aos-duration="150"  data-aos-easing="linear">Lending/borrowing markets</li>
                    </ul>
             </motion.div>
             }

            { 
            slide===1 &&  
            <motion.div   initial={{ x: "30%", opacity:0 }}
            whileInView={{x:"0%", opacity:1}}
            viewport={{ once: true }}
            exit={{x:"30%", opacity:0}}
            transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                <h2>zTrade with others</h2>
                <p>Swap your zAssets within your zAccount.</p>
                <ul>
                    <li 
                    data-aos="fade-left" data-aos-delay="100" data-aos-duration="200"  data-aos-offset="50" data-aos-easing="linear"
                    >OTC-style trading</li>
                </ul>
             </motion.div>
             }

            { 
            slide===2 &&  
            <motion.div 
            initial={{ x: "30%", opacity:0 }}
            whileInView={{x:"0%", opacity:1}}
            viewport={{ once: true }}

            exit={{x:"30%", opacity:0}}
            transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
            >
                <h2>Transact privately</h2>
                <p>Execute zero-knowledge transactions within Panther, and withdraw to any address</p>
                <ul>
                    <li 
                    data-aos="fade-left"  data-aos-delay="100" data-aos-duration="150"  data-aos-easing="linear"
                    >Transact with regular tokens and NFTs
                    </li>
                    <li 
                    data-aos="fade-left"  data-aos-delay="250" data-aos-duration="150"  data-aos-offset="50" data-aos-easing="linear"
                    >Staking contracts</li>
                    <li 
                    data-aos="fade-left" data-aos-delay="400" data-aos-duration="150"  data-aos-offset="50" data-aos-easing="linear"
                    >Conduct tokens vesting and distributions</li>
                    {/* <li 
                    data-aos="fade-left" data-aos-delay="550" data-aos-duration="150"  data-aos-offset="50" data-aos-easing="linear"
                    >Private vesting & token distributions</li> */}
                 
                </ul>
             </motion.div>
             }
           </div>
           </AnimatePresence>
         </Col>
       
     </Row>
     </div>

     <div className='container'>
     <Row className='works_container container reverse-resp'>
 
         <Col   className='box_container' xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-duration="350" data-aos-offset="-150"  data-aos-easing="ease-in-sine">
          <div  >
             <motion.div 
                 initial={{ x: "-30%", opacity:0 }}
                 viewport={{ once: true }}
                 whileInView={{x:"0%", opacity:1}}
                 exit={{x:"-30%", opacity:0}}
                 transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}>

                     <h2>Earn Rewards</h2>
                     <p>By using Panther, you’re providing others with privacy. Panther rewards you in $ZKP for your zero-knowledge activity!</p>
                     <ul>
                        <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="200" data-aos-easing="linear">Earn Rewards for depositing and transacting within Panther</li>
                        <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="200" data-aos-easing="linear">Pay for relayer fees in $ZKP</li>
                     </ul>
             </motion.div>
             </div>
         </Col>

         <Col className='works_img' xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="350" data-aos-offset="-150" data-aos-easing="ease-in-sine">
            <div >
             <motion.div 
                 viewport={{ once: true }}
                 initial={{ x: "30%", opacity:0 }}
                 whileInView={{x:"0%", opacity:1}}
                 exit={{x:"30%", opacity:0}}
                 transition={{ type:"tween", duration: 0.4, ease: "easeOut"}}
                 className='img1 img5'
           
                 >
                  <video className='video-size videoPlay'  autoPlay muted loop playsInline style={{mixBlendMode:"lighten"}}> 
                 <source src={videos5} type='video/mp4; codecs="hvc1"' />  
                 <source src={video5} type="video/webm" /> 
                 <source src={video05} type="video/mp4" /> 
                    Your browser does not support the <code>video</code> element.
              </video>
                  </motion.div>
                  </div>
         </Col>

         {/* <LeftGrad> */}
            {/* <picture>
              <source srcSet={LeftOneGrad} type="image/avif" />
              <img src={LeftOneGrad0} alt='Panther Protocol'  />
            </picture> */}
          {/* </LeftGrad> */}
     </Row>

</div>

    </Wrapper>
  )
}

export default HowItWorks