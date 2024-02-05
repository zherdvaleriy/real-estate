import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'




export const api = axios.create({
    baseURL: "http://localhost:8500"
})




export const getAllProperties = async() =>{
    try {
    const response = await api.get('api/residency/all-residencies', {
        timeout: 10 * 1000
    })

    if(response.status === 400 || response.status === 500){
        throw response.data
    }
    return response.data
        
    } catch (error) {
        toast.error('Something went wrong')
        throw error
    }
}



export const getProperty = async(id) => {
    try {
        const response = await api.get(`api/residency/${id}`, {
            timeout: 10 * 1000
        })
    
        if(response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
            
        } catch (error) {
            toast.error('Something went wrong')
            throw error
        }
}




export const createUser = async (email, token) => {
    try {
   
      await api.post(`api/user/register`, { email }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      toast.error('Something went wrong, please try again!');
      throw error;
    }
  };




  export const bookVisit = async(date, propertyId, email, token) => {
     try {
       await api.post(`api/user/book-visit/${propertyId}`,
       {
        email,
        id: propertyId,
        date: dayjs(date).format('DD/MM/YYYY')
       },
       {
        headers: {
            Authorization: `Bearer ${token}`
        }
       }
       )

        
     } catch (error) {
        toast.error('Something went wrong while booking a visit, try again')
        throw error
     }

  }
  