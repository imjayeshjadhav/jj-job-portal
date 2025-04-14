import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalents/SearchBar'
import Talents from '../FindTalents/Talents'

const FindTalents = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"]'>
      <Divider size="xs" mx="md" />
      <SearchBar/>
      <Divider size="xs" mx="md" />
      <Talents/>
    </div>
  )
}

export default FindTalents
