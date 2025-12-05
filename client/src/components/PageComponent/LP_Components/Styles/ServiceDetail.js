import styled from "styled-components";




const ServiceWrapper = styled.section`
padding: 6rem 0 6rem;
text-align:center;
margin: 0rem auto 0;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width:max-content;
position:relative;
z-index:10;
transform: translate3d(0, 0, 1000px);

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
}

h3{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.6px;
    color: #fff;
    margin:1rem auto 0rem !important;
    width: 55%;


    .text-resp{
        display:block;
    }
}


.center{
    display:flex;
    align-items:center;
    justify-content:center;
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
    background:transparent;
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









.service-section{
    margin-top:5rem;
    margin-bottom: 6rem;
    width: 80%;
    margin-left: auto !important;
    margin-right:auto !important;
    align-items:stretch;


    .ant-card{
        background: rgb(43 53 76);
        backdrop-filter: blur(100px);
        border-radius: 20px;
        height: 100%;
        border: none;
        
        .ant-card-body{
            text-align:left;
            padding: 40px;
        }

        .first{
            height: 80%;
        }

        h5{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 113.5%;
            min-height:34px;
            text-align: left;
            letter-spacing: -0.53px;
            color: #fff;
            margin-bottom: 0.9rem !important;

            span{
                width:50px;
                height:34px;
            }

            img{
                display:inline-block;
                margin-right: 1rem;
            }
           
        }

        p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight:400;
            font-size: 16px;
            line-height: 25px;
            text-align: left;
            color: #D1E9FF;
            width: 100%;
            
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
    }
}



@media screen and (min-width: 1199px) and (max-width: 1450px) {
    h3{
        width: 65%;
    }
    .service-section{
        .ant-card .ant-card-body{
            padding: 36px;
        }
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    h3{
        width:80%;
    }

    .service-section{
        width:90%;

        .ant-card .ant-card-body{
            padding: 32px;
        }
    }
}

@media screen and (min-width: 768px)and (max-width: 991px) {
    h3{
        width:100%;
    }

        
    .service-section{
        width:100%;

        .ant-card .ant-card-body{
            padding: 32px;
        }
    }
}

@media screen and (min-width: 600px)and (max-width: 768px) {

    
    h3{
        font-size: 42px;
        width:100%;
    }
    h4{
        font-size: 21px;
    }

    .service-section{
        width:100%;

        .ant-card .ant-card-body{
            padding: 32px;
        }

        .ant-card h5{
         font-size:21px;
        img{
            width:25px;
            margin-right:0.5rem;
        }
    }
    }
}

@media screen and (min-width: 451px)and (max-width: 600px) {
    h3{
        font-size: 42px;
        width:100%;
        .text-resp{
            display:inline;
        }
    }
    h4{
        font-size: 21px;
    }

    .service-section{
        width:100%;

        .ant-card .ant-card-body{
            padding: 32px;
        }

        .ant-card h5 img{
            width:25px;
            margin-right:0.5rem;
        }
    }

   
}

@media screen and (max-width: 451px) {
    h3{
        font-size: 30px;

        width:100%;
        .text-resp{
            display:inline;
        }
    }
    h4{
        font-size: 18px;
        
    }

    .service-section{
        width:100%;
        margin-bottom: 4rem;

        .ant-card .ant-card-body{
            padding: 32px;
        }
        
        .ant-card h5 img{
            width:25px;
            margin-right:0.5rem;

        }
    }



a{
    transform:scale(0.82);
}
    button{
        // transform:scale(0.82);
        
    .btn-svg{

        
        // width:272px;
        // height:60px;
    }

    span{
        font-size:16px;
    }

    }
}


@media screen and (max-width: 351px) {

a{
    transform:scale(0.7);
}
    button{

       
        
        .btn-svg{
            
            // width:240px;
            // height:55px;
        }
    
        span{
            font-size:14px;
        }
    
        }
}

`

export default ServiceWrapper;