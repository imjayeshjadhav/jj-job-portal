import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'
import DOMPurify from 'dompurify'
//@ts-ignore
const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className='w-2/3 '>
      <div className='flex justify-between '>
        <div className='flex gap-2 items-center'>
          <div className='p-3 bg-mine-shaft-800 rounded-xl'>
            <img src={`/Icons/Google.png`} className='h-14 ' alt="" />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-semibold text-2xl'>Software Engineer</div>
            <div className='text-lg text-mine-shaft-300 '>Google &bull; 3 days ago &bull; 48 Applicants</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
            <Link to="/apply-job">
            <   Button color='bright-sun.4' size='sm' variant='light'>Apply</Button>
            </Link>
            <IconBookmark className='cursor-pointer text-bright-sun-400' stroke={1.5}/>
        </div>
      </div>
        <Divider my="xl"/>
        <div className='flex justify-between '>
          {
            card.map((item:any,index:any)=><div key={index} className='flex flex-col items-center gap-1'>
            <ActionIcon color='bright-sun.4' variant='light' className='!h-12 !w-12' size="lg" radius="xl" aria-label='Settings'>
              <item.icon className='h-4/5 w-4/5' stroke={1.5} />
            </ActionIcon>
            <div className='text-mine-shaft-300 text-sm'>{item.name}</div>
            <div className='font-semibold'>{item.value}</div>
          </div>)
          }
        </div>
        <Divider my="xl"/>
        <div className=''>
          <div className='text-xl font-semibold mb-5'>Required Skills</div>
          <div className='flex flex-wrap gap-2'>
            {
              skills.map((item:any,index:any)=><ActionIcon key={index} color='bright-sun.4' variant='light' p="xs" className='!h-fit !font-medium !text-sm !w-fit' size="lg" radius="xl" aria-label='Settings'>
              {item}
            </ActionIcon>)
            }
            
          </div>
        </div>
        <Divider my="xl"/>
        <div className='[&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify' dangerouslySetInnerHTML={{__html:data}} />
        <Divider my="xl"/>
        <div>
          <div className='text-xl font-semibold mb-5'>About the company</div>
          <div className='flex justify-between mb-3'>
            <div className='flex gap-2 items-center'>
              <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                <img src={`/Icons/Google.png`} className='h-8 ' alt="" />
              </div>
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>Google</div>
                <div className=' text-mine-shaft-300 '>20k+ Employees</div>
              </div>
            </div>
            <Link to="/company">
            <   Button color='bright-sun.4' variant='light'>Company Page</Button>
            </Link>
          </div>
          <div className='text-mine-shaft-300 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati temporibus, tempore voluptatem optio magni iste pariatur est possimus ea ipsam quo ab facere commodi totam labore aperiam voluptatibus aliquam magnam odit culpa minus perferendis, a quaerat. Cum repellat sint magni.</div>
        </div>
    </div>
  )
}

export default JobDesc
