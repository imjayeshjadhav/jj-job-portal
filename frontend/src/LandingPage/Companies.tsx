import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../Data/Data'

const Companies = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className="text-4xl text-center text-mine-shaft-100 font-semibold mb-10"  >Trusted by <span className='text-bright-sun-400'>1k+</span> Companies</div>
      <Marquee pauseOnHover={true}>
        {
            companies.map((company,index)=>
            <div key={index} className='mx-8 px-2 py-2 hover:bg-mine-shaft-900 rounded-xl'>
                <img src={`/Companies/${company}.png`} className='h-14 cursor-pointer' alt={company} />
            </div>)
        }
        <div>
            <img src="" alt="" />
        </div>
      </Marquee>
    </div>
  )
}

export default Companies
