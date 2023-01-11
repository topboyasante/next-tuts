import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Script from 'next/script'

function FirstPost() {
  return (
   <>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
        />
        <main>
            <h1>First Post:</h1>
            <Image src={`/images/profile.jpg`}
            height={300}
            width={300}
            alt='Nana Kwasi'/>

        <div>
            <Link href={`/`}>Go Home</Link>
        </div>
        </main>
    </>
  )
}

export default FirstPost