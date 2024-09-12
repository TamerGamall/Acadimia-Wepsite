import React from 'react'
import { awrapper } from '../../dummydata'

const AWrapper = () => {
  return (
    <div>
        <section className='awrapper'>
            <div className='container grid'>
                {awrapper.map((el)=>(
                    <div className='box flex'>
                        <div className='img'>
                            <img src={el.cover} alt=''></img>
                        </div>
                        <div className='text'>
                            <h1>{el.data}</h1>
                            <h3>{el.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AWrapper
