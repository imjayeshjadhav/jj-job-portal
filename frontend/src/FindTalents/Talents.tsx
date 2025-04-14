import React from 'react'
import Sort from '../FindJobs/Sort'
import { talents } from '../Data/TalentData'
import TalentCard from './TalentCard'

const Talents = () => {
  return (
    <div className='px-5 py-5'>
      <div className="flex justify-between mt-5">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort/>
      </div>
      <div className="flex mt-10 flex-wrap gap-5">
        {
            talents.map((talent,index)=><TalentCard key={index} {...talent} />)
        }
      </div>
    </div>
  )
}

export default Talents
