import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//     html, body 태그를 보강하는데 주로 사용됨,
//     <title> , <description>, <meta> 등 프로젝트 정보 제공하는 코드작서, 폰트, 외부 api, cdn, 등을 불러온다
//    또한 CSS-in-JS의 SSR을 위한 설정도 가능
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name='title' content='깃허브 레파지토리' />
                    <meta name="description" content="깃허브 레파지토리 리스트입니다."/>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument