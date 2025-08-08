import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data ,setdata] = useState([])
    useEffect(()=>{
        // promize 
        // fetch("https://dummyjson.com/products/1")
        // .then(res=>res.json())
        // .then(json=>setdata(json))


          //===== async and await
          // immediat invoke function 
        ( async()=>{
            let respone = await fetch("https://dummyjson.com/products/1")
            let json = await respone.json()
            setdata(json)
        })()
    },[])
  return (
    <div>

      {JSON.stringify(data)}
    </div>
  )
}

export default FetchData
