import Header from "../layout/Header";

const MyApp = ({ Component, pageProps }) => {
    // Component는 불러오는 페이지(page/index.jsx)
    // Component는 pageProps를 props로 받는데,
    // 이는 pages 안의 파일에서 getServerSideProps, getStaticProps 혹은 getIntialProps로 페이지에 전달해 주는 props.
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