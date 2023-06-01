import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
  
    const {counter, increment, decrement, reset} = useCounter();
    return (
    <>
        <h1>CounterWithCustomHooks: {counter}</h1>
        <br/>
        <button className='btn btn-primary' onClick={() => increment(2)}>+2</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={() => decrement(2)}>-2</button>
    </>
  )
}