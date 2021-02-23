import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { GoMail, GoLink, GoOrganization, GoLocation } from 'react-icons/go'
import { FC, createElement as h, Fragment } from 'react'


const ProfileBox = styled.div`
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
`;
const ProfileImageWrapper = styled.div`
    width: 100%;
    border: 1px solid #e1e4e8;
    padding: 10px;
`;
const ProfileImage = styled.img`
    display: block;
    width: 100%;
`;
const ProfileUserName = styled.h2`
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
`;
const ProfileUserLogin = styled.p`
    margin: 0;
    font-size: 20px;
`;
const ProfileUserBio = styled.p`
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
`;
const ProfileUserInfo = styled.p`
    display: flex;
    align-items: center;
    margin: 4px 0 0;
`;
const ProfileUserInfoText = styled.span`
    margin-left: 6px;
`;

interface userProps {
    user: any,
}

const Profile: FC<userProps> = props => {
    const { user } = props
    console.log(user);
    if (!user) {
        return null;
    }
    return (
        h(Fragment, null,
            h(ProfileBox, null,
                h(ProfileImageWrapper, null,
                    h(ProfileImage, { src: user.avatar_url, alt: `${user.name} 프로필 이미지` }),
                    h(ProfileUserName, null, user.name),
                    h(ProfileUserLogin, null, user.login),
                    h(ProfileUserBio, null, user.bio),
                    h(ProfileUserInfo, null,
                        h(GoOrganization, { size: 16, color: '#6a737d' }),
                        h(ProfileUserInfoText, null, user.company)
                    ),
                    h(ProfileUserInfo, null,
                        h(GoLink, { size: 16, color: '#6a737d' }),
                        h(ProfileUserInfoText, null, user.blog)
                    ),
                    h(ProfileUserInfo, null,
                        h(GoLocation, { size: 16, color: '#6a737d' }),
                        h(ProfileUserInfoText, null, `${user.location}`)
                    ),
                    h(ProfileUserInfo, null,
                        h(GoMail, { size: 16, color: '#6a737d' }),
                        h(ProfileUserInfoText, null, 'abc@gmail.com')
                    ),
                ),
            )
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