import { Button} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import JobDesc from '../JobDescription/JobDesc'
import RecommendedJobs from '../JobDescription/RecommendedJobs'

const JobDescriptionPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4 '>
      <Link className='object-contain my-4 inline-block' to="/find-talent">
            <Button leftSection={<IconArrowLeft size={20}/> } color='bright-sun.4' variant="light"  >Back</Button>
      </Link>
      <div className='flex gap-5 justify-around'>
        <JobDesc/>
        <RecommendedJobs/>
      </div>
    </div>
  )
}

export default JobDescriptionPage
