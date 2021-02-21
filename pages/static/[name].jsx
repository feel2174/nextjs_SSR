import fetch from 'isomorphic-unfetch'
import { createElement as h } from 'react'

const name = ({ user, time }) => {
    const username = user && user.name;
    console.log(user);
    return (
        h('div', null, `${username}, ${time}`)
    )
}

export const getStaticProps = async ({ params }) => {
   
    try {
        const res = await fetch(`https://api.github.com/users/${params.name}`);
        if(res.status === 200) {
            const user = await res.json();
            return { props: { user, time: new Date().toISOString() } };
        } 
        return { props: { time: new Date().toISOString() } };
    } catch(e) {
        console.log(e);
        return { props:  { time: new Date().toISOString() } };
    }
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { name: "jerrynim"} }],
        fallback: true
    }
}

export default name;