import React from 'react'
import { blog } from '../../dummydata'
import './Blog.css'
const BlogCard = () => {
  return (
    <div className='grid2'>
        {blog.map((el)=>(
            <div className='items shadow'>
                <div className='img'>
                    <img src={el.cover} alt=''></img>
                </div>
                <div className='text'>
                    <div className='admin flexSB'>
                        <span>
                            <i className='fa fa-user'></i>
                            <label htmlFor=''>{el.type}</label>
                        </span>
                        <span>
                            <i className='fa fa-calendar-alt'></i>
                            <label htmlFor=''>{el.date}</label>
                        </span>
                        <span>
                            <i className='fa fa-comments'></i>
                            <label htmlFor=''>{el.com}</label>
                        </span>
                    </div>
                    <h1>{el.title}</h1>
                    <p>{el.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BlogCard
