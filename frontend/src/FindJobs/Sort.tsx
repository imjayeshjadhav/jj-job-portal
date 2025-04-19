import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

export default function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='text-xs ' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (

      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div className='cursor-pointer border border-bright-sun-400 px-2 py-1 gap-2 text-sm rounded-xl flex items-center' onClick={()=>combobox.toggleDropdown()} >
            {selectedItem} <ActionIcon color='bright-sun.4' variant='transparent' aria-label='Settings'> <IconAdjustments style={{width:'70%' ,height:'70%'}} stroke={1.5} /></ActionIcon>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
  );
}