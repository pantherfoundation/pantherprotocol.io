import { useState ,useEffect,lazy , Suspense} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import { ROUTES } from './constRoutes'
// import { PrivacyPolicy, EmailDisclaimer, RoadMap, ErrorPage,InstitutionalPage} from '../pages'
import SharedLayout from '../components/SharedLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Modal } from 'antd';
import TagManager from 'react-gtm-module';
import CookieConsent from "react-cookie-consent";
import Cookies from 'universal-cookie';

const LandingPage = lazy(()=>import('../pages/LandingPage'));
const PrivacyPolicy = lazy(()=>import('../pages/PrivacyPolicy'));
const EmailDisclaimer = lazy(()=>import('../pages/EmailDisclaimer'));
// const RoadMap = lazy(()=>import('../pages/RoadMap'));
const InstitutionalPage = lazy(()=>import('../pages/InstitutionalPage'));
const ErrorPage = lazy(()=>import('../pages/ErrorPage'));




const AppRoutes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStored, setIsStored] = useState(true)

  const cookies = new Cookies();
  const showModal = () => {
    setIsModalOpen(true);
  };


  const tagManagerArgs = {
    gtmId: 'GTM-NQNPJRQ5'
  };



  const handleAcceptCookie = () => {
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 2*365*24*60*60*1000;
      now.setTime(expireTime);
      cookies.set('isConsent', true, { path: '/' , expires: now });
      TagManager.initialize(tagManagerArgs);      
      // ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      setIsStored(true);
      setIsModalOpen(false);
  };

  const handleDeclineCookie = () => {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 24*60*60*1000;
    now.setTime(expireTime);
    cookies.set('isConsent', false, { path: '/' , expires: now });
    cookies.remove("_ga");
    cookies.remove("_ga_JK9EPQYBN7");
    setIsModalOpen(false)
    setIsStored(true)
  };



  useEffect(()=>{
    const isConsent = cookies.get('isConsent');

    if (isConsent === 'true') {
      TagManager.initialize(tagManagerArgs);
      setIsStored(true)
      setIsModalOpen(false)
    } else if(isConsent === 'false') {
      setIsStored(true)
      setIsModalOpen(false)
    } else if(window.innerWidth >900){
      setIsStored(false)
    } else if(window.innerWidth <=900){
      showModal(true)
    }
   
  },[tagManagerArgs])

  return (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
            <Route path={ROUTES.INDEX} element={<SharedLayout />} > 
              <Route index element={<Suspense><LandingPage /></Suspense>} />
              <Route path={ROUTES.CONTACT} element={<Suspense><InstitutionalPage /></Suspense>} />
              <Route path={ROUTES.PRIVACY_POLICY} element={<Suspense><PrivacyPolicy /></Suspense>} />
              <Route path={ROUTES.EMAIL_DISCLAIMER} element={<Suspense><EmailDisclaimer /></Suspense>} />
              {/* <Route path={ROUTES.ROADMAP} element={<Suspense><RoadMap /> </Suspense>} /> */}
              <Route path='*' element={<Suspense><ErrorPage /></Suspense>} />
            </Route>
        </Routes>


<div style={{display: isStored ? 'none' : 'block'}}>


    <div className='lgscreen'>
    <CookieConsent>   
      <div className='cookies'>
        <p> This website integrates Google Analytics' cookies. You can accept or deny the use of GA cookies. The site itself requires no cookies. </p>

        <div className='btn-ctr'>
        <button  onClick={handleAcceptCookie} className='btn1'> Allow </button>
        <button onClick={handleDeclineCookie} className='btn2'> Decline </button>
        </div>
      </div>

  </CookieConsent>
  </div>
  </div>

  <div className='smscreen'>
  <CookieConsent>

  <Modal 
    title="" 
    destroyOnClose={true}
    centered 
    open={isModalOpen}
    >
    <div className='cookies '>
    <p> This website  Google Analytics' cookies. You can accept or deny the use of GA cookies. The site itself requires no cookies. </p>
    <div className='btn-ctr'>
      <button  onClick={handleAcceptCookie} className='btn1'> Allow </button>
      <button  onClick={handleDeclineCookie} className='btn2'> Decline </button>
    </div>
  </div>
</Modal>
  </CookieConsent>
</div>
    </BrowserRouter>
  
  )
}

export default AppRoutes