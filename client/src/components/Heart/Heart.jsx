import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useMutation } from 'react-query'
import UserDetailContext from '../../context/UserDetail'
import useAuthCheck from '../../hooks/useAuthCheck'
import { toFav } from '../../utils/api'
import { checkFavorites, updateFavorites } from '../../utils/common'




const Heart = ({id}) => {
  const [heatColor, setHeartColor] = useState('white')
  const {validateLogin} = useAuthCheck()
  const {user} = useAuth0()

  const {userDetails: {favorites, token}, setUserDetails} = useContext(UserDetailContext)


  useEffect(() => {
    setHeartColor(() => checkFavorites(id, favorites))
  },[favorites])


  const {mutate} = useMutation({
    mutationFn: () => toFav(id, user?.email, token),
    onSuccess: () => {
        setUserDetails((prev) => ({
            ...prev,
            favorites: updateFavorites(id, prev.favorites)
        }))
    }
  })


  const handleLike = () => {
    if(validateLogin()){

        setHeartColor((prev) => prev === '#fa3e5f' ? 'white' : '#fa3e5f')
        mutate()
    }
  }

  return (
    <AiFillHeart 
          size={24} 
          color={heatColor} 
          onClick={(e) => {
            e.stopPropagation()
            handleLike()
          }}
          />
  )
}

export default Heart