import styled from "styled-components";


const Wrapper = styled.div`
padding: 5rem 0 3.25rem;
text-align:center;
position:relative;
background: linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22));


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
    max-width: 800px;
}

.h-500{
    height:450px;
    display:flow-root;

    .img_work{
        display:flex;
        align-items:center;
        justify-content:center;
        
    }
}

.works_container{
    margin: 3rem auto 3rem;
    width:97%;
    padding: 0 15px;
    
    .btn-container{
        padding-left:2.5rem;
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

    ul{
        margin: 0rem 0 0 0 !important;
        padding-left:20px;
        list-style: none;

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
                color: #fff;
                font-weight: bold;
                display: inline-block; 
                width: 1em;
                margin-left: -1em;
                font-size: 21px;
              }
           
        }
    }

    .pr-5{
        padding-right:5rem;
    }

    .box-container{
        display:flex;
        align-items:center;
        height:500px;

        .text-work5{
            min-height:380px;
            display:flex;
            justify-content:center;
            flex-direction:column;
        }

        .text-work1{
            min-height:315px;
            display:flex;
            justify-content:center;
            flex-direction:column;
        }
    }


    .img_work{
        display:flex;
        align-items:center;
        justify-content:center;

        .img_container{
            display:flex;
            justify-content:center;

            height:auto !important;
            
            .img1{
                width:90%;
                height:90%;
            }

         

            .img10{
                width:90%;
                height:90%;
                translate: 0% !important;
                margin-right:auto;
                display:flex;
            }


            .img5{
                width:90%;
                height:90%;
                translate: -1.2rem !important;
            }
        }


        .img_container2{
            height:auto !important;

            .img2{
                width:90%;
                height:90%;
                translate: -8% !important;
                // transform:scale(0.9) translateX(-8%) !important;
            }
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
            font-size:38px;
        }

        p{
            width:90%;
            font-size: 21px;
        }

      
    }


}

@media screen and (min-width: 768px)and (max-width: 991px) {
    .reverse-resp{
        flex-direction:column-reverse;
    }


    .h-500{
        height:auto;
    }

    .works_container{
        width:100% !important;

        h2{
            font-size:34px;
        }
        .steps-container{
            margin-top:2rem !important;
            width:100% !important;
            justify-content: center;
        }

        .btn-container{
            padding-left:0rem !important;
        }

        .step2{
            width:100% !important;
        }

        .box-container{
            height:auto !important;
            .text-work1{
                min-height:auto;
            }
        }

        .pr-5{
            padding-right:0rem;
        }

    

        .img_work{
            .img_container{
                min-height:auto;
                margin:2.5rem auto;
               
                
                .img1{
                    width:80%;
                    height:80%;
                }
                .img10{
                    width:80%;
                    height:80%;
                    translate: 0% !important;
                    margin-right:auto;
                    margin-left:auto;
                    display:flex;
                }


    
                .img5{
                    width:80%;
                    height:80%;
                    translate:-1.2rem !important;
                }
            }

            .img_container2{
                min-height:300px;
                .img2{
                    width:80%;
                    height:80%;
                    translate: 0% !important;
                }
            }
    
        }
    }

}

@media screen and (min-width: 452px)and (max-width: 767px) {
    .reverse-resp{
        flex-direction:column-reverse;
    }

    .h-500{
        height:auto;
    }

    h4{
        font-size: 21px;
    }

    h3{
        font-size: 42px;
    }

    
    .works_container{

        width:100% !important;
        h2 {
        font-size:32px;
        }
    
        .steps-container{
            margin-top:2rem !important;
            width:100% !important;
            justify-content: center;
        }

        .btn-container{
            padding-left:0rem !important;
        }

        .step2{
            width:100% !important;
        }

        .pr-5{
            padding-right:0rem;
        }


        .box-container{
            height:auto !important;
            .text-work5{
                min-height:auto;
            }

            .text-work1{
                min-height:auto;


            }
        }

        .img_work{
            .img_container{
                min-height:auto;
                margin: 2.5rem 0;
                display:flex;
                align-items:center;
                justify-content:center;
                
                .img1{
                    width:80%;
                    height:80%;
                }

                .img10{
                    width:80%;
                    height:80%;
                    margin-right:auto;
                    margin-left:auto;
                    display:flex;
                }

    
                .img5{
                    width:80%;
                    height:80%;
                    translate:-1.2rem !important;
                }
            }

            .img_container2{
                min-height:280px;
                display:flex;
                align-items:center;
                justify-content:center;
                .img2{
                    width:80%;
                    height:80%;
                    translate: 0% !important;
                }
            }
    
        }

    }

  
}

@media screen and (max-width: 451px) {
    h3{
        font-size: 30px;
    }

    h4{
        font-size: 18px;
    }

    .reverse-resp{
        flex-direction:column-reverse;
    }

    .h-500{
        height:auto;
    }

    .works_container{
        width:100% !important;
        margin: 2.5rem 0 2.5rem !important;
 h2 {
        font-size:32px;
        }
        p{
            font-size:17px;
            width:100% !important;
        }

        .steps-container{
            margin-top:2rem !important;
            width:100% !important;
            justify-content: center;
        }

        .btn-container{
            padding-left:0rem !important;
        }

        .step2{
            width:100% !important;
        }

        .pr-5{
            padding-right:0rem;
        }
        
        .box-container{
            height:auto !important;
            .text-work5{
                min-height:auto;
            }

            .text-work1{
                min-height:auto;
            }
        }


        .img_work{
            .img_container{
                margin: 2.5rem 0;
                min-height:auto;
                display:flex;
                align-items:center;
                justify-content:center;
               
                
                .img1{
                    width:100%;
                    height:100%;
                }

                .img10{
                    width:100%;
                    height:100%;
                    margin-right:auto;
                    margin-left:auto;
                    display:flex;
                }

    
    
                .img5{
                    width:100%;
                    height:100%;
                    translate:-1.2rem !important;
                }
            }

            .img_container2{
                min-height:150px;
                display:flex;
                align-items:center;
                justify-content:center;
                .img2{
                    width:100%;
                    height:100%;
                    translate: 0% !important;
                }
            }
    
        }

    }
}

`

export default Wrapper