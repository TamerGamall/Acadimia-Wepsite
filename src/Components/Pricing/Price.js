import React from 'react'
import Back from '../common/Back/Back'
import PriceCard from './PriceCard'
import './Price.css'
import FAQ from './Faq'

const Price = () => {
    return (
        <>
            <Back title={"Choose The Right Plan"} />
            <section className='price padding '>
                <div className='container  '>
                    <PriceCard />
                </div>
            </section>
            <FAQ/>
        </>
    )
}

export default Price
