import styled from "styled-components";


const BlogWrapper = styled.section`
padding: 5rem 0;
position:relative;
z-index:10;
text-align:center;


.slider-btn{
    text-align:center;

    div{
        position:relative;
        z-index:11;
        transform: translate3d(0, 0, 1100px);
        display:inline-block;
    }

    .slide-left{
        cursor:pointer;
        position:absolute;
        bottom: 23.5px;
        left:-74px;
    }

    .slide-right{
        cursor:pointer;
        position:absolute;
        bottom: 23.5px;
        right:-72px;
    }
}





h4{
    font-family: 'Sora';
    display:inline-block;
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

.blog-head{
    align-items:center;
    margin-bottom: 3.5rem;
}


.link-span{
    margin-left:auto;
}

.read_more{
    position:absolute;
    bottom:8px;
    right:0;
    z-index:10;
    transform: translate3d(0, 0, 1000px);
}

p{
    font-family: 'Sora';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 25px;
    color: #7AD8CD;
    letter-spacing: -0.528045px;
    display:flex;
    align-items:center;
    justify-content:right;
    cursor: pointer;


    span{
        display: inline-block;
        cursor: pointer;
    }


    img{
        display:inline-block;
        margin-top:4px;
        margin-left: 0.8rem;
        cursor: pointer;
    }
  
}


@media screen and (min-width: 1550px){
    h4{
        font-size: 22px;
        line-height: 42px;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {}

@media screen and (min-width: 768px)and (max-width: 995px) {

    .slider-btn{
    
        .slide-left{
            bottom: 23.5px;
            left:-98px;
        }
    
        .slide-right{

            bottom: 23.5px;
            right:-96px;
        }
    }

}

@media screen and (min-width: 577px)and (max-width: 767px) {
    h4{
        font-size: 21px;
        
    }

    p{
        justify-content:right;
    }

    .read_more{
        position:relative;
        display:block;
        margin: 1rem auto 0 auto;
    }

    .slider-btn{
    
        .slide-left{
            bottom: 64.5px;
            left:-98px;
        }
    
        .slide-right{

            bottom: 64.5px;
            right:-96px;
        }
    }
}


@media screen and  (max-width: 700px) {
    .slider-btn{
    
        .slide-left{
            bottom: 64.5px;
            left:-146px;
        }
    
        .slide-right{
            bottom: 64.5px;
            right:-144px;
        }
    }
}
@media screen and (min-width: 451px)and (max-width: 576px) {
    h4{
        font-size: 21px;
        
    }

    .blog-head{
        margin-bottom: 4rem;
    }

    p{
        justify-content:center;
    }

    .read_more{
        position:relative;
        display:block;
        margin: 1rem auto 0 auto;
    }
}

@media screen and (max-width: 451px) {

    h4{
        font-size: 18px; 
    }

    .read_more{
        position:relative;
        display:block;
        margin: 1rem auto 0 auto;
    }

    .blog-head{
        margin-bottom: 4rem;
    }

    p{
        justify-content:center;
    }
}




.mySwiper{
    color: #fff;
    padding-bottom: 6rem;
}


.swiper-pagination-bullet{
    background: #7AD8CD; !important;
    width: 13px;
    height: 13px;
}






`


export default BlogWrapper;