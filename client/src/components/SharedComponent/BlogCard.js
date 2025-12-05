import React from 'react'
import Wrapper from './Styles/BlogStyles'


const BlogCard = ({item}) => {

  return (

    <Wrapper>
        <div className='blog-card'>
        <div className='sec-overlay'>
        
        <div className='sec-layer'>

        <a target='_blank' href={item?.link}>
          <div className='img-container'>
            {item?.img}
          </div>
          <h3>{item?.title} </h3>

          <div className='div'>
            <p>{item?.date}</p>
          </div>
          </a>
          </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default BlogCard