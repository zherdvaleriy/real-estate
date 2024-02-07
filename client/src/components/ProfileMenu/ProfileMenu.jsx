import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'



const ProfileMenu = ({user,logout}) => {
   const navigate = useNavigate()

  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={'xl'} />
        </Menu.Target>
        <Menu.Dropdown style={{backgroundColor: 'lightgray'}}>
            
            <Menu.Item onClick={() => navigate('/favorites', {replace: true})} >
                Favorites
            </Menu.Item>

            <Menu.Item onClick={() => navigate('/bookings', {replace: true})} >
                Bookings
            </Menu.Item>

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