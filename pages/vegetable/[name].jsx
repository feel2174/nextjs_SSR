import Link from 'next/link'
import { createElement as h } from 'react'
import { useRouter } from 'next/router'

const name = () => {
    const { query } = useRouter()
    return (
        h('div', null,
            h('h2', null, `Hello~ ${query.name}`),
            h(Link, { href: '/' }, "Move to '/'")
        )
    )
}

export default name;