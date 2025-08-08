import React, { useState } from 'react'

function App() {
  const [FormObject,setFormObject] =useState({Fname:"",Lname:"",city:"",Gender:""})

  const InputOnchage =({property,value})=>{
    setFormObject(previous=>({
      ...previous,[property]:value
    }
      
   
    ))
     console.log(FormObject.Fname)
  }
  return (
    <div>
      <form >
        <input value={FormObject.Fname} type="text" placeholder='First name' onChange={(e)=>{InputOnchage({property:'Fname',value:e.target.value})}}/>
        <input value={FormObject.Lname} type="text" placeholder='last name' />
        <select value={FormObject.city} >
          <option value="unknow">Choose City</option>
          <option value="phnom penh">phnom penh</option>
          <option value="shv">Sihanoukville</option>
          <option value="kampot">Kampot</option>
          
        </select>
           <input checked={FormObject.Gender ==="Male"} type="radio"  />Male
        <input checked={FormObject.Gender ==="Female"} type="radio" name="Female" id="" />Female
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App