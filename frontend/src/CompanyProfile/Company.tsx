import { Avatar, Button, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import AboutComp from './AboutComp'
import JobComp from './JobComp'
import EmpComp from './EmpComp'

const Company = () => {
  return (
    <div className='w-3/4 '>
      <div className='relative'>
        <img className='rounded-t-2xl ' src="/Profile/banner.jpg"  alt="" />
        <img className='absolute w-48 h-48 p-2 -bottom-1/4 left-3 border-mine-shaft-950 bg-mine-shaft-950 border-8 rounded-3xl' src="/Icons/Google.png"  alt="" />
       </div>
    <div className='px-3 mt-12'>
        <div className='text-3xl font-semibold flex justify-between'>Google
            <Avatar.Group>
                <Avatar src="avatar.png" />
                <Avatar src="avatar1.png" />
                <Avatar src="avatar2.png" />
                <Avatar>+10k</Avatar>
            </Avatar.Group>
        </div>
        <div className='flex gap-1 text-lg text-mine-shaft-300 items-center '>
            <IconMapPin stroke={1.5} className='h-5 w-5' />Alandi
        </div>
        <Divider mx="xs" my="xl" />
        <div>
        <Tabs variant='outline' radius="lg" defaultValue="about">
        <Tabs.List className='[&_button]:text-lg [&_button]:font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value='about'>About </Tabs.Tab>
            <Tabs.Tab value='jobs' >Jobs</Tabs.Tab>
            <Tabs.Tab value='employees' >Employees</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='about'><AboutComp/></Tabs.Panel>
        <Tabs.Panel value='jobs'><JobComp/></Tabs.Panel>
        <Tabs.Panel value='employees'><EmpComp/></Tabs.Panel>
        </Tabs>
        </div>
    </div>
    </div>
  )
}

export default Company
