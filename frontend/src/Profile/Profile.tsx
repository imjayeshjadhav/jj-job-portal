import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core'
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import Experience from './Experience'
import Certifications from './Certifications'
import { SelectInput } from './SelectInput'
import fields from '../Data/Profile'
import ExpInput from './ExpInput'
import CertInput from './CertInput'

const Profile = (props:any) => {
  const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.')
  const[skills, setSkills] = useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"])
  const select = fields
  const[addCert, setAddCert] =useState(false)
  const[addExp, setAddExp] = useState(false)
  const [edit,setEdit] = useState([false,false,false,false,false])
  const handleEdit = (index:any)=>{
    const newEdit=[...edit]
    newEdit[index]=!newEdit[index];
    setEdit(newEdit)
  }
  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img className='rounded-t-2xl ' src="/Profile/banner.jpg"  alt="" />
        <img className='absolute w-48 h-48 -bottom-1/4 left-3 border-mine-shaft-950 border-8 rounded-full ' src="/avatar.png"  alt="" />
      </div>
      <div className='px-3 mt-16 flex flex-col gap-1'>
        <div className='text-3xl font-semibold flex justify-between'>{props.name}
          <ActionIcon onClick={()=>handleEdit(0)} color="bright-sun.4" size="lg" variant='subtle' >
            {edit[0] ? <IconDeviceFloppy className='!h-4/5 w-4/5' />  :<IconPencil className='!h-4/5 !w-4/5'  />}
          </ActionIcon>
        </div>
        {
          edit[0] ?
          <>
            <div className="flex gap-10 [&>*]:w-1/2 ">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>:
          <>
            <div className='text-xl flex gap-1 items-center'><IconBriefcase stroke={1.5} className='h-5 w-5'/>{props.role} &bull; {props.company}</div>
            <div className='flex gap-1 text-lg text-mine-shaft-300 items-center '>
                <IconMapPin stroke={1.5} className='h-5 w-5' />{props.location}
            </div>
          </>

        }   
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>About <ActionIcon onClick={()=>handleEdit(1)} color="bright-sun.4" size="lg" variant='subtle' >
            {edit[1] ? <IconDeviceFloppy className='!h-4/5 w-4/5' />  :<IconPencil className='!h-4/5 !w-4/5'  />}
          </ActionIcon></div>
          {
            edit[1]?
            <>
              <Textarea
                value={about}
                autosize
                minRows={3}
                placeholder='Enter About Yourself'
                onChange={(event)=>setAbout(event.currentTarget.value)}
              />
            </>:
            <>
              <div className='text-sm text-mine-shaft-300 text-justify'>{about}</div>
            </>
          }  
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills <ActionIcon onClick={()=>handleEdit(2)} color="bright-sun.4" size="lg" variant='subtle' >
            {edit[2] ? <IconDeviceFloppy className='!h-4/5 w-4/5' />  :<IconPencil className='!h-4/5 !w-4/5'  />}
          </ActionIcon></div>
          {
            edit[2]?
            <>
              <TagsInput
                placeholder='Add Skills'
                value={skills}
                onChange={setSkills}
                splitChars={[',',' ','|']}
              />
            </> :
            <>
              <div className='flex flex-wrap gap-2'>
                  {
                      (skills || []).map((skill:any,index:any)=><div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 '>{skill}</div>
                  )
                  }
              </div>
            </>
          }

      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3 '>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience 
            <div className='flex gap-2'>
              <ActionIcon onClick={()=>setAddExp(true)} color="bright-sun.4" size="lg" variant='subtle' >
                <IconPlus className='!h-4/5 !w-4/5'  />
              </ActionIcon>

              <ActionIcon onClick={()=>handleEdit(3)} color="bright-sun.4" size="lg" variant='subtle' >
                {edit[3] ? <IconDeviceFloppy className='!h-4/5 w-4/5' />  :<IconPencil className='!h-4/5 !w-4/5'  />}
              </ActionIcon>
            </div>
          </div>
        <div className='flex flex-col gap-8'>
          {
            (props.experience|| []).map((exp:any, index:any)=><Experience key={index} {...exp} edit={edit[3]} />)
          }
          { addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className='px-3'>
        <div className='flex flex-col gap-8'>
        <div className='text-2xl font-semibold flex justify-between '>Certifications 
          <div className='flex gap-2'>
              <ActionIcon onClick={()=>setAddCert(true)} color="bright-sun.4" size="lg" variant='subtle' >
                <IconPlus className='!h-4/5 !w-4/5'  />
              </ActionIcon>

              <ActionIcon onClick={()=>handleEdit(4)} color="bright-sun.4" size="lg" variant='subtle' >
                {edit[4] ? <IconDeviceFloppy className='!h-4/5 w-4/5' />  :<IconPencil className='!h-4/5 !w-4/5'  />}
              </ActionIcon>
            </div>
          </div>
        {
          (props.certifications||[]).map((cert:any, index:any)=><Certifications edit={edit[4]} key={index} {...cert} />)
        }
        {
         addCert && <CertInput setEdit={setAddCert} />
        }
        </div>
      </div>
    </div>
  )
}

export default Profile
