import React, { useState } from 'react'
import { SelectInput } from './SelectInput'
import { Button, TextInput } from '@mantine/core'
import fields from '../Data/Profile'
import { MonthPickerInput } from '@mantine/dates'

const CertInput = (props:any) => {
    const [issueDate, setIssueDate] = useState<Date | null>(new Date())
    const select=fields
  return (
    <div className='flex flex-col gap-3'>
      <div className='text-lg font-semibold'>Add Certificate</div>
      <div className='flex gap-10 [&>*]:w-1/2'>
        <TextInput
            withAsterisk
            label="Title"
            placeholder='Enter Title'
        />
        <SelectInput {...select[1]}/>
      </div>
      <div className='flex gap-10 [&>*]:w-1/2'>
        <MonthPickerInput
          label="Issue Date"
          maxDate={new Date()}
          placeholder='Pick Date'
          value={issueDate}
          onChange={setIssueDate}
          withAsterisk
        />
        <TextInput
            withAsterisk
            label="Certificate ID"
            placeholder='Enter ID'
        />
      </div>
      <div className='flex gap-5'>
          <Button onClick={()=>props.setEdit(false)} color='bright-sun.4' variant='outline'>Save</Button>
          <Button color='red.8' variant='light' onClick={()=>props.setEdit(false)}>Discard Changes</Button>
      </div>
    </div>
  )
}

export default CertInput
