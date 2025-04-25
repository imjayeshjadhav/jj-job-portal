import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold '>Log Into Your Account</div>
      <TextInput withAsterisk placeholder='Your Email' leftSection={<IconAt style={{width:rem(16), height:rem(16)}} />} label="Your Email" />
      <PasswordInput  leftSection={<IconLock stroke={1.5} style={{width:rem(18), height:rem(18)}} />} withAsterisk label="Password" placeholder='Password' />
      <Checkbox color='bright-sun.4' className='!cursor-pointer' autoContrast label={<>I Accept{' '}<Anchor className='!text-bright-sun-400'>Terms & Conditions</Anchor></>} />
      <Button className='!bg-bright-sun-400 !cursor-pointer 
      !text-black' variant='filled' autoContrast>Login</Button>
      <div className='mx-auto'>Don't Have an account? <Link to="/sign-up" className='text-bright-sun-400 hover:underline'>SignUp</Link></div>
    </div>
  )
}

export default Login
