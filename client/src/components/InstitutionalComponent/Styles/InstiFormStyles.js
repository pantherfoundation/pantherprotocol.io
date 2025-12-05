import styled from "styled-components";


const FormWrapper = styled.section`

    position:relative;
    z-index:10;
    padding: 6rem 0;

    .form-container{
        width:50%;
        margin: 0 auto;
        background: rgba(99, 114, 136, 0.2);
        backdrop-filter: blur(15px);
        border-radius:15px;
        border:none;
        padding: 1.5rem 1rem;
        max-width:580px;

        .ant-spin{
            width:100%;
        }

        h6{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 113.5%;
            text-align: center;
            margin: 0.7rem 0 1.2rem !important;
        }

        h3{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 113.5%;
            text-align: center;
            letter-spacing: -0.461826px;
            color: #fff;
            opacity: 0.89;
        }

        p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18.3148px;
            line-height: 175%;
            text-align: center;
            color: #D1E9FF;
            margin: 1rem 0 0.5rem !important;

        }



        .form-section{
            width:90%;
            margin:0 auto;
            
            input, textarea{
                display:block;
                width:100%;
                margin:1rem 0;
                background: rgba(73, 89, 113, 0.3);
                backdrop-filter: blur(12px);
                border-radius: 12px;
                padding: 1rem 1.5rem;
                color: #fff;
                border:none;
                outline: none;
                font-size:18px;
            }

            textarea{
                resize:none;
                margin-bottom:1.8rem;
                
            }

            input:focus-visible{
                outline-width:0;
            }
            .glow-effects{
                width:100%;
            }

            button {
                padding: 1.1rem 2.5rem;
                border: 0;
                border-radius: 15px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 26px;
                text-align: center;
                width:100%;
                color: #06081e;
                position: relative;
                cursor: pointer;
                z-index:1;
                background: linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%);

                :hover{
                    box-shadow: -2px -2px 13px 2px rgba(135,249,194, 0.5), 2px 2px 13px 1px rgba(108, 178, 217, 0.5);
                  }
            }
        
        }
    }


    @media screen and (max-width: 1599px) {
        .form-container{
            // width:43%;


        .form-section{
            
            input, textarea{
                padding: 0.8rem 1.2rem;
            }
            }
        }

        
    }

    @media screen and (min-width: 1200px) and (max-width: 1450px) {
        .form-container{
            // width:46%;

            .form-section{
                width:95%;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .form-container{
            width:90%;

            .form-section{
                width:100%;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .form-container{
            width: 100%;

            .form-section{
                width:100%;
            }
        }

    }

    @media screen and (max-width: 768px) {
        .form-container{
            width:100%;
            padding:1.2rem 0.7rem;
            p{
                font-size:16px;
            }

            .form-section{
                width:100%;
                input, textarea{
                    padding: 0.7rem 1.2rem;
                }

              
            }
        }
    }


    @media screen and (max-width: 458px){
        .form-container{
            padding:1.2rem 0rem;
            p{
                font-size:16px;
                margin-bottom:2rem !important;
            }

            .ant-card .ant-card-body{
                padding:16px !important;
            }

            h3{
                font-size:36px;
            }

            .form-section{
                width:100%;
                input, textarea{
                    padding: 0.7rem 1.2rem;
                    font-size:16px;
                }


            }

        }
    }
    


`


export default FormWrapper