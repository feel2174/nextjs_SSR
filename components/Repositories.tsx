import Link from 'next/link';
import { useRouter } from 'next/router'
import formatDistance from 'date-fns/formatDistance'
import { FC, createElement as h, Fragment } from 'react';
import styled from 'styled-components';

const ReposWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0px 16px;
`;

const ReposHeader = styled.div`
    padding: 16px 0;
    font-size: 600;
    border-bottom: 1px solid #e1e4e8;
`;

const ReposCount = styled.span`
    display: inline-block;
    padding: 2px 5px;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 20px;
`;

const RepositoryWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
`;

const RepositoryDescription = styled.p`
    margin: 0;
    font-size: 14px;
`;

const RepositoryName = styled.h2`
        margin: 0;
        color: #0366d6;
        font-size: 20px;
        display: inline-block;
        cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
const RepositoryUpdatedAt = styled.span`
    margin-left: 12px;
`;

const RepositoryLanguage = styled.p`
    margin: 0;
    font-size: 14px;
`;
const RepositoryPagination = styled.div`
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 3px;
    width: fit-content;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PaginationButton = styled.button`
    padding: 6px 12px;
    font-size: 14px;
    border: 1px;
   color: #0366d6;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border-right: 1px solid rgba(27, 31, 35, 0.15);
`;

interface RepoProps {
    user: any,
    repos: any,
}

const Repositories: FC<RepoProps> = props => {
    const { user, repos } = props
    const router = useRouter();
    const { page = "1" } = router.query;
    if (!user || !repos) {
        return null
    }
    return (
        h(Fragment, null,
            h(ReposWrapper, null,
                h(ReposHeader, null, 'Repositories',
                    h(ReposCount, null, user.public_repos)),
                repos.map((repo) => (
                    h(RepositoryWrapper, { key: repo.id },
                        h(RepositoryDescription, {
                            target: '_blank', rel: 'noopener noreferrer',
                            href: `https://github.com/${user.login}/${repo.name}`
                        },
                            h(RepositoryName, null, repo.name)),
                        h(RepositoryDescription, null, repo.description),
                        h(RepositoryLanguage, null, repo.language,
                            h(RepositoryUpdatedAt, null,
                                formatDistance(new Date(repo.updated_at), new Date(), {
                                    addSuffix: true,
                                })
                            )
                        ))
                )),
                h(RepositoryPagination, null,
                    h(Link, { href: `/users/${user.login}?page=${Number(page) - 1}` },
                        h(PaginationButton, null, h('a', null, 'Previous'))),
                    h(Link, { href: `/users/${user.login}?page=${!page ? "2" : Number(page) + 1}` },
                        h(PaginationButton, null, h('a', null, 'Next')))),

            )))
}

export default Repositories;