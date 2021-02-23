import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

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

const Swr = ({  }) => {
    const { data, mutate } = useCounter();
    console.log(data);
    const handleIncrement = () => mutate(data * 2);
    const handleDecrement = () => mutate( data / 2);
    
    return (
       <div style={{border: '1px solid', position: 'absolute', left: '45%', top: '50%', padding: '2px'}}>
           useSWR을 사용한 데이터입니다.
 
           <span style={{display: 'flex', fontSize: '50px',}}>count: {data}</span>
            <div style={{  display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            </div>
            
       </div>
    )
}

export default Swr;