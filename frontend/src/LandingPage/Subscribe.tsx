import { Button, TextInput } from '@mantine/core'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='mt-20 flex items-center justify-around mx-20 bg-mine-shaft-900 py-3 rounded-xl '>
        <div className="text-4xl w-2/5 text-center text-mine-shaft-100 font-semibold">Never wants to miss any <span className='text-bright-sun-400'>Job News?</span></div>
        <div className='flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-xl'>
            <TextInput
                placeholder='Your@email.com'
                className='[&_input]:text-mine-shaft-100 font-semibold'
                variant='unstyled'
                size='lg'
            />
            <Button className='!rounded-lg' size='lg' color='bright-sun.4' variant='filled'>Subscribe</Button>
        </div> 
    </div>
  )
}

export default Subscribe
