import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import Experience from './Experience'
import Certifications from './Certifications'

const Profile = (props:any) => {
  return (
    <div className='w-2/3'>
      <div className='relative'>
        <img className='rounded-t-2xl ' src="/Profile/banner.jpg"  alt="" />
        <img className='absolute w-48 h-48 -bottom-1/4 left-3 border-mine-shaft-950 border-8 rounded-full ' src="/avatar.png"  alt="" />
      </div>
      <div className='px-3 mt-16 flex flex-col gap-1'>
            <div className='text-3xl font-semibold flex justify-between'>{props.name}
                <Button color='bright-sun.4' variant='light'>Message</Button>
            </div>
            <div className='text-xl flex gap-1 items-center'><IconBriefcase stroke={1.5} className='h-5 w-5'/>{props.role} &bull; {props.company}</div>
            <div className='flex gap-1 text-lg text-mine-shaft-300 items-center '>
                <IconMapPin stroke={1.5} className='h-5 w-5' />{props.location}
            </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>About</div>
        <div className='text-sm text-mine-shaft-300 text-justify'>{props.about}</div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Skills</div>
        <div className='flex flex-wrap gap-2'>
            {
                props.skills.map((skill:any,index:any)=><div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 '>{skill}</div>
            )
            }
            
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3 '>
        <div className='text-2xl font-semibold mb-5'>Experience</div>
        <div className='flex flex-col gap-8'>
        {
            props.experience.map((exp:any, index:any)=><Experience key={index} {...exp} />)
        }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='flex flex-col gap-8'>
        <div className='text-2xl font-semibold'>Certifications</div>
        {
            props.certifications.map((cert:any, index:any)=><Certifications key={index} {...cert} />)
        }
        </div>
      </div>
    </div>
  )
}

export default Profile
