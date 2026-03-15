import { Col, Row } from 'antd'
import React, {useState, useRef} from 'react'
import BlogWrapper from './Styles/BlogStyle'
import BlogCard from '../../SharedComponent/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Keyboard, Navigation } from "swiper";
import arrowGreen from '../../../assets/Images/arrowGreen.svg'
import leftArrow from '../../../assets/Images/leftArrow.svg'
import BlogData from '../../../BlogData';
import styled from 'styled-components'



// eslint-disable-next-line no-unused-vars
const LeftGrad = styled.div`
position:absolute;
height:120%;
width:65%;
opacity:0.3;
background:radial-gradient(circle at center, rgba(34, 36, 80, 1) 0, rgba(34, 36, 80, 0.5) 50%, rgba(34, 36, 80, 0)100%);
filter:blur(100px);
top:-20%;
z-index:1;
overflow:hidden;
left:-30%;

img{
    width:100%;
    height:100%;
}

@media screen and (min-width: 768px)and (max-width: 1050px) {
  top:-20%;
  width:65%;
  height:150%;
  opacity:0.3;
  left:-10%;

  // opacity:1;
}

@media screen and (min-width: 451px)and (max-width: 767px) {
  top:-50%;
  width:65%;
  height:200%;
  opacity:0.3;

  // opacity:1;
  left:-10%;

}

@media screen and (max-width: 451px) {
  top:-50%;
  width:65%;
  height:200%;
  opacity:0.3;
  left:-10%;
  // opacity:1;
}

`

const BlogSection = () => {
  const swiperRef = useRef();
  const [reachEnd, setReachEnd] = useState(false)
  const [reachBegin, setReachBegin] = useState(true)

  return (
    <div className='relative'>
      {/* <LeftGrad className='left-grad'>
     
    </LeftGrad> */}
    <BlogWrapper>
        <div className='container'>
            <Row className="blog-head">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h4>Latest news from Panther</h4>
                </Col>
            </Row>

<div  data-aos-once='true'  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="100" data-aos-delay="100" data-aos-duration="250">
            <Row  style={{position:"relative"}}>
           
              <Swiper 
                slidesPerGroup={3}
                slidesPerView={3}
                spaceBetween={30}
                onReachEnd={()=>{setReachEnd(true)}}
                onRealIndexChange = {()=>{
                  if(swiperRef.current.activeIndex>0){
                    setReachBegin(false)
                  }
                  
                  if(window.screen.availWidth > 995){
                    if(swiperRef.current.activeIndex < 6){
                      setReachEnd(false)
                    }
                  } else if(window.screen.availWidth <= 995 && window.screen.availWidth>= 700){
                    if(swiperRef.current.activeIndex < 7){
                      setReachEnd(false)
                    }
                  } else if(window.screen.availWidth < 700){
                    if(swiperRef.current.activeIndex < 8){
                      setReachEnd(false)
                    }
                  }
              
                    
                }}
                onReachBeginning={()=>{setReachBegin(true)}}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}

                pagination={{
                  clickable: true,
                }}

                keyboard={{
                  enabled: true,
                }}
   
                modules={[Pagination, Keyboard, Navigation]}
                breakpoints={{

                  280: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup:1
                  },

                  421: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup:1
                  },

                  450:{
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    slidesPerGroup:1,
                    
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup:2,
                  
                  },
                  996: {
                   
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup:3,
                  },

                  1191: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup:3,
                  },

               
                }}
                className="mySwiper"
                >

                  {BlogData?.map((item)=>{
                    return <SwiperSlide key={item.id}><BlogCard item={item} /></SwiperSlide>
                  })}
                
            
              </Swiper>
           
              <a className='read_more' target='_blank' rel="nofollow noopener noreferrer" href="https://blog.pantherprotocol.io/"><p><span>Visit our blog</span>  <img  width="15px" height="21px" src={arrowGreen} alt='Arrow Right - Panther Protocol' /></p></a>
            </Row>

            <div className='slider-btn' >
                <div>
                  <img 
                  width="15px" height="21px"
                   style={{opacity: reachBegin ? '0.2' : '1'}}
                   className=' slide-left' 
                   onClick={() => {
                    swiperRef.current?.slidePrev()
                    return false;
                  }}
                   src={leftArrow} alt='Left Arrow'
                  />
                  <img 
                   width="15px" height="21px"
                  style={{opacity: reachEnd? '0.2' : '1'}}
                  className=' slide-right' 
                  onClick={() => {
                    swiperRef.current?.slideNext()
                    return false;
                  }}
                  src={arrowGreen} alt='Right Arrow'
                  /></div>
              </div>
        </div>

        </div>
    </BlogWrapper>

    </div>
  )
}

export default BlogSection