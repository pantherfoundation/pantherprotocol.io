import styled from "styled-components";


const HeroWrapper = styled.main`
  min-height: calc(100vh - 160px);
  text-align: center;
  display: flex;
  align-items: center;
  margin: 1rem auto 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width:max-content;
  position:relative;
  // z-index:10;


  .container{
    position:relative;
    z-index:2;
    transform:translateY(-25px);
  }

  h1 {
    z-index: 100;
    font-family: "Sora";
    width: 100%;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    font-size: 64px;
    line-height: 115%;
    text-align: center;
    letter-spacing: -0.03em;
    margin-bottom: 2rem !important;

    .span1 {
      display: block;
      color: #fff;
    }

    .span2 {
      background: linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%);
      position: relative;
      z-index: 2;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      display:inline-block;
    }
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 21px;
    line-height: 34px;
    text-align: center;
    width: 40%;
    margin: 1rem auto 3.5rem auto !important;
    color: #fff;
    position: relative;
    z-index: 100;
  }
}




  @media screen and (min-width: 2000px) {}

  @media screen and (min-width: 1600px) {

    min-height: calc(100vh - 200px);

    .container{
      position:relative;
      z-index:2;
      transform:translateY(-20px);
    }

    button {
      padding: 1.25rem 2.75rem;
      font-size: 22px;
    }
    p{
      width: 35%;
    }

    h1 {
      font-size: 75px;
      width: 100%;
    }

  }

  @media screen and (min-width: 1200px) and (max-width: 1450px) {
    p {
      width: 50%;
    }

  }



  @media screen and (min-width: 992px) and (max-width: 1199px) {

    h1 {
      font-size: 56px;
      width: 100%;

    }

    p {
      width: 50%;
    }

  }

  @media screen and (max-width: 1050px) {
    min-height: auto;

    .container{
      padding-top:6rem;
      padding-bottom:10rem;
      transform:translateY(0px);
    }
  }


  @media screen and (min-width: 768px) and (max-width: 992px) {

  
    .container{
      padding-top:6rem;
      padding-bottom:10rem;
      transform:translateY(0px);
    }
  

    h1 {
      font-size: 50px;
      width: 100%;

    }

    p {
      width: 60%;
    }

  }
  @media screen and (min-width: 501px) and (max-width: 768px) {

    .container{
      padding-top:7rem;
      padding-bottom:10rem;
      transform:translateY(0px);

    }


    h1 {
      font-size: 48px;
      width: 100%;
    }


    p {
      width: 85%;
      font-size:18px;
    }
  }

  @media screen and (max-width: 500px) {
    .container{
      padding-top:6rem;
      padding-bottom:10rem;
      transform:translateY(0px);

    }


    h1 {
      font-size: 40px;
      width: 100%;
    }

    p {
      width: 100%;
      font-size:17px;
    }
  }

  @media screen and (max-width: 380px) {

    .container{
      padding-top:5rem;
      padding-bottom:10rem;
      transform:translateY(0px);

    }
    h1 {
      font-size: 40px;
      width: 100%;

      .span1 {
        display: inline;
      }
    }

    p {
      width: 100%;
      font-size:18px;
    }
  }

  @media screen and (max-width: 355px) {
 

    .container{
      padding-top:5rem;
      padding-bottom:12rem;
      transform:translateY(0px);

    }

    h1 {
      font-size: 36px;
      width: 100%;

      .span1 {
        display: inline;
      }
    }

    p {
      width: 100%;
      font-size:18px;
    }
  }

  @media screen and (max-height: 700px) {
    min-height: auto !important;
    .container{
      padding-top:6rem;
      padding-bottom:10rem;
      transform:translateY(0px);
    }
  }
`;

export default HeroWrapper;
