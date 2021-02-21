import { createElement as h } from 'react'

const staticPage = ({ time }) => {
    return h('div', null, `${time}`)
}

export const getStaticProps = async () => {
    return { props: { time: new Date().toISOString() }, revalidate: 3}
}

export default staticPage;