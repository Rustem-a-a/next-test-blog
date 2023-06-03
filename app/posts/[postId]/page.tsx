import React from 'react';
import {getPostData, getSortedPostsData} from "@/lib/posts";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    params:{
        postId:string
    }
}

export function generateStaticParams(){
    const posts = getSortedPostsData()
    return posts.map(post =>({
        postId:post.id
    }))
}

export async function generateMetadata({params:{postId}}:Props):Promise<Metadata>{
    const posts =  getSortedPostsData()
    const post = posts.find(post=>postId===post.id)
    if(!post){return {
        title: 'Post is not exist | Next Blog'
    }}
    return {
        title: postId +' | Next Blog',
        description: post.title
    }
}

const PostById = async ({params:{postId}} : Props) => {
    const posts =  getSortedPostsData()
    const post = posts.find(post=>postId===post.id)
    if(!post){return notFound()}
    const {title,date,contentHtml} = await getPostData(postId)
    const pubDate = getFormattedDate(date)
    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html:contentHtml}}/>
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
        </main>
    );
};

export default PostById;

