import Wrapper from './Styles/ErrorPage'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OGImg from '../assets/Images/og_panther.png'
import {ROUTES} from '../routes/constRoutes'
import { Navbar } from '../components/SharedComponent';
import {Footer} from '../components/SharedComponent';

const ErrorPage = () => {

  return (
    <div style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
    <Navbar />
    <Wrapper>
        <Helmet>
            <title> Error Page - Panther Protocol </title>
            <meta property="og:image" content={OGImg} />
            <meta property="og:title" content="Email Disclaimer - Panther Protocol"/>
            <meta property="og:description" content=" No Page Found"/>
        </Helmet>
        <div className='container'>
           <h4> 404 - No Page Found </h4>
           <Link to={ROUTES.INDEX}> Go to Homepage </Link>
        </div>
    </Wrapper>
    <Footer />
    </div>
  )
}

export default ErrorPage