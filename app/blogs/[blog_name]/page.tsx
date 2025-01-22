'use client';

import { useEffect, useState } from 'react';
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper';
import { useParams } from 'next/navigation';
import { blogData, BlogCardProps } from '@/data/blogs/data';
import Link from 'next/link';

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
            <section className="max-w-screen-2xl mx-auto p-8">
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-2/3'>
                        {blog ? (
                            <div className='w-full space-y-7'>
                                <div className='w-full rounded-lg'>
                                    <img
                                        src={blog.imgSrc}
                                        alt={blog.title}
                                        className="lg:w-full h-96 object-cover rounded-lg shadow-xl shadow-black/30"
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                                    <p className="text-base text-neutral-500">{blog.blogDesc}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 text-lg">Blog not found.</p>
                        )}
                    </div>

                    <div className='w-full md:w-1/3'>
                        <h2 className="w-full text-center text-2xl font-bold mb-4">Recent Blogs</h2>
                        <div className="flex flex-col gap-5">
                            {blogData.slice(0, 3).map((blog, index) => (
                                <Link href={`/blogs/${encodeURIComponent(blog.slug)}`} key={index}>
                                    <div className="bg-white rounded-lg p-4 overflow-hidden shadow-lg shadow-black/20">
                                        <img src={blog.imgSrc} className='w-full h-48 object-cover mb-2 rounded-lg' alt="" />
                                        <h3 className="text-lg font-semibold">{blog.title}</h3>
                                        <p className="text-gray-600 line-clamp-4">{blog.blogDesc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </NavFooterWrapper>
    );
}
