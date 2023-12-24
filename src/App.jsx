import { useState } from "react";
import data from "./data";
import Users from './Users'


const App = () => {
  const [users, setUsers] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleClick = () => {
    setUsers([])
  }

  const updateClick = () => {
    setUsers(data)
  }

  const updateClick2 =() =>{
    setIsLoading(!isLoading)
  }
  console.log(isLoading);

  return (
    <div className="container">
      <h2 className={users.length > 0 ? 'titleBlue' : 'titleRed'}>{users.length} Birthdays Today</h2>

      <Users allData={users} />
      
      {users.length > 0 ? ( <button type="button" onClick={handleClick}>Clear All</button> ) : ( <button type="button" onClick={updateClick}>Refresh</button> ) }
      
      <button type="button" onClick={() => updateClick2()}>tıkla kırmızı kutu gözüksün</button>

       <div className={isLoading ? 'show' : 'close'}></div>
    </div>
  )
}



export default App
