import React from 'react'
import { coursesCard } from '../../dummydata'
import './Courses.css'
const CourseCard = () => {
    return (
        <div>
            <section className='coursescard'>
                <div className='container grid2'>
                    {coursesCard.map((el) => (
                        <div className='items' key={el.id}>
                            <div className='content flex' >
                                <div className='left'>
                                    <div className='img'>
                                        <img src={el.cover} alt=''></img>
                                    </div>
                                </div>
                                <div className='text'>
                                    <h1>{el.coursesName}</h1>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <label htmlFor=''>(5.0)</label>
                                    </div>
                                    <div className='details'>
                                        {el.courTeacher.map((details)=>(
                                            <>
                                                <div className='boox'>
                                                    <div className='dimg'>
                                                        <img src={details.dcover} alt=''></img>
                                                    </div>
                                                    <div className='para'>
                                                        <h4>{details.name}</h4>
                                                    </div>
                                                </div>
                                                <span>{details.totalTime}</span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='price'>
                                <h3>{el.priceAll} / {el.pricePer}</h3>
                            </div>
                            <button className='outline-btn'>ENROLL NOW !</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CourseCard
