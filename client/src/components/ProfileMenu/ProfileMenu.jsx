import React from 'react'
import {Avatar, Menu} from '@mantine/core'



const ProfileMenu = ({user,logout}) => {
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={'xl'} />
        </Menu.Target>
        <Menu.Dropdown style={{backgroundColor: 'lightgray'}}>
            <Menu.Item>Favorites</Menu.Item>

            <Menu.Item>Bookings</Menu.Item>

            <Menu.Item onClick={() => {
                localStorage.clear()
                logout()
            }} >
                logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu