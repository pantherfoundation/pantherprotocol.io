import React, { useState, useRef } from 'react'
import HeroWrapper from './Styles/HeroStyle_new'
import LogoRolls from './LogoRolls'
import { Navbar } from '../../SharedComponent'
import { ROUTES } from '../../../routes/constRoutes'
import arrowRight from '../../../assets/Images/arrowRightW.svg'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  const [, setUpdate] = useState(true)

  const videoRef = useRef(null) // eslint-disable-line no-unused-vars

  const handleUpdate = (id)=>{
    if(id === true){
      setUpdate(false)
    }else{
      setUpdate(true)

    }
  }


  return (
    <div className='hero-bg_image'>
      {/* <div class="overlay_hero"></div> */}
       <Navbar updateValue={handleUpdate}  />  

        <HeroWrapper>
          <div className='container wd1'>
          <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="250" data-aos-delay="100">Building <span className='gradient-text'>confidential <span style={{whiteSpace:'nowrap'}}>on-chain</span> DeFi transaction</span>  infrastructure</h2>

            </div>
            
              <div className='wideContainer wd2'>
              
       <p
  data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-duration="300"
  data-aos-delay="300"
>
  Panther is building a modular solution for financial service providers to operate private trading Zones with customizable rules, defining the future of confidential on-chain finance.
</p>

<a
  href="https://pantherdao.app"
  target="_blank"
  rel="nofollow noopener noreferrer"
>
  <div
    className="glow-effects"
    data-aos="fade-up"
    data-aos-offset="-200"
    data-aos-easing="linear"
    data-aos-duration="300"
    data-aos-delay="600"
  >
    <button className="button" type="button">
      <svg
        className="btn-svg"
        width="226"
        height="61"
        viewBox="0 0 226 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_9_2218)">
          <rect
            x="0.12793"
            y="0.100098"
            width="223.5"
            height="61"
            rx="15"
            fill="#D9D9D9"
            fillOpacity="0.05"
          />
          <rect
            x="1.13213"
            y="1.1043"
            width="224"
            height="59"
            rx="14"
            stroke="url(#paint0_linear_9_2218)"
            strokeWidth="2.0084"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_9_2218"
            x="-99.8721"
            y="-99.8999"
            width="542"
            height="273"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_2218" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_2218" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_9_2218"
            x1="27.0593"
            y1="20.2688"
            x2="318.3"
            y2="32.3193"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#87F9C2" />
            <stop offset="1" stopColor="#6BB1D9" />
          </linearGradient>
        </defs>
      </svg>
      <span>
        Launch dApp{" "}
        <img
          width="10"
          height="14"
          src={arrowRight}
          alt="Arrow right"
        />
      </span>
    </button>
  </div>
</a>
      </HeroWrapper>
     
     <LogoRolls />
     </div>
  )
}

export default HeroSection
