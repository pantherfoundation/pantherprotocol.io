import styled from "styled-components";


const NewsWrapper = styled.section`
padding: 4rem 0 7rem;;
position:relative;
z-index:12;
transform: translate3d(0, 0, 1000px);


h4{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.61;
    color: #fff;
    margin-bottom: 2rem !important;
}

p{
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    width: 45%;
    margin: 0 auto 4rem auto !important;
    color: #D1E9FF;
}

h6{
    width:45%;
    padding: 0.8rem 0.8rem 0.6rem 1.5rem;
    margin-left: auto;
    margin-right:auto;
    font-size:16px;
}

.form-cta{

    position:relative;
    z-index:14;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius: 15px;  
    padding: 0.6rem 0.6rem 0.6rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    width: 45%;
    margin: 0 auto;
    border: 3px solid transparent;

    input{
        background:transparent;
        padding: 6px 6px 6px 10px;
        display: block;
        color: #fff;
        width: 65%;
        border:none;
        outline: none;
    }

    input:focus-visible{
         outline-width:0;
     }
 

    .button{
        display: flex;
        align-items: center;
        position:relative;
        padding:0;
        cursor:pointer;

        :hover{
            // box-shadow:   -2px -2px 10px 2px rgba(135,249,194, 0.65), 2px 2px 10px 2px rgba(108, 178, 217, 0.65);
        }
        .btn-svg{
            width: 166px;
            height:50px;
        }

        span{
            position:absolute;
            width:99%;
            color: #fff;
            text-align:center;
            cursor: pointer;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
            font-family: 'Inter';
        }
    }


    button{
        background:transparent;
        border:0;
        position:relative;


        img{
            display:inline-block;
            position:relative;
            width:10px;
            margin-top: -1px;
            margin-left:0.5rem;
        }
    }


}

@media screen and (min-width: 1550px){

    h4{
        font-size: 54px;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    p{
        font-size: 20px;
        line-height: 35px;
        width:75%;
    }
    
    h6{
        width: 65%;
    }
    .form-cta{
        width: 65%;

        input{
            width: 70%;
        }
    }
}

@media screen and (min-width: 768px)and (max-width: 991px) {

    p{
        font-size: 20px;
        line-height: 35px;
        width:80%;
    }

    h6{
        width: 60%;
    }

    .form-cta{
        width: 65%;


        input{
            width: 65%;
        }
    }

}

@media screen and (min-width: 451px)and (max-width: 767px) {
    h4{
        font-size: 42px;
        width:100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size: 20px;
        line-height: 35px;
        width:80%;
        margin-bottom: 3rem !important;
    }

    h6{
        width: 92%;
        padding: 0.9rem 1rem 0.9rem 1.2rem;
    }
    .form-cta{
        width: 92%;
        padding: 0.9rem 1rem 0.9rem 1.2rem;

        input{
            width: 65%;
        }

        .button{
            .btn-svg{
                width: 141px;
                height:42.5px;
            }
        }

        button{
 


            img{
                display:inline-block;
                width:8px;
                height:auto;
                margin-left:0.3rem;
            }
        }
    }


}

@media screen and (max-width: 451px) {
    h4{
        font-size: 30px;
        width:100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size:16px;
        line-height: 25px;
        width:100%;
        margin-bottom: 3rem !important;
    }

    h6{
        width: 100%;
        padding: 0.8rem 0.8rem 0.8rem 1rem;
    }
    
    .form-cta{
        width: 100%;
        padding: 0.6rem 0.6rem 0.6rem 1rem;
        
        input{
            width: 65%;
        }

        .button{
            .btn-svg{
                width: 124px;
                height:37.5px;
            }

            span{

                font-size: 14px;
                line-height: 14px;

            }
        }

        button{
            


            img{
                display:inline-block;
                width:8px;
                height:auto;
                margin-left:0.3rem;
            }
        }

        
    }
}


@media screen and (max-width: 400px) {
    .form-cta{
     

        .button{
            .btn-svg{
                width: 110px;
                height:34px;
            }
        }

        
    }
}


`

export default NewsWrapper