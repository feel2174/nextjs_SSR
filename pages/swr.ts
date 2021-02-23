import {createElement as h} from 'react'
import useSWR from 'swr'

declare global {
  interface Window {
    count: number
  }
}

function useCounter() {
  const {data, mutate} = useSWR<number>('state', () => window.count)
  return {
    // eslint-disable-next-line no-magic-numbers
    data: data || 100,
    mutate: (count) => {
      window.count = count
      mutate()
    },
  }
}

const SwrTest = () => {
  const {data, mutate} = useCounter()
  console.log(data)
  const handleIncrement = () => mutate(data * 2)
  const handleDecrement = () => mutate(data / 2)

  return (
    h('div', null,
      h('span', null, `count: ${data}`,
        h('button', {onClick: handleIncrement}, 'Increment'),
        h('button', {onClick: handleDecrement}, 'Decrement')),
    )
  )
}

export default SwrTest
