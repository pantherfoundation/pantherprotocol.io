import styled from "styled-components";


const ServiceWrapper = styled.section`

position:relative;
z-index:11;
transform: translate3d(0, 0, 1100px);
padding: 6rem 0 5rem;
text-align:center;
background: transparent;
margin: 0rem auto 0;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width:max-content;


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
    width:100%;

}

h3{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.03em;
    color: #fff;
    margin:1rem auto 0rem !important;
}

p{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    width: 80%;
    margin: 1.5rem auto 5rem auto !important;
    color: #fff;
}






.service-section{
    margin-top:5rem;
    margin-bottom: 1rem;
    width: 97% ;
    margin-left: auto !important;
    margin-right: auto  !important;

    .animation-div{
        height:100%;
    }

    .ant-card{
        background: rgba(73, 89, 113, 0.55);
        // mix-blend-mode: normal;
        backdrop-filter: blur(100px);
        border-radius:20px;
        height:100%;
        border: none;
        margin: 0 auto;

        .ant-card-body{
            text-align:center;
            padding-top: 60px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 40px !important;
        }

        .img-container{
            height: 80px;
            margin-bottom: 4rem;
            display:flex;
            justify-content:center;
            align-items:center;

            img{
                z-index:2;
            }

            .videoPlay2{
                z-index:2;
            }
        }

        .img-container::before{
            content:'';
            position:absolute;
            display:inline-block;
            z-index: 0;
            background: rgb(18 25 50);
            // backdrop-filter: blur(4px);
            // -webkit-backdrop-filter: blur(4px);
            width: 120px;
            height: 120px;
            border-radius: 100%;
        }

        .video-container{
            height:100%;
            mix-blend-mode: lighten;
        }

        .width_service{
            max-width:250px;
            margin-left:auto;
            margin-right:auto;
        }

        h5{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 113.5%;
            letter-spacing: -0.528045px;
            background: linear-gradient(93.63deg, #FFFFFF 1.55%, #A5A5A5 149.45%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom: 0.5rem !important;
           
        }

        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            color: #fff;
            width: 100%;
            margin-bottom: 0 !important;
            letter-spacing: 0.2px;
            opacity: 0.9;
   
        }
    }
}


@media screen and (min-width: 1550px){

    .service-section .ant-card h5{
        font-size:24px;
    }

    h3{
        font-size: 54px;
    }

    h4{
        font-size: 22px;
        line-height: 42px;
        width:70%;
    }
}


@media screen and (min-width: 1200px) and (max-width: 1600px) {
    .service-section{
        width:100%;
    }

     h4{
        width:70%;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .service-section{
        width:100%;
    }

      h4{
        width:75%;
    }
}

@media screen and (min-width: 768px)and (max-width: 991px) {
    .service-section{
        width:100%;
    }
}

@media screen and (min-width: 451px)and (max-width: 767px) {
    .service-section .ant-card h5{
        font-size:21px;
    }
    .service-section{
        width:100%;
    }

    h3{
        font-size: 42px;
    }
    h4{
        font-size: 21px;
    }
}

@media screen and (max-width: 451px) {
    .service-section .ant-card h5{
        font-size:21px;
    }
    p{
        font-size:17px;
        width:90%;
        margin: 1.5rem auto 4rem auto !important
    }
    .service-section{
        width:100%;
        margin-top:4rem !important;
    }
    h3{
        font-size: 30px;
    }
    h4{
        font-size: 18px;
        // line-height:1.5;
    }
}


`

export default ServiceWrapper;