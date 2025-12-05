import React, {useState} from 'react'
import NewsWrapper from './Styles/NewsletterStyle'
import arrowRight from '../../../assets/Images/arrowRightW.svg'
import footerVideo from '../../../assets/Footer/Footer.mp4'
import footerVideo0 from '../../../assets/Footer/Footer.webm'
import footerVideom from '../../../assets/Footer/Footerm.mp4'

import { Spin } from 'antd';
import axios from 'axios';
import API_URL from '../../../config';
import styled from 'styled-components'


const BottomGradient = styled.div`
position:absolute;
width:100%;
display:flex;
justify-content:center;
max-height:150%;
bottom:-50%;

video{
  width:auto;
  height:auto;
  object-fit:cover;
  mix-blend-mode:exclusion;
  // background: #030619;
}

//   ::before{
//     content:'';
//     position:absolute;
//     z-index: 0;
//     background: #030619;
//     width:auto;
//     height:auto;
// }

@media screen and (min-width: 1700px){

}


@media screen and (min-width: 1191px)and (max-width: 1450px) {


}



@media screen and (min-width: 992px)and (max-width: 1191px) {}


@media screen and (min-width: 767px)and (max-width: 992px) {}


@media screen and (min-width: 451px)and (max-width: 767px) {
video{
  object-fit:contain;
}
}


@media screen and (max-width: 451px){
video{
  object-fit:contain;
}
}






`

const NewsletterSec = () => {
  const [email, setEmail] = useState('')
  const [emailValid, setValidEmail] = useState(null)
  const [validText, setValidText] = useState('l')
  const [loader, setLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { userEmail: email }

    const  pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
      setValidEmail(true)
      const submitForm = async()=>{
        setLoader(true)
        try {
          const res = await axios.post(`${API_URL}/subscribe`, user)
          if(res.status === 200){
            setValidEmail(true);
            setValidText("Thank You for Subscribing, Successfully Subscribed !")
            setEmail("")
            setLoader(false)
            setTimeout(()=>{
              setValidEmail(null);
              setValidText("l");
            }, 5000)


          } else if(res.status === 201){
            setValidEmail(true);
            setValidText("User with this email already exists")
            setEmail("")
            setLoader(false)
            setTimeout(()=>{
              setValidEmail(null);
              setValidText("l");
            }, 5000)
          }else{
            setValidEmail(false);
            setLoader(false)
            setValidText("Some Error Occured, Please Try Again !");
            setTimeout(()=>{
              setValidEmail(null);
              setValidText("l")
            }, 5000)
          }         

        } catch (e) {
          setValidEmail(false);
          setLoader(false)
            setValidText("Some Error Occured, Please Try Again !");
            setTimeout(()=>{
              setValidEmail(null);
              setValidText("l")
            }, 5000)
        }
      }
      submitForm()

    } else {
      setValidEmail(false);
      setValidText("Please Enter Valid Email Address !")
      setTimeout(()=>{
        setValidEmail(null);
        setValidText("l")
      }, 5000)
    }


   
  
 
  }


  const handleChange = (e)=>{
    setEmail(e.target.value)
  }

 

  return (<div style={{position:'relative'}}>
    <NewsWrapper>
        <div className='container'>
           <h4>Stay in the loop</h4>
           <p>Sign up for our newsletter to be the first to learn about product development, blog posts, and other updates.</p>

           <form className='form-cta'>
             <input required  type="email" onChange={ handleChange } value={email} name="EMAIL"  placeholder='Your email address' />
            
            {loader 
            ? <div style={{marginRight:'1rem',height:'45px', display:"flex", alignItems:'center', paddingTop:'0.5rem'}}><Spin /> </div>
            : <button  type='submit' onClick={handleSubmit} className='button'><svg className='btn-svg'  width="185" height="56" viewBox="0 0 185 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_95_154)">
            <rect x="0.209229" y="0.426819" width="184.534" height="54.9146" rx="15" fill="#D9D9D9" fillOpacity="0.05"/>
            <rect x="1.65708" y="1.87467" width="181.638" height="52.0189" rx="15" stroke="url(#paint0_linear_95_154)" strokeWidth="2.8957"/>
            </g>
            <defs>
            <filter id="filter0_b_95_154" x="-143.97" y="-143.753" width="472.894" height="343.274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="72.0899"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_95_154"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_95_154" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_95_154" x1="14.7407" y1="15.5988" x2="172.017" y2="20.2665" gradientUnits="userSpaceOnUse">
            <stop stopColor="#87F9C2"/>
            <stop offset="1" stopColor="#6BB1D9"/>
            </linearGradient>
            </defs>
            </svg>
            <span>Sign Up  <img  width="10px" height="14px" src={arrowRight} alt='Panther Protocol' /></span>
            </button>
               }
           </form>

          {emailValid  === true 
          ? <h6 data-aos="fade-up" data-aos-duration="200"  data-aos-delay="100" style={{color:"#7AD8CD"}}> {validText} </h6>
          : emailValid  === false 
          ? <h6 data-aos="fade-up" data-aos-duration="200"  data-aos-delay="100" style={{color:"red"}}> {validText}  </h6>
          : <h6 data-aos="fade-up" data-aos-duration="200"  data-aos-delay="100" style={{color:"transparent", opacity:"0"}}>{validText}</h6>
          }

        </div>

    </NewsWrapper>

  
    <BottomGradient>

            <video className='videoPlay' autoPlay muted playsInline loop>
                <source src={footerVideo} type='video/mp4; codecs="hvc1"' />  
                 <source src={footerVideo0} type="video/webm" /> 
                 <source src={footerVideom} type="video/mp4" /> 
                  Your browser does not support the <code>video</code> element.
            </video>

    </BottomGradient>
    </div>
  )
}

export default NewsletterSec