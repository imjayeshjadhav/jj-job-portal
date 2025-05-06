import React, { useState } from 'react'
import { SelectInput } from './SelectInput'
import fields from '../Data/Profile'
import { Button, Checkbox, Textarea } from '@mantine/core'
import { MonthPicker, MonthPickerInput } from '@mantine/dates'

const ExpInput = (props:any) => {
    const[startDate, setStartDate] = useState<Date | null>(new Date())
    const[endDate, setEndDate] = useState<Date | null>(new Date())
    const select = fields
    const[checked,setChecked ] = useState(false)
    const[desc, setDesc] = useState('As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.')
    
    return (
    <div className='flex flex-col gap-3'>
      <div className='text-lg font-semibold'>{props.add ?"Add":"Edit"}</div>
      <div className="flex gap-10 [&>*]:w-1/2 ">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea
            label="Summary"
            withAsterisk
            value={desc}
            autosize
            minRows={3}
            placeholder='Enter Summary...'
            onChange={(event)=>setDesc(event.currentTarget.value)}
        />
        <div className="flex gap-10 [&>*]:w-1/2 ">
            <MonthPickerInput
                label="Start Date"
                maxDate={endDate || undefined}
                placeholder='Pick Date'
                value={startDate}
                onChange={setStartDate}
                withAsterisk
                />
            <MonthPickerInput
                minDate={startDate || undefined}
                label="End Date"
                withAsterisk
                maxDate={new Date()}
                placeholder='Pick Date'
                value={endDate}
                disabled={checked}
                onChange={setEndDate}
            />
        </div>
        <Checkbox 
            autoContrast 
            color='bright-sun.4'
            checked={checked}
            onChange={(event)=>setChecked(event.currentTarget.checked)}
            label="Currently Working Here" 
        />
        <div className='flex gap-5'>
            <Button onClick={()=>props.setEdit(false)} color='bright-sun.4' variant='outline'>Save</Button>
            <Button color='red.8' variant='light' onClick={()=>props.setEdit(false)}>Discard Changes</Button>
        </div>
    </div>
  )
}

export default ExpInput
