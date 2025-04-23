import React from 'react'

const PostedJobCard = (props:any) => {
  return (
    <div className='bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-l-bright-sun-400'>
      <div className='text-sm '>{props.jobTitle}</div>
      <div className='text-xs text-mine-shaft-300 font-medium'>{props.location}</div>
      <div className='text-xs text-mine-shaft-300 font-semibold'>{props.posted}</div>
    </div>
  )
}

export default PostedJobCard
