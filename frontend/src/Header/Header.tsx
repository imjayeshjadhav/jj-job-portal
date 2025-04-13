import React from 'react'
import {IconAnchor, IconBell, IconSettings} from '@tabler/icons-react'
import { Avatar, Indicator } from '@mantine/core'
import NavLinks from './NavLinks'
const Header = () => {
  return (
    <div className='w-full text-white bg-mine-shaft-950 px-6 h-28 flex justify-between items-center '>
      <div className='flex gap-1 items-center text-bright-sun-400'>
        <IconAnchor className='h-8 w-8' stroke={2.5} />
        <div className='text-3xl font-semibold'>JJ-Jobs</div>
      </div>
      {NavLinks()}
      <div className='flex gap-3 items-center'>
        <div className='flex items-center gap-2'>
            <div>Jayesh</div>
            <Avatar src="avatar.png" alt="JJ"/>
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5}/>
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color='bright-sun.3' offset={6} size={8} processing>             
                <IconBell stroke={1.5}/>
            </Indicator>
        </div>
      </div>
    </div>
  )
}

export default Header
