import React from 'react';
import {getSortedPostsData} from "@/lib/posts";
import ListItem from "@/components/ListItem";

const Posts = () => {
    const posts : BlogPost[] = getSortedPostsData()
    return (
        <section>

                <div className="mt-6 mx-auto max-w-2xl">
                    <h2 className=" text-4xl font-bold dark:text-white/90">Blog</h2>
                    <ul className="w-full">
                        {posts.map(post =>
                        <ListItem post={post} key={post.id}/>)
                        }
                    </ul>
                </div>)
        </section>
    );
};

export default Posts;
