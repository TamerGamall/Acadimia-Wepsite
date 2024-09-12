import React from 'react'
import Title from '../../common/Title/Title'
import { testimonal } from '../../../dummydata'
import './Style.css'
const Test = () => {
  return (
    <div>
      <section className='testimonal padding'>
        <div className='container'>
            <Title subtitle={"TESTIMONIAL"} title={"Our Succesful Students"}/>
            <div className='content grid2'>
                {testimonal.map((el=>(
                    <div className='items shadow'>
                        <div className='box flex'>
                            <div className='img'>
                                <img src={el.cover} alt=''></img>
                                <i className='fa fa-quote-left icon'></i>
                            </div>
                            <div className='name'>
                                <h2>{el.name}</h2>
                                <p>{el.post}</p>

                            </div>
                        </div>
                        <p>{el.desc}</p>
                    </div>
                )))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Test
