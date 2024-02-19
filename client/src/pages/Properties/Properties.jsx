import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import './Properties.css'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard'




const Properties = () => {
 const {data, isError, isLoading} = useProperties()
 const [filter, setFilter] = useState('')


if(isError){
    return (
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
    )
}

if(isLoading){

    return (
        <div className="wrapper flexCenter" style={{height: '60vh'}} >
           <PuffLoader
               height="80"
               width="80"
               radius={1}
               color="#4066ff"
               aria-label='puff-oading'
           />
        </div>
    )
}

//  console.log(data)
  return (
    <div className='wrapper'>
        <div className="flexColCenter paddings innerWidth properties-container ">

          <SearchBar filter={filter} setFilter={setFilter} />

          <div className="paddings flexCenter properties " style={{gap: '15px'}} >

            {
                // data.map((card, index) => (<PropertyCard card={card} key={index} />))
                data
                   .filter((property) => 
                                 property.title.toLowerCase().includes(filter.toLowerCase()) || 
                                 property.city.toLowerCase().includes(filter.toLowerCase()) || 
                                 property.country.toLowerCase().includes(filter.toLowerCase())
                   )
                   .map((card, index) => (<PropertyCard card={card} key={index} />))
            }

          </div>
        </div>
    </div>
  )

  }
export default Properties