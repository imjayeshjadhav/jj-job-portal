import { Menu, Text, Avatar, Switch } from '@mantine/core';
import {
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconMoonStars,
  IconSun,
  IconLogout2,
  IconMessageCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProfileMenu() {
    const [checked, setChecked] = useState(false)
    const [opened, setOpened] = useState(false)
  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <Menu.Target>
        <div className='flex items-center gap-2 cursor-pointer '>
            <div>Jayesh</div>
            <Avatar src="avatar.png" alt="JJ"  />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to='/profile'>
            <Menu.Item leftSection={<IconUserCircle size={14} />}>
            Profile
            </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              <Switch
                color="bright-sun.4"
                size="sm"
                className='!cursor-pointer'
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                onLabel={<IconSun className='!cursor-pointer' size={16} stroke={2.5} color="white  " />}
                offLabel={<IconMoonStars className='!cursor-pointer' size={16} stroke={2.5} color="cyan" />}
                />
            </Text>
          }
        >
          Dark Mode
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}