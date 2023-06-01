import React from 'react'
import { useFetch, useCounter } from '../hooks'
import {LoadingQuotes} from './LoadingQuotes'
import {Quote} from './Quote'

export const MultipleCustomHooks = () => {
    const {counter, increment, decrement, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    //Doble negacion !!data si es undefined se transforma en false, con una negacion !data es un true
    const {quote, author} = !!data && data[0];
    return (
    <>
        <h1>Breaking bad Quotes</h1>
        <hr></hr>
        {
          isLoading
          ? <LoadingQuotes />
          : <Quote 
              quote={quote}
              author={author}
            />
        }
        <button 
          className='btn btn-primary'
          disabled={isLoading}
          onClick={() => increment()}>
          Next Quote
        </button>
    </>
  )
}
