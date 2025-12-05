import styled from "styled-components";

const HeroWrapper = styled.main`
min-height: calc(100vh - 155px);
text-align: center;
display: flex;
flex-direction:column;
justify-content:center;



h2{
  // width: 70%;
  color:white;
  font-size:70px;
  line-height:1.13;
  font-weight:600;
  // max-width:900px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:2.4rem !important;
  position:relative;

  .gradient-text {
    background: linear-gradient( #87F9C2, #6BB1D9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
}


.wd2{
  position:relative;
  z-index:11;
}



h1 {
  position:relative;
  height:210px;
  margin-bottom:0.8rem !important;
  z-index:0;

  video{
    width:100%;
    height:100%;
    transform: scale(3.6) translate(0rem, 1rem);
    mix-blend-mode:screen;
    background:#000;
    background-blend-mode:screen;
  }

  ::before{
    content:'';
    position:absolute;
    z-index: 0;
    background: linear-gradient(0deg, rgb(20, 31, 61), rgb(2, 2, 22));
    width: 100%;
    transform: scale(3.6) translate(0rem, 1rem);
    height: 400%;

  }
}

p {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  width: 43%;
  margin: 0 auto 2.4rem auto !important;
  color: #fff;
  position: relative;
  z-index: 100 !important;
}

.button{
  display:flex;
  align-items:center;
  justify-content:center;
}

a{
  transform:scale(0.94);
}

button{
  background:#111427;
  border:0;
  cursor: pointer;
  position:relative;
  padding:0;
  border-radius:15px;
 

  :hover{
      box-shadow: -2px -2px 10px 1px rgba(135,249,194, 0.4), 2px 2px 10px 1px rgba(108, 178, 217, 0.4);
      -webkit-box-shadow: -2px -2px 10px 1px rgba(135,249,194, 0.4), 2px 2px 10px 1px rgba(108, 178, 217, 0.4);
      -moz-box-shadow: -2px -2px 10px 1px rgba(135,249,194, 0.4), 2px 2px 10px 1px rgba(108, 178, 217, 0.4);
  }

  svg{
      cursor:pointer;
  }
 
  .btn-svg{
      // width:320px;
      // height:68.1px;
      border-radius:15px;
      // background:red;
  }

  img{
      display:inline-block;
      width:10px;
      margin-left:0.5rem;
      position:relative;
  }

  span{
      position:absolute;
      line-height: 25px;
      font-weight: 600;
      font-family: "Inter";
      font-size:19px;
      color: #fff;
      line-height: 25px;
      width:100%;
      text-align:center;
      z-index:0;
  }


}





@media screen and (min-width: 1550px) {
  min-height: calc(100vh - 200px);
  margin-top: 1.5rem; !important;

    h2{
      width: 70%;
    }

  p{
    width: 49%;
  }

  .wideContainer{
    position:relative;
  }
  

  p{
    font-size: 22px;
    margin: 0 auto 3.5rem auto !important;
  }

  h1{
    height:250px;
    

    video{
      transform: scale(3.6) translate(0rem, 1rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 1rem);
    }
  }
}
@media screen and (min-width: 1600px) {
  p{
    width:47%;
  }
}
@media screen and (min-width: 1682px) {
  p{
    width:45%;
  }
}

@media screen and (min-width: 1450px) and (max-width: 1550px) {
  h2{
      width: 80%;
    }
}

@media screen and (min-width: 1200px) and (max-width: 1453px) {

  p {
    width: 45%;
  }

    h2{
      width: 81%;
    }


  h1{
    height:200px;
    margin-bottom:0.8rem !important;

    video{
      transform: scale(3.6) translate(0rem, 0.8rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 0.8rem);
    }
  }
}

@media screen and (min-width: 1276px) and (max-width: 1360px) {
  p {
    width: 45%;
  }

}

@media screen and (min-width: 1200px) and (max-width: 1276px) {
  p {
    width: 44%;
  }

      h2{
      width: 85%;
    }

}




@media screen and (min-width: 1055px) and (max-width: 1200px) {

    p {
      width: 46%;
    }

    h2{
      width: 99%;
    }

    h1{
      height:195px;
      video{
        transform: scale(3.6) translate(0rem, 1rem);
      }
  
      ::before{
        transform: scale(3.6) translate(0rem, 1rem);
      }
    }
}


@media screen and (min-width: 1067px) and (max-width: 1137px) {
  p {
    width: 49%;
  }
}


@media screen and (min-width: 1050px) and (max-width: 1067px) {
  p {
    width: 50%;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1050px) {
  p {
    width: 55%;
  }
}


@media screen and (min-width: 992px) and (max-width: 1055px) {
  min-height: auto;
  margin-top:9rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:56px;
    width: 85%;
  }

  .wd2{
    padding-bottom:10rem;
    padding-top:0rem !important;
  }

  .wideContainer{
    padding-top:6rem;
    // transform:translateY(0px);
  }

  p {
    width: 53%;
  }

  h1{
    height:195px;
    video{
      transform: scale(3.6) translate(0rem, 1rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 1rem);
    }
  }

}


@media screen and (min-width: 850px) and (max-width: 992px) {
  min-height: auto;
  margin-top:9rem;

  .wd2{
    padding-top:0rem !important;
    padding-bottom:12rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);
  }

  h2{
    margin-bottom:2.25rem !important;
    font-size:56px;
    width:100%;
  }

  h1{
    height:190px;
    video{
      transform: scale(3.6) translate(0rem, 1rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 1rem);
    }
  }

  p {
    width: 62%;
  }

}


@media screen and (min-width: 950px) and (max-width: 992px) {
   h2{
    margin-bottom:2.25rem !important;
    font-size:56px;
    width:90%;
  }
}

@media screen and (min-width: 880px) and (max-width: 992px) {
  min-height: auto;



  p {
    width: 60%;
  }
}


@media screen and (min-width: 768px) and (max-width: 850px) {
  min-height: auto;
  margin-top:9rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:50px;
    // max-width:650px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:12rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);
  }

  h1{
    height:185px;
    video{
      transform: scale(3.6) translate(0rem, 1rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 1rem);
    }
  }

  p {
    width: 65%;
  }
}

@media screen and (min-width: 768px) and (max-width: 825px) {
  p {
    width: 68%;
  }
}





@media screen and (min-width: 650px) and (max-width: 768px) {
  min-height: auto;
  margin-top:7rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:45px;
    // max-width:600px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);

  }

  h1{
    height:160px;
    video{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }
  }

  p {
    width: 77%;
    margin: 0 auto 3rem auto !important;
  }

}

@media screen and (min-width: 600px) and (max-width: 650px){
  min-height: auto;
  margin-top:7rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:40px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);

  }

  h1{
    height:148px;
    video{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }
  }

  p {
    width: 89%;
    margin: 0 auto 3rem auto !important;
  }

}

@media screen and (min-width: 651px) and (max-width: 700px){
  h2{
    margin-bottom:2.5rem !important;
    font-size:44px;
    }

  p{
    width:83%;
  }
}

@media screen and (min-width: 550px) and (max-width: 600px){
  min-height: auto;
  margin-top:7rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:36px;
    // max-width:475px;
  }


  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);

  }

  h1{
    height:148px;
    video{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }

    ::before{
      transform: scale(3.6) translate(0rem, 0.85rem);
    }
  }

  p {
    width: 90%;
    margin: 0 auto 3rem auto !important;
  }
}
@media screen and (min-width: 500px) and (max-width: 550px) {
  min-height: auto;
  margin-top:6.5rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:33px;
    // max-width:462px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:6rem;
    transform:translateY(0px);

  }


  h1{
    height:135px;
    video{
      transform: scale(3.5) translate(0rem, 0.6rem);
    }

    ::before{
      transform: scale(3.5) translate(0rem, 0.6rem);
    }
  }

  p {
    width: 90%;
    margin: 0 auto 3rem auto !important;
  }

}


@media screen and (min-width: 450px) and (max-width: 500px) {
  min-height: auto;
  margin-top:6rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:32px;
    // max-width:410px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:5.5rem;
    transform:translateY(0px);

  }


  h1{
    height:130px;
    video{
      transform: scale(3.3) translate(0rem, 0.7rem);
    }

    ::before{
      transform: scale(3.3) translate(0rem, 0.7rem);
    }
  }

  p {
    width: 90%;
    margin: 0 auto 3rem auto !important;
  }


}

@media screen and (min-width: 410px) and (max-width: 450px) {
  min-height: auto;
  margin-top:6rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:32px;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:5.5rem;
    transform:translateY(0px);

  }

  h1{
    height:120px;
    margin-bottom:1rem !important;
    video{
      transform: scale(3.25) translate(0rem, 0.7rem);
    }

    ::before{
      transform: scale(3.25) translate(0rem, 0.7rem);
    }
  }

  p {
    font-size:17px;
    width: 90%;
    margin: 0 auto 3rem auto !important;
  }

  button{
  

span{
    font-size:16px;
}

}
}


@media screen and (max-width: 410px) {
  min-height: auto;
  margin-top:6rem;


  h2{
    font-size:32px;
    margin-bottom:2.5rem !important;
  }

  .wd2{
    padding-top:0rem !important;
    padding-bottom:10rem;
  }
  .wideContainer{
    padding-top:4rem;
    transform:translateY(0px);
  }

  p {
    font-size:17px;
    width: 90%;
    margin: 0 auto 3rem auto !important;
  }


  h1{
    height:110px;
    video{
      transform: scale(3.2) translate(0rem, 0.7rem);
    }

    ::before{
      transform: scale(3.2) translate(0rem, 0.7rem);
    }
  }


  button{

    span{
        font-size:14px;
    }

    }

}


@media screen and (max-width: 375px) {
  min-height: auto;
  p{
    font-size:16.5px;
  }

  h2{
    margin-bottom:2.5rem !important;
    font-size:30px;
  }
  .wideContainer{
    padding-top:4rem;
    transform:translateY(0px);
  }

  h1{
    height:102px;
    margin-bottom:0.3rem !important;
    video{
      transform: scale(3.2) translate(0rem, 0.6rem);
    }

    ::before{
      transform: scale(3.2) translate(0rem, 0.6rem);
    }
  }
}


@media screen and (max-width: 345px) {
  min-height: auto;
  margin-top:5rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:30px;
  }

  a{
    transform:scale(0.7);
}

  .wideContainer{
    padding-top:4rem;
    transform:translateY(0px);
  }
  p{
    font-size:16px;
  }

}

@media screen and (max-width: 315px) {
  min-height: auto;
  margin-top:5rem;

  h2{
    margin-bottom:2.5rem !important;
    font-size:28px;
  }

}





@media screen and (max-height: 900px) {
  min-height: auto !important;
  margin-top: 9rem !important;


  .wideContainer{
    padding-top:0rem !important;
    transform:translateY(0px);
  }




  .wd2{
    padding-bottom:8rem;
    padding-top:0rem !important;
  }
}


@media screen and (max-height: 900px) and (max-width:768px){
  min-height: auto !important;
  margin-top: 6rem !important;
}

@media screen and (max-height: 900px) and (min-width:1200px) and (max-width: 1550px){
  min-height: auto !important;
  margin-top: 9rem !important;


  .wd2{
    padding-bottom:8rem;
    padding-top:0rem !important;
  }
}



`



export default HeroWrapper;