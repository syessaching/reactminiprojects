import { useState } from 'react'
import Die from './Die.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [dice, setDice]= useState(generateAllNewDice())



  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld:false
      }))
  }

  function rollDice(){
    setDice(generateAllNewDice)
  }

  const diceElements = dice.map ((die, index) =>(
      <Die key ={index} value={die.value} isHeld={die.isHeld} />
  ))


  return (
    <>
      <main> 
        <div className='dice-container'>
          {diceElements}
        </div>  

      <button onClick= {rollDice} className='roll-button'>
        Roll Dice
      </button>
      </main>
    </>
  )
}

export default App
