import styled from "styled-components";


const FooterWrapper = styled.main`
position:relative;

.footer-gradient{
    video{
        mix-blend-mode:exclusion;
        object-fit: cover;
        transform: translate3d(0, 0, 0);
    }

    ::before{
        content:'';
        position:absolute;
        z-index: 0;
        background: #030619;
        transform: translate3d(0, 0, 0);
        height: 100%;
        width:100%;
    }


    display:flex;
    justify-content:center;
    position:absolute;
    width:100%;
    top:-140%;
    opacity:1;

    .bg-top, .bg-btm{
        height:100%;
        width:auto;   
    }

    .bg-btm{
        position:absolute;
        z-index:-1;
        opacity:0.5;
        // filter: blur(10px);
      
    }

    .bg-top{
        position:absolute;
        z-index:0;
        top:-10%;
       
    }
    
}


.bottom-footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top: 1px solid rgba(216, 206, 237, 0.8);
    padding-top: 2rem;
    margin-top:3.5rem;

    p{
        width: auto !important;
        margin-top:0rem !important;
    }
}

.footer{
    padding: 4.5rem 0 2.5rem;
    background:  #0D1222;
    backdrop-filter: blur(12px);
    position:relative;

    .foundation{
        margin-top:4rem;

        img{
            display:inline-block;
            margin:1rem 0 2rem;
        }
    }

    p{
        color: #fff;
        margin-top: 1.5rem;
        width: 50%;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
        font-family: 'Poppins';
        color: #D1E9FF;
        mix-blend-mode: normal;
    }

    .ft-about{
        img{
            display: block;
        }   
    }

    .social-media-links{
     
        img{
            margin-right:1.2rem;
            // height:25px;
            cursor:pointer;
        }
    }

    .btm-footer{
        font-weight: 400;
        padding: 0 1rem;
        font-size: 16px;
        line-height: 18px;
        text-align: left;
        color: #D1E9FF;
        opacity: 0.7;
    }

    h3{
        color: #7AD8CD;
        font-size: 21px;
        font-family: 'Sora';
        font-weight:600;
        line-height: 30px;
        margin-bottom: 1.5rem !important;
    }


    .ft-links{
        list-style-type: none;
        padding-left:0rem;

        li{
            a{
                font-size: 15px;
                line-height: 24px;
                font-weight: 400;
                font-family: 'Poppins';
                color: #D1E9FF; !important;
                padding: 0.6rem 0;
                cursor: pointer;
                display:inline-block;
            
            }
        }
    }
}










@media screen and (min-width: 1600px) {
    .footer-gradient{
        // top:-550px;

        .bg-btm{
            // width:150%;
        }
        
    }
}


@media screen and (min-width: 768px)and (max-width: 991px) {

    .footer-gradient{
        // top:-550px;

        img{
            width:auto;
        }
    }

    .footer{
        .ft-about{
            p{
                width:95%;
                text-align:left;
            }
        }
    }

}


@media screen and (min-width: 451px)and (max-width: 767px) {


    .bottom-footer{
        display:block;
        text-align:center;
        p{
            margin-top:2rem !important;
            text-align:center !important;
        }
    }

    .footer-gradient{
        top:-10
        video{
            object-fit: contain;
        }
        .bg-btm{
            width:auto;
        }
    }

    .footer{
        .ft-about{
            p{
                width:100%;
                text-align:left;
                margin-bottom:1.5rem !important;
            }
        }
    }


}

@media screen and (max-width: 450px) {
    

    .footer-gradient{
        top:-100%;
        video{
            mix-blend-mode:exclusion;
            
            object-fit: contain;
        }
        .bg-btm{
            width:auto;
        }
    }

    .bottom-footer{
        display:block;
        text-align:center;
        p{
            margin-top:2rem !important;
            text-align:center !important;
        }
    }
    
    .footer{
        padding-bottom: 1rem;
        .ft-about{
            p{
                width:100%;
                text-align:left;
                margin-bottom:1.5rem !important;
            }
        }
    }

}


`

export default FooterWrapper;
