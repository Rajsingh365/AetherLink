import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function useGetConversations() {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations]=useState([])

  useEffect(()=>{
    const getConversations= async ()=>{
      setLoading(true)
      try{
        // console.log('working');
        const res=await fetch("/api/users")
        const data=await res.json()
        // console.log("Users",data)
        if(data.error){
          throw new Error(data.error)
        }
        setConversations(data)
      }
      catch(error){
        toast.error(error.message)
      }
      finally{
        setLoading(false)
      }
    }

    getConversations()
  },[])

  return {loading,conversations}
}

export default useGetConversations