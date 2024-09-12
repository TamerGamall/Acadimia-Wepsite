import React from 'react'
import { price } from '../../dummydata'
import './Price.css'
const PriceCard = () => {
    return (
        <div className='display'>
            {price.map((el) => (
                <div className='items shadow'>
                    <h4>{el.name}</h4>
                    <h1>
                        <span>{"$"}</span>
                        {el.price}
                    </h1>
                    <p>{el.desc}</p>
                    <button className='outline-btn'>GET STARTED</button>
                </div>
            ))}
        </div>
    )
}

export default PriceCard
