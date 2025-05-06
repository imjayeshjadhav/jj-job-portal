import { Divider } from '@mantine/core'
import React from 'react'
import JobHistory from '../JobHistory/JobHistory'

const JobHistoryPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4 '>
        <div className='my-5'>
            <JobHistory/>
        </div>
    </div>
  )
}

export default JobHistoryPage
