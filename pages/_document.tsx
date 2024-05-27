import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <Analytics />
        </Head>
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
