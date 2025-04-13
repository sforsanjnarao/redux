import React from 'react'
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const count=useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>Count:{count} </h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App