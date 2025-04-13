import React ,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, reset,incrementByAmount } from './features/Counter/counterSlice';


function App() {
  const [amount, setAmount] = useState(0);
  const count=useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(parseInt(amount)))
  }
  
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>Count:{count} </h1>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>reset</button>

<br />
<input type="Number"
value={amount}
placeholder='Enter a number'
onChange={(e)=>setAmount(e.target.value)} />

<br />
<button onClick={handleIncrementByAmount}>Increment by {amount}</button>
    </div>
    
  )
}

export default App