import { useState } from "react";


function App() {

  const [handlingText, sethandlingText] = useState("hello")
  const [isMouseOver , setisMouseOver] = useState(false)

  function handleClick(){
    console.log("hello");
    sethandlingText("Manish")
  }

  function handleMouseOver(){
    setisMouseOver(true)
  }

  function handleMouseOut(){
    setisMouseOver(false)
  }
  
  return (
    <>
      <div className="container">
      <h1>{handlingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : isMouseOver? "black" : "white"}}
      
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} >Submit</button>
    </div>
    </>
  )
}

export default App
