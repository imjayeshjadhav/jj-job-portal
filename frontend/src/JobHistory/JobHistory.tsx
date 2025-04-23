import { Tabs } from '@mantine/core'
import React from 'react'
import { jobList } from '../Data/JobsData'
import Card from './Card'

const JobHistory = () => {
  return (
    <div>
      <div className='text-2xl font-semibold mb-5'>Job History</div>
      <div>
        <Tabs variant='outline' radius="lg" defaultValue="Applied">
        <Tabs.List className='[&_button]:text-lg [&_button]:font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value='Applied'>Applied </Tabs.Tab>
            <Tabs.Tab value='Saved' >Saved</Tabs.Tab>
            <Tabs.Tab value='Offered' >Offered</Tabs.Tab>
            <Tabs.Tab value='interviewing' >Interviewing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='Applied'>
        <div className='mt-10 flex flex-wrap gap-5 '>
            {
            jobList.map((job,index)=><Card key={index} {...job} applied />)
            }
        </div>  
        </Tabs.Panel>
        <Tabs.Panel value='Saved'>
        <div className='mt-10 flex flex-wrap gap-5 '>
            {
            jobList.map((job,index)=><Card key={index} {...job} saved />)
            }
        </div>  
        </Tabs.Panel>
        <Tabs.Panel value='Offered'>
        <div className='mt-10 flex flex-wrap gap-5 '>
            {
            jobList.map((job,index)=><Card key={index} {...job} offered />)
            }
        </div>  
        </Tabs.Panel>
        <Tabs.Panel value='interviewing'>
        <div className='mt-10 flex flex-wrap gap-5 '>
            {
            jobList.map((job,index)=><Card key={index} {...job} interviewing />)
            }
        </div>  
        </Tabs.Panel>
        </Tabs>
       </div>
    </div>
  )
}

export default JobHistory
