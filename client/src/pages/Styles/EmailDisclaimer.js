import styled from "styled-components";

const Wrapper = styled.main`

.email-disclaimer {
    padding-top:7rem;
    padding-bottom: 5rem;
  }
  
 

  
  
  .email-disclaimer h3{
    position:relative;
    z-index:9;
    font-size: 36px;
    font-weight: 600;
    line-height: 50px;
    color: #fff;
    margin-bottom:1rem !important;
    // text-align:center;
  }

  h5{
    position:relative;
    z-index:9;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    color: #87F9C2 ;
    margin-bottom:2.5rem !important;
  }
  

  h2{
    position:relative;
    z-index:9;
    font-size: 21px;
    font-weight: 600;
    line-height: 1;
    color: #87F9C2 ;
    margin-bottom:2rem !important;
  }

  .content-box{
    margin: 5rem 0rem;


    .sub-para{
      text-decoration: underline;
      color:#D1E9FF;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .tab{
    padding-left:4rem;
  }
  .email-disclaimer p{
    position:relative;
    z-index:9;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #fff;
    margin-bottom:1.5rem !important;

    strong{
      color:#D1E9FF;
    }
  }

  
  ul{
    li{
      color: #fff;
    }
  }
  .email-disclaimer p a{
    font-weight: 500;
    text-decoration: underline;
    color:#D1E9FF;
  }
  
  @media (max-width: 750px) {
   
  
  }
  
  @media (max-width: 400px) {

  }
`

export default Wrapper;