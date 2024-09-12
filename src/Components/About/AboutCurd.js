import React from 'react'
import Title from '../common/Title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import './About.css'
const AboutCurd = () => {
    return (
        <div>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src='https://raw.githubusercontent.com/sunil9813/Education-Website-Using-ReactJS/master/public/images/about.webp' alt=''></img>
                    </div>
                    <div className='right row'>
                        <Title subtitle={"LEARN ANYTHING"} title={"Benfits About Online Learning Expertise"}/>
                        <div className='items'>
                            {homeAbout.map((el)=>(
                                <div className='item flexSB'>
                                    <div className='img'>
                                        <img src={el.cover} alt=''></img>
                                    </div>
                                    <div className='text'>
                                        <h2>{el.title}</h2>
                                        <p>{el.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper/>
        </div>
    )
}

export default AboutCurd
