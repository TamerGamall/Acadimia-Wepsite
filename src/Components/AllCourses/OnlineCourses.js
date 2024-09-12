import React from 'react'
import Title from '../common/Title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <div>
      <section className='online'>
        <div className='container'>
            <Title subtitle={"COURSES"} title={"Browse Our Online Courses"}/>
            <div className='content grid3'>
                {online.map((el)=>(
                    <div className='box'>
                        <div className='img'>
                            <img src={el.cover} alt=''></img>
                            <img src={el.hoverCover} alt='' className='show'></img>
                        </div>
                        <h1>{el.courseName}</h1>
                        <span>{el.course}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineCourses
