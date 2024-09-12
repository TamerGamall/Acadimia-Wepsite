import React from 'react'
import Back from '../common/Back/Back'
import TeamCard from './TeamCard'
import './Team.css'

const Team = () => {
    return (
        <div>
            <Back title='Team' />
            <section className='team padding'>
                <div className='container  '>
                    <TeamCard />
                </div>
            </section>
        </div>
    )
}

export default Team
