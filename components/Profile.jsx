import fetch from 'isomorphic-unfetch'
import { createElement as h, Fragment } from 'react'
import { GoMail, GoLink, GoOrganization, GoLocation } from 'react-icons/go'
import css from 'styled-jsx/css'

const style = css`
    .profile-box {
        width: 25%;
        max-width: 272px;
        margin-right: 26px;
    }
    .profile-image-wrapper {
        width: 100%;
        border: 1px solid #e1e4e8;
    }
    .profile-image-wrapper .profile-image {
        display: block;
        width: 100%;
    }.
    profile-username {
        margin: 0;
        padding-top: 16px;
        font-size: 26px;
    }
    .profile-user-login {
        margin: 0;
        font-size: 20px;
    }
    .profile-user-bio {
        margin: 0;
        padding-top: 16px;
        font-size: 14px;
    }
    .profile-user-info {
        display: flex;
        align-items: center;
        margin: 4px 0 0;
    }
    .profile-user-info-text {
        margin-left: 6px;
    }
`;

const Profile = ({ user }) => {
    console.log(user);
    if (!user) {
        return null;
    }
    return (
        h(Fragment, null,
            h('div', { className: 'profile-box' },
                h('div', { className: 'profile-image-wrapper' },
                    h('img', { className: 'profile-image', src: user.avatar_url, alt: `${user.name} 프로필 이미지` }),
                    h('h2', { className: 'profile-username' }, `${user.name}`),
                    h('p', { className: 'profile-user-login' }, `${user.login}`),
                    h('p', { className: 'profile-user-bio' }, `${user.bio}`),
                    h('p', { className: 'profile-user-info' },
                        h(GoOrganization, { size: 16, color: '#6a737d' }),
                        h('span', { className: 'profile-user-info-text' }, `${user.company}`)
                    ),
                    h('p', { className: 'profile-user-info' },
                        h(GoLink, { size: 16, color: '#6a737d' }),
                        h('span', { className: 'profile-user-info-text' }, `${user.blog}`)
                    ),
                    h('p', { className: 'profile-user-info' },
                        h(GoLocation, { size: 16, color: '#6a737d' }),
                        h('span', { className: 'profile-user-info-text' }, `${user.location}`)
                    ),
                    h('p', { className: 'profile-user-info' },
                        h(GoMail, { size: 16, color: '#6a737d' }),
                        h('span', { className: 'profile-user-info-text' }, 'abc@gmail.com')
                    ),
                ),
                h('style', {jsx: 'true'}, style)),
         
        )
    )
}

export const getServerSideProps = async ({ query }) => {
    const { name } = query;
    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (res.status === 200) {
            const user = await res.json();
            return { props: { user } };
        }
        return { props: {} };
    } catch (e) {
        console.log(e);
        return { props: {} };
    }
}

export default Profile;