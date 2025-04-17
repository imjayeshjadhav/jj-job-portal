import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from '@mantine/core'
import { IconBookmark, IconCheck, IconPaperclip, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false)
    const [submit, setSubmit] =useState(false)
    const [sec, setSec] =useState(5)
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x)
            if(x===0) navigate('/find-jobs')
        },1000)
    }
    const handlePreview =()=>{
        setPreview(!preview)
        window.scrollTo({top:0, behavior:'smooth'})
    }
  return (
    <> 
    <div className='w-2/3 mx-auto'>
      <LoadingOverlay
        className='!fixed '
        visible={submit}
        zIndex={1000}
        overlayProps ={{radius:'sm', blur:'2'}}
        loaderProps ={{color:'bright-sun.4',type:'bars'}}
      />  
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
                <Button color='bright-sun.4' size='sm' variant='light'>Apply</Button>
            </Link>
            <IconBookmark className='cursor-pointer text-bright-sun-400' stroke={1.5}/>
        </div>
      </div>
        <Divider my="xl"/>
        <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
        <div className='flex flex-col gap-2 '>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter Name" />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Email" withAsterisk placeholder="Enter Email" />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior='strict' />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Personal Website" withAsterisk placeholder="URL" />
            </div>
            <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`}  withAsterisk
                leftSection={<IconPaperclip stroke={1.5}/>} label="Attach Your CV" 
                placeholder="Your CV" leftSectionPointerEvents='none'
             />
            <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk placeholder='Enter something about yourself...' label="Cover Letter" minRows={4} />
            {!preview && <Button onClick={handlePreview} color='bright-sun.4' variant="light" >Preview</Button>}
            {
                preview &&
                <div className='flex gap-10 [&>*]:w-1/3'>
                    <Button fullWidth onClick={handlePreview} color='bright-sun.4' variant="outline" >Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color='bright-sun.4' variant="light" >Submit</Button>
                </div>
            }
        </div>
    </div>
    <Notification className={`!border-bright-sun-400 !z-[10001] !fixed top-0 left-[40%] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"} `}  icon={<IconCheck style={{width:rem(20), height:rem(20)}} />} color='teal' mt="md" withBorder title="Application Submitted"  withCloseButton={false} >
            Redirection to find-jobs in {sec} seconds...
    </Notification>
    </>
  )
}

export default ApplyJobComp
