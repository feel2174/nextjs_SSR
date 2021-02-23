import React from "react";
import Header from "../layout/Header";
import type { AppProps } from 'next/app'
 
function MyApp({ Component, pageProps} : AppProps) {
    // Component는 불러오는 페이지(page/index.jsx)
    // Component는 pageProps를 props로 받는데,
    // 이는 pages 안의 파일에서 getServerSideProps, getStaticProps 혹은 getIntialProps로 페이지에 전달해 주는 props.

        /**
     * a page component
     * pageProps in <body> -> <script id="__NEXT_DATA__" type="application/json">
     */

    return (
        <>
        
        <Header />
            <Component {...pageProps} />
            <style jsx global>{`
            body {
                margin: 0;
                font-family: Noto Sans, Noto Sans KR;
            }
            `}</style>
        </>
    )
}

export default MyApp;