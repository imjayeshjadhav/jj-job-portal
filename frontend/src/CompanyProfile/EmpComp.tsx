import React from 'react'
import { talents } from '../Data/TalentData'
import TalentCard from '../FindTalents/TalentCard'

const EmpComp = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-10">
        {
            talents.map((talent,index)=>index<6 &&<TalentCard key={index} {...talent} />)
        }
      </div>
  )
}

export default EmpComp
