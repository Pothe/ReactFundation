import React from 'react'

function App() {
  return (
    <div>
      <form >
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='last name' />
        <select >
          <option value="unknow">Choose City</option>
          <option value="phnom penh">phnom penh</option>
          <option value="shv">Sihanoukville</option>
          <option value="kampot">Kampot</option>
          
        </select>
           <input type="radio" name="Female" id="" />Male
        <input type="radio" name="Female" id="" />Female
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App