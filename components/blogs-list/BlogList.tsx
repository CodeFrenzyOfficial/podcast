'use client';

import { useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";
import BlogCard from "../cards/blog-card/BlogCard";
import { blogData } from "@/data/blogs/data";
import Link from "next/link";
import useBlogStore from "@/store/blog";

export default function BlogList() {
    const { blogs, fetch_blogs } = useBlogStore();
    const [search, setSearch] = useState('');

    const filteredBlogs = useMemo(() => {
        if (!search) return blogData;
        return blogData.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    useEffect(() => {
        fetch_blogs();
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto space-y-8">
            {/* Search Input */}
            <div className="grid place-items-center">
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-2/3 lg:w-1/2"
                    placeholder="Search Blogs"
                />
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs?.length > 0 ? (
                    blogs?.map((blog: any, index: any) => (
                        <Link href={`/blogs/${blog.title}`} key={index}>
                            <BlogCard
                                blogDesc={blog.blogDesc}
                                imgSrc={blog.imgSrc[0]}
                                title={blog.title}
                            />
                        </Link>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No blogs found.
                    </p>
                )}
            </div>
        </div>
    );
}
