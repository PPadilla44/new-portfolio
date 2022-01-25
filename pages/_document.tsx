import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet" />
                </Head>
                <body className='flex flex-col h-screen'>
                    <Main />
                    <NextScript />
                    <footer className='mt-auto'>
                        {/* FOOT */}
                    </footer>
                </body>
            </Html>
        )
    }
}

export default MyDocument
