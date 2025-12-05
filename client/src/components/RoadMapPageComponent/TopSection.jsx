import {useState} from 'react'
import styled from "styled-components";
import Wrapper from './Styles/TopSectionStyles'
import { Navbar } from '../SharedComponent';


const TopGradient = styled.div`
position:absolute;
z-index:2;
opacity:0.2;
background:radial-gradient( rgba(34, 36, 80, 0) 0, rgba(34, 36, 80,0.5) 60%, rgba(34, 36, 80, 0) 100%);
filter:blur(100px);
width:100%;
height:100%;
top:-10%;



@media screen and (max-width: 768px){
  height:150%;
}


`

const TopSection = () => {
  const [update, setUpdate] = useState(true)


  const handleUpdate = (id)=>{
    if(id === true){
      setUpdate(false)
    }else{
      setUpdate(true)

    }
  }
  return (
    <div className='relative'>
   {/* {update && <TopGradient> 
      </TopGradient>} */}

<Navbar  updateValue={handleUpdate} />
    <Wrapper>  
        <div 
        className='container'>
            <h3 data-aos="fade-up" data-aos-duration="500">The Panther</h3>
            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" >Roadmap</h2>
            <p data-aos="fade-up"  data-aos-duration="500" data-aos-delay="500">Explore Panther’s past achievements, current endeavours and future milestones. With the implementation of the Panther DAO, we aim for full decentralization by 2024.</p>

            <span data-aos="fade-up"  data-aos-duration="500" data-aos-delay="600"> Last Update: Jun 10, 2023 </span>
        </div>
    </Wrapper>
    </div>
  
  )
}

export default TopSection