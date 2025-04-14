import React from 'react'
import SearchBar from '../FindJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../FindJobs/Jobs'
import JobCard from '../FindJobs/JobCard'

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="xs" mx="md" />
        <SearchBar/>
        <Divider size="xs" mx="md" />
        <Jobs/>
    </div>
  )
  
}

export default FindJobs
