import styled from "styled-components";


const rollsWrapper = styled.section`
    position: relative;
    z-index:10;
    // transform: translate3d(0, 0, 10000px);
    text-align:center;
    width:100%;
    padding-bottom:1.5rem;

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
            position:absolute;
            top:-55px;
            transform:translateX(-100px)
        }
    }



    .elrond{
        height:46px;
        width: 153px;
        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .polygon{
        height: 38px;
        width: 173px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .flare{
        height: 53px;
        width: 96px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .near{
        height: 60px;
        width: 154px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .bumper{
        height: 24px;
        width: 186px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .net-trading{
        height: 66px;
        width:166px;
        opacity:0.6;        

        :hover{
            opacity:1;
        }
    }
    
    .supra-oracles{
        height: 77px;
        width: 192px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .shyft{
        height: 49px;
        width:121px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .firo{
        height: 50px;
        width: 116px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
    }
    
    .sentinel{
        height: 45px;
        width: 200px;

        opacity:0.6;

        :hover{
            opacity:1;
        }
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
                top:-60px;
                transform:translateX(-150px);
                width:300px;
            }
        }
    }


    @media screen and (min-width: 991px) and (max-width: 1199px) {
        position: relative;
    }



    @media screen and (min-width: 768px)and (max-width: 991px) {
        position: relative;
    }

 

    @media screen and (min-width: 451px)and (max-width: 768px) {
        position: relative;
    }

    @media screen and (max-width: 451px) {
        position: relative;


    .elrond{
        height:36.8px;
        width: 122.4px;
    }
    
    .polygon{
        height: 30.4px;
        width: 138.4px;
    }
    
    .flare{
        height: 42.4px;
        width: 76.8px;
    }
    
    .near{
        height: 48px;
        width: 123.2px;
    }
    
    .bumper{
        height: 19.2px;
        width: 148.8px;
    }
    
    .net-trading{
        height: 52.8px;
        width:132.8px;
    }
    
    .supra-oracles{
        height: 61.6px;
        width: 153.6px;
    }
    
    .shyft{
        height: 39.2px;
        width:96.8px;
    }
    
    .firo{
        height: 40px;
        width: 92.8px;
    }
    
    .sentinel{
        height: 36px;
        width: 160px;
    }


    }
`

export default rollsWrapper