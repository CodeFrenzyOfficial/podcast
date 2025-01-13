'use client';

import { useEffect, useState } from 'react';
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper';
import { useParams } from 'next/navigation';
import { blogData, BlogCardProps } from '@/data/blogs/data';

export default function Page() {
    const { blog_name } = useParams();
    const [blog, setBlog] = useState<BlogCardProps | null>(null);

    useEffect(() => {
        if (blog_name) {
            const decodedSlug = decodeURIComponent(blog_name.toString());
            const foundBlog = blogData.find((blog) => blog.slug === decodedSlug) || null;
            setBlog(foundBlog);
        }
    }, [blog_name]);

    return (
        <NavFooterWrapper>
            <section className="max-w-screen-lg mx-auto p-8">
                {blog ? (
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-lg mb-6">{blog.blogDesc}</p>
                        <img
                            src={blog.imgSrc}
                            alt={blog.title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">Blog not found.</p>
                )}
            </section>
        </NavFooterWrapper>
    );
}
