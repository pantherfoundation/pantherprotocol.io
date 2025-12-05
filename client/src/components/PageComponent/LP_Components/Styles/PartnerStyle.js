import styled from "styled-components";


const PartnerWrapper = styled.section`
padding: 5rem 0;
position:relative;
z-index:10;
text-align:center;


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
    margin-bottom: 3.5rem !important;

}

.small-screens{
    display:none;
}

.big-screens{
    display:flex;
}

.itemLogo{
    margin:0  2rem;
}


.ant-col{
    text-align:center;
}

.imgLogo{
    height:auto;
}

.partners_logo{
    opacity:0.6;
    cursor: pointer;
}

.partners_logo:hover{
    opacity:1;
}

.purefi{
    height:45px;
    width: auto;
}

.chainalysis{
    height: 45px;
    width: auto;
}

.amlbot{
    height: 45px;
    width: auto;
}






@media screen and (min-width: 1550px){
    h4{
        font-size: 22px;
        line-height: 42px;
    }
}


@media screen and (min-width: 992px) and (max-width: 1199px) {}


@media screen and (min-width: 768px)and (max-width: 991px) {
    .big-screens{
        display:none;
    }
    .small-screens{
        display:flex;
    }
}



@media screen and (min-width: 451px)and (max-width: 767px) {
    .big-screens{
        display:none;
    }
    .small-screens{
        display:flex;
    }

    h4{
        font-size: 21px;
        
    }
}


@media screen and (max-width: 451px) {
    .big-screens{
        display:none;
    }
    .small-screens{
        display:flex;
    }
    h4{
        font-size: 18px;
        
    }

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

@media screen and (max-width: 375px) {
    .big-screens{
        display:none;
    }
    .small-screens{
        display:flex;
    }
    
    h4{
        font-size: 18px;
        
    }
    
    .elrond{
        height:32.2px;
        width: 107.1px;
    }
    
    .polygon{
        height: 26.6px;
        width: 121.1px;
    }
    
    .flare{
        height: 37.1px;
        width: 67.2px;
    }
    
    .near{
        height: 42px;
        width: 107.8px;
    }
    
    .bumper{
        height: 16.8px;
        width: 130.2px;
    }
    
    .net-trading{
        height: 46.2px;
        width:116.2px;
    }
    
    .supra-oracles{
        height: 53.9px;
        width: 134.4px;
    }
    
    .shyft{
        height: 34.3px;
        width: 84.7px;
    }
    
    .firo{
        height: 35px;
        width: 81.2px;
    }
    
    .sentinel{
        height: 31.5px;
        width: 140px;
    }
}
`


export default PartnerWrapper