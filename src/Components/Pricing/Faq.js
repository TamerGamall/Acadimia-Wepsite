import React, { useState } from 'react'
import Title from '../common/Title/Title'
import { faq } from '../../dummydata'

const FAQ = () => {
    const [click, setClick] = useState(false);
    const toggle = (index) => {
        if (click === index) {
            return setClick(null)
        }
        setClick(index)
    }
    return (
        <div>
            <Title subtitle={"FAQS"} title="Frequesntly Ask Questions" />
            <section className='faq'>
                <div className='container'>
                    {faq.map((el, index) => (
                        <div className='box'>
                            <button className='accordion' onClick={() => toggle(index)} key={index}>
                                <h2>{el.title}</h2>
                                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                            </button>
                            {click === index ? (
                                <div className='text'>
                                    <p>{el.desc}</p>
                                </div>
                            ): null}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FAQ;
