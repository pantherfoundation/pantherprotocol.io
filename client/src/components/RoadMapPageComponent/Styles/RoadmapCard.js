import styled from "styled-components";


const Wrapper = styled.div`

margin:1.5rem 0;
backdrop-filter:blur(40px);
position:relative;
z-index:10;
transform: translate3d(0, 0, 1000px);

.ant-card{
    border:0;
    background: #1E2740;
    width: 100%;
    backdrop-filter:blur(40px);

    .ant-card-body{
        padding: 24px 30px;

        h5{
            font-family: "Poppins";
            font-size:18px;
            color: #D1E9FF;
            font-weight: 600;
            margin-bottom:0.5rem !important;
            line-height: 1.1;
        }
        
        ul{
            list-style:none;
            margin: 0 !important;
            padding: 0 !important;
            

            .li-dot{
                display:flex;
                align-items:center;
                padding-top:0.4rem;
    
                img{
                    display: inline-block;
                }


                .li-text{
                    font-family: "Poppins";
                    margin-left: 1rem;
                    font-size:16px;
                    color: #fff;
                    font-weight: 400;
                }
            }
         
        }
    }
}


`

export default Wrapper;