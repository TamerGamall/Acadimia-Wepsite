import React from "react"
import PriceCard from "../Pricing/PriceCard"
import Title from "../common/Title/Title"

const Hprice = () => {
    return (
        <>
            <section className='hprice padding'>
                <Title subtitle='OUR PRICING' title='Pricing & Packages' />
                <div className='price container display'>
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Hprice