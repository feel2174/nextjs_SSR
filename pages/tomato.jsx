import fetch from 'isomorphic-unfetch'
import { createElement as h } from 'react'
const Tomato = ({ user }) => {
    const username = user && user.name;
    console.log(user);
    return (
        h('div', null, `${username}`)
    )
}

export const getServerSideProps = async () => {
    try {
        const res = await fetch('https://api.github.com/users/jerrynim');
        if(res.status === 200) {
            const user = await res.json();
            return { props: {} };
        } 
        return { props: { user } };
    } catch(e) {
        console.log(e);
        return { props: {} };
    }
}

export default Tomato;