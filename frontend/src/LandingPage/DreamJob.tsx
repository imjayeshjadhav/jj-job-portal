import { Avatar,  TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const DreamJob = () => {
  return (
    <div className='flex items-center px-16 overflow-x-hidden -mt-5 '>
      <div className='flex flex-col w-[45%] gap-3'>
        <div className='text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 '>
            Find your <span >dream</span> <span>job</span> With Us
        </div>
        <div className='text-lg text-mine-shaft-200 '>
            Good Life Begins with a Good Company. Start explore thousands of jobs in one place.
        </div>
        <div className='flex gap-3 mt-5'>
            <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100' variant='unstyled' label="Job Title" placeholder='Software Developer' />
            <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100' variant='unstyled' label="Job Type" placeholder='Full Time' />
            <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer ">
                <IconSearch className='h-[85%] w-[85%]' />
            </div>
        </div>
      </div>
      <div className='w-[55%] flex items-center justify-center'>
        <div className='w-[35rem] '>
            <img src="/Boy.png" alt="" />
                <div className="absolute right-[160px] w-fit top-[12%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                    <div className="text-center mb-1 text-sm text-mine-shaft-100">10k+ got job</div>
                    <Avatar.Group>
                        <Avatar src="avatar.png"/>
                        <Avatar src="avatar1.png"/>
                        <Avatar src="avatar2.png"/>
                        <Avatar>+9k</Avatar>
                    </Avatar.Group>
                </div>
            <div className="absolute left-[750px] w-fit top-[10%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col ">
               <div className='flex gap-2 items-center'>
                   <div className='w-12 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                        <img src="/Icons/Google.png" alt=""  />
                   </div>
                   <div className='text-sm text-mine-shaft-100'>
                        <div>Software Engineer</div>
                        <div className='text-mine-shaft-200 text-xs '>Alandi</div>
                    </div> 
               </div>
               <div className='flex gap-2 justify-around text-mine-shaft-200 text-xs'>
                    <span>1 day ago</span>
                    <span>120 Applicants</span>
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob
