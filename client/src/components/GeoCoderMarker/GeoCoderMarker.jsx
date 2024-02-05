import React, { useState } from 'react'
import {Marker, Popup, useMap} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'



let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})
L.Marker.prototype.options.icons = DefaultIcon


const GeoCoderMarker = ({address}) => {
   const [position, setPosition] = useState([60, 19])

   const map = useMap()

  return (
   <Marker position={position} icon={DefaultIcon} >
     <Popup/>
   </Marker>
  )
}

export default GeoCoderMarker