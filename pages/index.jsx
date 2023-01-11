import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function index({allPostsData}) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <h1>Home</h1>
        <Link href={`/posts/firstpost`}>Go To First Post!</Link>

        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
      </section>
      </main>
    </>
  )
}

export default index