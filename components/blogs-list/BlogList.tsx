'use client';

import { useMemo, useState } from "react";
import { Input } from "../ui/input";
import BlogCard from "../cards/blog-card/BlogCard";
import { blogData } from "@/data/blogs/data";
import Link from "next/link";

export default function BlogList() {
    const [search, setSearch] = useState('');

    // Filter blogs based on search input
    const filteredBlogs = useMemo(() => {
        if (!search) return blogData; // If no search input, return all blogs
        return blogData.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase()) // Search by title
        );
    }, [search]);

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
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <Link href={`/blogs/${blog.slug}`} key={index}>
                            <BlogCard
                                blogDesc={blog.blogDesc}
                                imgSrc={blog.imgSrc}
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
