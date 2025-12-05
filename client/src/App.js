import 'antd/dist/reset.css';
import "swiper/css";
import "swiper/css/pagination";
import AppRoutes from './routes/AppRoutes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {


useEffect(()=>{
  AOS.init();  
  // const script = document.createElement('script');
  // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JK9EPQYBN7';
  // script.async = true;
  // document.head.appendChild(script);

  // window.dataLayer = window.dataLayer || [];

  // function gtag(){
  //   window.dataLayer.push(arguments);
  // }
  // gtag('js', new Date());
  // gtag('config', 'G-JK9EPQYBN7');

 // return () => {
  //   // Cleanup: Remove the added script when the component unmounts
  //   document.head.removeChild(script);
  // };



}, [])

  return (
    <>
   <AppRoutes />
   </>

  )
}

export default App