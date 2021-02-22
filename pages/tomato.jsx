import React from 'react'
import useSWR from 'swr'

function useCounter() {
    const { data, mutate } = useSWR('state', () => window.count)
    return {
        data: data || 100,
        mutate: (count) => {
            window.count = count;
            mutate();
        }
    }
}

const Tomato = ({ user }) => {
    const { data, mutate } = useCounter();
    console.log(data);
    const handleIncrement = () => mutate(data * 2);
    const handleDecrement = () => mutate( data / 2);
    
    return (
       <div>
           <span>count: {data}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
       </div>
    )
}


export default Tomato;