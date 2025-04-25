import { IconAnchor } from '@tabler/icons-react'
import React from 'react'
import SignUp from '../Auth/SignUp'
import Login from '../Auth/Login'
import { useLocation } from 'react-router-dom'

const SignUpPage = () => {
  const location = useLocation()
  return  (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] overflow-hidden  '>
      <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname==='/sign-up' ? '-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
        <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname==="/sign-up" ?'rounded-r-[200px]':'rounded-l-[200px]'} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col `}>
        <div className='flex gap-1 items-center text-bright-sun-400'>
          <IconAnchor className='h-16 w-16' stroke={2.5} />
          <div className='text-6xl font-semibold'>JJ-Jobs</div>
        </div>
        <div className='text-2xl text-mine-shaft-200 font-semibold'>Find the job made for you</div>
        </div>
        <SignUp/>
      </div>
    </div>
  )
}

export default SignUpPage
