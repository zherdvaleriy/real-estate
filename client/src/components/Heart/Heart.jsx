import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck'





const Heart = () => {
  const [heatColor, setHeartColor] = useState('white')
  const {validateLogin} = useAuthCheck()


  const handleLike = () => {
    if(validateLogin()){

        setHeartColor((prev) => prev === '#fa3e5f' ? 'white' : '#fa3e5f')
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