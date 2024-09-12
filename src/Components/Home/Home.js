import React from 'react'
import Hero from './Hero/Hero'
import AboutCurd from '../About/AboutCurd'
import HAbout from './HAbout'
import Test from './Testomentional/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'


export default function Home() {
    return (
        <div>
            <Hero/>
            <AboutCurd/>
            <HAbout/>
            <Test/>
            <Hblog/>
            <Hprice/>
        </div>
    )
}
