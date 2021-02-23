import React, { useState, FC, createElement as h } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import oc from 'open-color'

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%)
`;

const LogoWrapper = styled.div`
    background: ${oc.teal[4]};
    height: 10em;
    display: flex;
    flexDirection: 'column';
    align-items: center;
    justify-content: center;
`;

const Logo = styled.a`
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const LabelWrapper = styled.label`
    font-size: 25px;
    display: flex;
    flex-direction: row;
`;
const InputWrapper = styled.input`

`;

const App: FC = () => {
    const [username, setUsername] = useState('')
        
    return (
        h(Positioner, null,
            h(LogoWrapper, null, 
                h(LabelWrapper, null, 'username을 입력해주세요',
                h(InputWrapper, {value: username, onChange: (e) => setUsername(e.target.value)}),
                h(Logo, {href: `/users/${username}`}, '검색하기')))
            )
    )
}

export default App;