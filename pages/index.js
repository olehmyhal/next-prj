import Head from 'next/head'

import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/post-util"

const HomePage = (props) => {
    return (
        <>
          <Head>
            <title>Oleg' Blog</title>
            <meta
              name='description'
              content='I post about programming and web development.'
            />
          </Head>
          <Hero />
          <FeaturedPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage