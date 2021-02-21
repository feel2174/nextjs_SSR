import { useState, createElement as h } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const App = () => {
    const [username, setUsername] = useState('')

    return (
        h('div', {style: { position: 'absolute', top: '40%', left: '40%'}},
            h('label', null, 'username',
                h('input', { value: username, onChange: (e) => setUsername(e.target.value)}), h(Link, { href: `/users/${username}` }, h('a', null, '검색하기'))),
            h('p', null, `${username} 깃허브 검색하기`),            
        )
    )
}

export default App;