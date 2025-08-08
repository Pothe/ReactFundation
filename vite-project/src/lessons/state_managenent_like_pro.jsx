import React, { useState } from 'react'

function StatePro() {
  const [FormObject,setFormObject] =useState({Fname:"",Lname:"", city:"", Gender:""})

  const InputOnchange =({property,value})=>{
    setFormObject(previous=>({
      ...previous,[property]:value
    }
      
   
    ))
  
  }
  return (
    <div>
      <form >
        <input value={FormObject.Fname} type="text" placeholder='First name' onChange={(e)=>{InputOnchange({property:'Fname',value:e.target.value})}}/>
        <input value={FormObject.Lname} type="text" placeholder='last name' onChange={(e)=>{InputOnchange({property:'Lname',value:e.target.value})}} />
        <select value={FormObject.city} onChange={(e)=>{InputOnchange({property:'city',value:e.target.value})}} >
          <option value="">Choose City</option>
          <option value="pp">phnom penh</option>
          <option value="shv">Sihanoukville</option>
          <option value="kampot">Kampot</option>
          
        </select>
          <input
  type="radio"
  name="Gender"
  value="Male"  
  checked={FormObject.Gender === "Male"}
  onChange={(e) =>{InputOnchange({ property: "Gender", value: e.target.value })}
  }
/> Male

        <input
  type="radio"
  name="Gender"
  value="Female"
  checked={FormObject.Gender === "Female"}
  onChange={(e) =>
    {InputOnchange({ property: "Gender", value: e.target.value })}
  }
/> Female

        <br></br>
        <button type="submit">Submit</button>
      </form>

   
    </div>
  )
}

export default StatePro