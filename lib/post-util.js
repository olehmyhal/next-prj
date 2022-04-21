import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => fs.readdirSync(postsDirectory)

export const getPostData = postId => {
    const postSlug = postId.replace(/\.md$/, '')

    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    
    return postData
}

export const getAllPosts = () => {
    const postsFiles = getPostsFiles()

    const allPosts = postsFiles.map(postFile => getPostData(postFile))

    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1)  
}

export const getFeaturedPosts = () => getAllPosts().filter(post => post.isFeatured)