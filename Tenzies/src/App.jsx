import { useState } from 'react'
import Die from './Die.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [dice, setDice]= useState(generateAllNewDice())



  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
    
  }

  const diceElements = dice.map (num => <Die value = {num} />)
  return (
    <>
      <main> 
        <div className='dice-container'>
          {diceElements}
         

        </div>  
      </main>
    </>
  )
}

export default App
