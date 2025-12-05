import styled from "styled-components";


const Wrapper = styled.main`

  
  .privacy-policy{
    padding-top:7rem;
    padding-bottom: 12rem;
  }
  
  
  .privacy-policy h3{
    position:relative;
    z-index:9;
    font-size: 36px;
    font-weight: 600;
    line-height: 50px;
    color: #fff;
    // text-align:center;
    margin-bottom:1rem !important;
  }

  h5{
    position:relative;
    z-index:9;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    color: #87F9C2 ;
    margin-bottom:2.5rem !important;
  }
  
  .privacy-policy p{
    position:relative;
    z-index:9;
    transform: translate3d(0, 0, 900px);
    // width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #fff;
  }


  .tb-head .tb-title:first-child{
    border-top:1px solid #fff !important;
  }

  .tb-head .tb-title:nth-child(2){
    border-top:1px solid  #fff !important;
  }


  .tb-head{
    margin:2rem 0;

    ul{
      padding-left:1rem;
    }
  }
  .tb-head .tb-title{
    padding: 0.8rem 1rem;
    border-top:0px solid  #fff;
    border-bottom:1px solid  #fff;
    border-left:1px solid  #fff;
    border-right:1px solid  #fff;

    p{
      margin-bottom:0px !important;
    }
  }
 
  h2{
    position:relative;
    z-index:9;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.3;
    color: #87F9C2 ;
    margin-bottom:2rem !important;
  }

 

  .hyperlinks-container{
    margin:2rem 0;
    p{
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      margin:1rem 0;
      cursor:pointer;

      a{
        color: #fff;
        text-decoration:underline;
      }
    }
  }

  .underline{
    text-decoration:underline;
  }

  .inline-block{
    display:inline-block;
  }

  .section{
    padding: 6rem 0 0 0;

    .sub-head{
      font-size:20px;
      padding-top:2rem;
    }

    ul li{
      color: #fff;
    }

    p{
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

      a{
        text-decoration:underline;
        cursor:pointer;
        color:#87F9C2;
      }
    }
  }
  
  
  @media (max-width: 1100px) {

  
  }
  
  
  @media (max-width: 750px) {
  
  
  }
  
  @media (max-width: 500px) {

  }
  
  
  @media (max-width: 400px) {

  }
  
  @media (max-width: 350px) {

  }
  

  

`

export default Wrapper;