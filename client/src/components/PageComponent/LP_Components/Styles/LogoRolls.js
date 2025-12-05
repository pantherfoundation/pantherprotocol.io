import styled from "styled-components";


const rollsWrapper = styled.section`
    position: relative;
    z-index:10;
    transform: translate3d(0, 0, 1000px);
    text-align:center;
    width:100%;
    padding-bottom:1.5rem;

    .small-screens{
        display:none;
    }

    .big-screens{
        display:flex;
    }

    .div{
        text-align:center;
        display:inline-block;

        p{
            font-family: 'Sora';
            font-style: normal;
            font-weight: 400;
            font-size:18px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.32em;
            text-transform: uppercase;
            background: #70727C;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            opacity: 1;
            position:absolute;
            top:-55px;
            transform:translateX(-100px)
        }
    }



    .partners_logo{
        opacity:0.7;
        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
    }

    .ethereum{

        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
     
    }

    .polygon{
        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
    }

    .flare{
        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
    }

    .avalanche{
        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
    }

    .near{
        position:relative;
        z-index:100;
        transform: translate3d(0, 0, 10000px);
    }
    @media screen and (max-width: 520px) {
        .div{
            p{
                font-size:21px;
                line-height:40px;
                top:-60px;
                width:300px;
                transform:translateX(-150px)
            }
        }
    }

    @media screen and (min-width: 1600px) {
        padding-bottom:3rem;

        .div{
            p{
                font-size:21px;
                line-height:40px;
                top:-65px;
                top:-75px;
                width:300px;
                transform:translateX(-150px)
            }
        }
    }

    @media screen and (max-width: 402px) {
        .div{
            p{
                top:-50px;
                transform:translateX(-120px);
                width:250px;
                font-size:19px;
            }
        }
    }


    @media screen and (min-width: 991px) and (max-width: 1199px) {
        position: relative;
    }



    @media screen and (min-width: 768px)and (max-width: 991px) {
        position: relative;
        .big-screens{
            display:none;
        }
        .small-screens{
            display:flex;
        }
 
    }

 

    @media screen and (min-width: 451px)and (max-width: 768px) {
        position: relative;

        .big-screens{
            display:none;
        }
        .small-screens{
            display:flex;
        }


        .avalanche{
            width: auto;
            height:auto;
        }

    }

    @media screen and (max-width: 451px) {
        position: relative;

        .big-screens{
            display:none;
        }
        .small-screens{
            display:flex;
        }

        .ethereum{
            width: 129.24px;
            height:auto;
        }
    
        .polygon{
            width: 117.9px;
            height:auto;
        }
    
        .flare{
            width: 100.72px;
            height:auto;
        }
    
        .avalanche{
            width: 131.296px;
            height:auto;
        }
    
        .near{
            width: 106px;
            height:auto;
        }
    }
`

export default rollsWrapper