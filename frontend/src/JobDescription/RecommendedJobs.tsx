import React from 'react'
import { jobList } from '../Data/JobsData'
import JobCard from '../FindJobs/JobCard'

const RecommendedJobs = () => {
  return (
    <div>
      <div className='size-xl font-semibold mb-5 '>Recommended Jobs</div>
      <div className='flex flex-col flex-wrap gap-5 justify-between'>
        {
            jobList.map((job:any, index:any)=>index<5 &&<JobCard key={index} {...job} />)
        }
      </div>
    </div>
  )
}

export default RecommendedJobs
