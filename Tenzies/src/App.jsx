import { useState } from 'react'
import Die from './Die.jsx'
import {nanoid} from "nanoid"
import { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size';



function App() {
  const [count, setCount] = useState(0)
  const [dice, setDice]= useState(generateAllNewDice())
  const [gameWon, setGameWon] = useState(false)
  const [width, height] = useWindowSize ()

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue =dice.every(die => die.value ===firstValue)

    if (allHeld && allSameValue){
            setGameWon(true)}
    }, [dice])

  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld:false,
        id:nanoid()
      }))
  }

  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice());
      setGameWon(false); // reset the win state
    } else {
      setDice(prevDice =>
        prevDice.map(die =>
          die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function holdDice(id){
    setDice(prevDice => 
      prevDice.map(die => 
      {
        if(die.id ===id) {
            return { ...die, isHeld : !die.isHeld}
        }else {
          return die
        }
    }))
  }

  const diceElements = dice.map ((die, index) =>(
      <Die 
      key ={die. id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice = {() => holdDice(die.id)}
      />
  ))


  return (
    <>
      {gameWon && <Confetti width={width} height={height} />}
      <main> 
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        
        {gameWon && <h1 className= "win-message"> You won! </h1>}
        <div className='dice-container'>
          {diceElements}
        </div>  

        <button onClick= {rollDice} className='roll-button'>
          {gameWon ? "New Game" : "Roll Dice"}
        </button>
      </main>
    </>
  )
}

export default App
