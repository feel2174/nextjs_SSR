import { useState, createElement as h } from 'react'
import Link from 'next/link'

const App = () => {
    const [username, setUsername] = useState('')
        
    return (
        <div style={{ position: 'absolute', top: '40%', left: '40%', display: 'flex', flexDirection: 'column'}}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
                username을 입력해주세요.
                <input value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                <Link href={`/users/${username}`}>
                    <a>
                        검색하기
                    </a>
                </Link>
            </label>
            <p>{username} 깃허브 검색하기</p>
        </div>
    )
}

export default App;