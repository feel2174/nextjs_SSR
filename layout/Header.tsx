import React, { useState, createElement as h } from 'react'
import { IoLogoGithub } from 'react-icons/io'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
`;

const HeaderNavigationsInput = styled.input`
margin: 0px 16px;
        background-color: hsla(0, 0%, 100%, 0.125);
        width: 300px;
        height: 28px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: white;
        padding: 0px 12px;
        font-size: 14px;
        font-weight: bold;
        `;
const HeaderNavigationsA = styled.a`
        color: white;
        margin-right: 16px;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
    `;

// const HeaderCss = css`
//     .header-wrapper {
//         padding: 14px 14px;
//         background-color: #24292e;
//         line-height: 0;
//         display: flex;
//         align-items: center;
//     }

//     .header-search-form input {
//         margin: 0px 16px;
//         background-color: hsla(0, 0%, 100%, 0.125);
//         width: 300px;
//         height: 28px;
//         border: none;
//         border-radius: 5px;
//         outline: none;
//         color: white;
//         padding: 0px 12px;
//         font-size: 14px;
//         font-weight: bold;
//     }
//     .header-navagations a {
//         color: white;
//         margin-right: 16px;
//         font-size: 14px;
//         font-weight: bold;
//         text-decoration: none;
//     }
// `;

const Header = () => {
    const [userName, setUserName] = useState('');
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();
        router.push(`/users/${userName}`);
        setUserName('')
    }

    return (
        h('div', null,
            h(HeaderWrapper, null,
                h(IoLogoGithub, { color: 'white', size: 36 }),
                h('form', { onSubmit: onSubmit },
                    h(HeaderNavigationsInput, { value: userName, onChange: (e) => setUserName(e.target.value) })),
                h('nav', null,
                    h(HeaderNavigationsA, { href: 'https://github.com/pulls' }, 'Pull Request'),
                    h(HeaderNavigationsA, { href: 'https://github.com/issues' }, 'Issues'),
                    h(HeaderNavigationsA, { href: 'https://github.com/marketplace' }, 'Marketplace'),
                    h(HeaderNavigationsA, { href: 'https://github.com/explore' }, 'Explore'),
                )
            )
        )
        // <div>
        //     <div className="header-wrapper">
        //         <IoLogoGithub color="white" size={36} />
        //         <form className="header-search-form" onSubmit={onSubmit}>
        //             <input value={userName}
        //                 onChange={(e) => setUserName(e.target.value)}
        //             />
        //         </form>
        //         <nav className="header-navagations">
        //             <a href="https://github.com/pulls">Pull Request</a>
        //             <a href="https://github.com/issues">Issues</a>
        //             <a href="https://github.com/marketplace">Marketplace</a>
        //             <a href="https://github.com/explore">Explore</a>
        //         </nav>
        //     </div>
        //     <style jsx>{HeaderCss}</style>
        // </div>

    )
}

export default Header;