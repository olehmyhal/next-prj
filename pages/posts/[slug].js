import Head from "next/head"

import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/post-util"

const PostDetailPage = (props) => {
    return <>
        <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post}/>
    </>
}

export function getStaticProps(context){
    const { params: { slug } } = context

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
    const postFilenames = getPostsFiles()

    const slugs = postFilenames.map(postFilename => postFilename.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}

export default PostDetailPage