import styled from "styled-components";





const Wrapper = styled.section`
padding: 5rem 0 3.25rem;
text-align:center;
position:relative;
background: linear-gradient(45deg, #1a1f3d, #070216) ;

h4{
    display:inline-block;
    font-family: 'Sora';
    font-weight: 600;
    font-size: 19.8px;
    line-height: 37.8px;
    text-align: center;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    background: linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position:relative;
    z-index:5;
}

h3{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    text-align: center;
    color: #fff;
    margin:1rem auto 0rem !important;
    position:relative;
    z-index:5;
}


.h-500{
    height:500px;
    display:flow-root;

    .works_img{
        display:flex;
        align-items:center;
        justify-content:center;
        
    }
}


.works_container{
    margin: 3rem auto 3rem;
    width:97%;
    padding: 0 15px;
    .box_container{
        display:flex;
        align-items:center;
        height:500px;
        position:relative;
        z-index:5;
    }

    .btn-container{
        flex-direction:column;
        align-items:flex-start;
        padding-left:2.5rem;
        height: auto !important;
    }

    .steps-container{
        display:flex;
        align-items:center;
        margin-bottom:2.5rem !important;
        width:90%;
        margin-left:auto;

        img{
            margin-right:1rem;
            cursor:pointer;
        }

        .as-left{
            margin-right:2rem;
        }

        .as-right{
            margin-left:1rem;
            margin-right:0;
        }
    }
    

    h2{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 130%;
        letter-spacing: -0.5;
        color: #FFFFFF;
        text-align:left;
        margin-bottom: 1.6rem !important;
    }

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;
        color: #DAE1E8;
        text-align:left;
        margin-bottom: 1.5rem !important;
        width: 80%;

        strong{
            color: #82EBC7;
            font-weight: 600;
        }
    }

    .step2{
        width: 90%;
        margin-left:auto;
        p{
            width: 100%;
        }
    }

    ul {
        margin: 1rem 0 0 0 !important;
        padding-left:20px;
        list-style: none;

        .hidden-list{
            opacity:0;
        }

        li{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #DAE1E8;
            text-align:left;
            font-family:"Poppins";
  

            ::before {
                content: "•";
                color: #82EBC7;
                font-weight: bold;
                display: inline-block; 
                width: 1em;
                margin-left: -1em;
                font-size: 21px;
              }
           
        }
    }





    .works_img{
        position:relative;
        z-index:0;

        .img2{
            height: auto;
            width: 100%;
            display:flex;
            justify-content:center;
            align-items:center;

            .video-size2{
                width:100%;
                height:100%;
                transform:scale(0.9) translateX(-8%);
                
            }

        }

        .img2::before{
            content:'';
            position:absolute;
            display:inline-block;
            z-index: 0;
            transform: scale(0.90) translateX(-8%);
            background:linear-gradient(45deg, #1a1f3d, #070216) ;
            backdrop-filter: blur(4px);
            width: 100%;
            height: 100%;
        }

        .img1{
            height: 500px;
            width: 100%;
            display:flex;
            justify-content:center;
            align-items:center;

            .video-size{
                width:100%;
                height:100%;
                transform:scale(0.9) translateX(9%);
            }

           

        }

        .img5{
            .video-size{
                width:100%;
                height:100%;
                transform:scale(0.9) translateX(-1.2rem) !important;
            }
        }

        .img5::before{
            content:'';
            position:absolute;
            display:inline-block;
            z-index: 0;
            transform: scale(0.95) translateX(-1.2rem) !important;
            background: #030619;
            backdrop-filter: blur(4px);
            width: 100%;
            height: 500px;
        }

        .img1::before{
            content:'';
            position:absolute;
            display:inline-block;
            z-index: 0;
            transform: scale(0.95) translateX(9%);
            background: #030619;
            backdrop-filter: blur(4px);
            width: 100%;
            height: 500px;
        }
    }
}

@media screen and (min-width: 1550px){
    .works_container h2{
        font-size:44px;
    }

    .works_container p{
        font-size:24px;
    }
    h3{
        font-size: 54px;
    }
    
    h4{
        font-size: 22px;
        line-height: 42px;
    }
}

@media screen and (min-width: 1199px) and (max-width: 1440px) {
    .works_container{
        width:100% !important;
    }

    p{
        font-size: 21px;
    }
}


@media screen and (min-width: 992px) and (max-width: 1199px) {
    .works_container{
        width:97% !important;

        h2{
            font-size:42px;
        }

        p{
            width:90%;
            font-size: 21px;
        }

      
    }


}

@media screen and (min-width: 768px)and (max-width: 991px) {

    ul{
        .hidden-list{
            display:none;
        }
    }

    .h-500{
        height:auto;
    }


    .reverse-resp{
        flex-direction:column-reverse;
    }



    .works_container .step2{
        margin-left:0;
        width:100%;

        p{
            width:75%;
        }
    }
    
    .works_container .btn-container{
        padding-left:0;
    }




    .works_container{
        width:100% !important;
        margin: 1rem auto 4rem;

        .steps-container{
            margin-left:0;
            width:100%;
            justify-content:center;
            // margin-top:2rem;
            margin-bottom:4rem !important;
        }
        

        .box_container{
            height:auto;
            margin-top:2rem;
            margin-bottom:2rem;
        }

        .works_img .img2{
            height:350px;

            .video-size2{
                transform:scale(0.9) translateX(0);
            }

        }

        .img2::before{
            height:380px !important;
            transform: scale(0.9) translateX(0) !important;
        }


        .works_img .img1{
            height:350px;

            .video-size{
                transform:scale(0.9) translateX(0);
            }
        }

        .img1::before{
            height:380px !important;
            transform: scale(0.9) translateX(0) !important;
        }


        h2{
            font-size:38px;
        }

        p{
            width:75%;
            font-size: 21px;
        }

    }
}

@media screen and (min-width: 451px)and (max-width: 767px) {}
@media screen and (min-width: 451px)and (max-width: 600px) {}
@media screen and (min-width: 452px)and (max-width: 767px) {
    ul{
        .hidden-list{
            display:none;
        }
    }
    .h-500{
        height:auto ;
    }


    .reverse-resp{
        flex-direction:column-reverse;
    }


 

    .works_container .step2{
        margin-left:0;
        width:100%;

        p{
            width:85%;
        }
    }
    
    .works_container .btn-container{
        padding-left:0;
    }



    .works_container{
        width:100% !important;
        margin: 1rem auto 2rem;

        .steps-container{
            margin-left:0;
            width:100%;
            justify-content:center;
            // margin-top:2rem;
            margin-bottom:4rem !important;
        }

        .box_container{
            height:auto;
            margin-top:1rem;
            margin-bottom:2rem;
        }


        .works_img .img2{
            height:320px;
            .video-size2{
                transform:scale(0.9) translateX(0);
            }
        }
        .img2::before{
            height:380px !important;
            transform: scale(0.9) translateX(0) !important;
        }
        

        .works_img .img1{

            height:320px;
            .video-size{
                transform:scale(0.9) translateX(0);
            }
        }
        .img1::before{
            height:380px !important;
            transform: scale(0.9) translateX(0) !important;
        }

        h2{
            font-size:38px;
        }

        p{
            width:85%;
            font-size: 18px;
        }


    }

    h3{
        font-size: 42px;
    }
    h4{
        font-size: 21px;
      
    }


}

@media screen and (max-width: 451px) {

    .reverse-resp{
        flex-direction:column-reverse;
    }

    ul{
        .hidden-list{
            display:none;
        }
    }
    .h-500{
        height:auto;
    }


    .works_container .step2{
        margin-left:0;
        width:100%;

        p{
            width:100%;
        }
    }
    
    .works_container .btn-container{
        padding-left:0;
    }



    .works_container{
        width:100% !important;
        margin: 1rem auto 0;

        .steps-container{
            margin-left:0;
            justify-content:center;
            width:100%;
            margin-bottom:3rem !important;
        }

        ul li{
            font-size:16px;
        }


        .box_container{
            height:auto;
            margin-top:1rem;
            margin-bottom:2rem;
        }

        .works_img .img2{
            height:260px;  
            .video-size2{
                transform:scale(1) translateX(0);
            }
        } 

        .img2::before{
            height: 300px !important;
            transform: scale(1) translateX(0) !important;
        }



        .works_img .img1{

            height:260px;           
                .video-size{
                    transform:scale(1) translateX(0);
                }
        }


        .works_img .img5{

                
                .video-size{
                    transform:scale(1) translateX(-1.2rem) !important;
                }
        }

        .img5::before{
            transform:scale(1) translateX(-1.2rem) !important;
        }

        .img1::before{
            height: 300px !important;
            transform: scale(1) translateX(0) !important;
        }


        h2{
            font-size:27px;
            margin-bottom:1rem !important;
        }

        p{
            width:100%;
            font-size: 17px;
            margin-bottom:1rem !important;
        }


    }

    h3{
        font-size: 30px;
        margin-bottom:0rem !important;
    }

    h4{
        font-size: 18px;
       
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:90%;
        margin-bottom: 3rem !important;
    }
  
}


`

export default Wrapper;