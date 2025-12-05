import styled from "styled-components";


const NavWrapper = styled.main`
position:relative;
z-index:20;



.main-navbar{
    padding-top: 1.5rem;
    color: #fff;

    .resp-hide{
        display:none;
    }

    .resp-links{
        display:none;
    }

    .nav-container{

        img{
            width:220px;
            height:auto;
        }

        .social-media-links{
     
            img{
                margin-right:1rem;
                height:38px;
                width:38px;
                cursor:pointer;
            }
        }
        
        display:flex;
        align-items: center;
        justify-content: space-between;

        .resp-nav{
            display:none;
        }

        ul{
            display:flex;
            align-items:center;
            justify-content:center;
            list-style-type: none;
            margin-bottom: 0;
            padding:0;

            li{
                display: inline-block;
                margin: 0  1rem;
                font-family: 'Inter';
                font-style: normal;
                text-align:center;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.2 !important;
                cursor: pointer;
                color: #fff !important;    

                .hovered{
                    background: rgba(99, 114, 136, 0.2);
                    mix-blend-mode: normal;
                    backdrop-filter: blur(20.1913px);
                    border-radius: 25px;
                    padding: 0.6rem;
                    width:150px !important;
                }

                .hovered2:hover{
                    background: rgba(99, 114, 136, 0.2);
                    mix-blend-mode: normal;
                    backdrop-filter: blur(20.1913px);
                    border-radius: 25px;
                    padding: 0.6rem 1.2rem;
                    width:75px !important;
                }
                
                .dropdown-link{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:150px;

                    span{
                        display:inline-block;
                        
                    }

                    svg{
                        display:inline-block;
                        margin-left: 1rem;
                        margin-top:5px;
                    }

              
                }
            }

            li:last-child{
                width:75px;
            }

            
        }

        

        button{
            position:relative;
            background: transparent;
            border:0;
            display:flex;
            justify-content:center;
            align-items: center;
            cursor:pointer;
            padding:0;
            border-radius:15px;
              :hover{
                   border-radius:15px;
                   box-shadow:   -2px -2px 10px 1px rgba(135,249,194, 0.4), 2px 2px 10px 1px rgba(108, 178, 217, 0.4);
                   -webkit-box-shadow: -2px -2px 10px 2px rgba(135,249,194, 0.4), 2.2px 2.2px 10px 2px rgba(108, 178, 217, 0.4);
                   -moz-box-shadow: -2px -2px 10px 2px rgba(135,249,194, 0.4), 2px 2px 10px 2px rgba(108, 178, 217, 0.4);
                }

          
            svg{
                cursor:pointer;
            
            }
           

            span{
                position:absolute;
                font-weight: 600;
                font-size: 16px;
                font-family: 'Inter' !important;
                line-height: 22px;
                cursor:pointer;
                color:#fff !important;
                z-index:-1;
        
            }


            img{
                display:inline-block;
                width:10px;
                position:relative;
                margin-left:0.5rem;
            }
        }
    }
}

// @media screen and (min-width: 1550px) {
//     .main-navbar{
//         padding-top: 1.5rem;
//     }
// }

@media (max-width: 1100px) and (min-width: 900px) {
    .main-navbar .nav-container ul li{
        margin: 0 0.3rem;
        font-size:15px;

        :last-child{
            margin-right:0 0.3rem;;
        }
    }

    .nav-container{
        img{
            width: 190px;
        }


        .social-media-links{
     
            img{
                margin-right:1rem;
                height:38px;
                width:38px;
                cursor:pointer;
            }
        }
    }
    
}



@media (max-width: 900px) {

    a{
        display:inline-block;
    }

    .hide-links{
        display: none;
    }
          

    .main-btn{
        margin-top:auto;
        margin-bottom:1.5rem;
        display:block;
    }

    .main-nav-resp{
        margin-top: 0rem !important;
        position:relative;
        z-index:102;
        width:100%;
        top:0;
    }

  
 
    .resp-dropdown a{
        display:block;
    }

    .respWide{
        display:flex;
        height:100%;
        flex-direction:column;
    }

    .main-navbar{

        ul{
            padding-left:0;
        }


        .resp-hide{
            display:none;
        }
        .resp-links{
            padding-top:30px;
            display: block;
            position: fixed;
            bottom:0;
            z-index:10;
            // transform: translate3d(0, 0, 1000px);
            left:0;
            right:0;
            top:75px;
            height:auto;
            background:#030619;
            overflow-y:scroll !important;
            
            

            .social-media-links{
                margin-left:1rem;
                margin-top:1rem;
                img{
                    margin-right:1rem;
                    height:32px;
                    width:32px;
                    cursor:pointer;
                }
            }


          
            button{

                background: linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%);
                border:0;
                border-radius: 15px;
                width:100%;
                padding: 1rem ;
                cursor:pointer;
            

                span{
                    font-style: normal;
                    font-family: 'Inter' !important;
                    font-size: 18px;
                    font-weight:700;
                    line-height: 22px;
                    color: #06081e !important;
                }

                img{
                    display:inline-block;
                    width:10px;
                    position:relative;
                    margin-left:0.5rem;
                }
    


            }


            ul{
                list-style-type:none;

                .active{
                    display:block !important;
                }

                .resp-dropdown{
                    display:none;

                    li{
                        display: flex;
                        margin-left: 1rem;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 30px;
                        margin-top: 1rem;
                        align-items:center;
                        color: #fff !important; 
                        opacity: 0.8;   

                        svg{
                            display: inline-block;
                            margin-left:0.5rem;
                            color: #D1E9FF;
                            color: #fff !important; 
                            font-size: 21px;
                        }
                    }
                }

                li{
                    display: flex;
                    margin-left: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 35px;
                    margin-top: 2rem;
                    align-items:center;
                    color: #fff !important; 
                    opacity: 0.8;   

                    svg{
                        display: inline-block;
                        margin-left:0.5rem;
                        color: #D1E9FF;
                        font-size: 21px;
                    }
                }
            }
        }


  
        .nav-container{
                img{
                    width: 190px;
                }
                .hide-links{
                    display: none;
                }


          .resp-nav{
            display:block;


    

            ul{
                display:block;
            }

            span{
                cursor:pointer;
                display:block;
                svg{
                    font-size:30px;
                }
            }
           
          }
        }
    }





`


export default NavWrapper;