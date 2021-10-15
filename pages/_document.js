import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <div>
                        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                        <title>Glint</title>
                        <meta name="description" content />
                        <meta name="author" content />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="stylesheet" href="/css/base.css+vendor.css+main.css.pagespeed.cc.fzrL7LkDfk.css" />
                        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    </div>
                </Head>
                <body id="top" class="pace-done">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument