"use client";

import { useMemo, useState } from "react";
import { Input } from "../ui/input";
import BlogCard from "../cards/blog-card/BlogCard";
import Link from "next/link";
import { BlogCardProps } from "@/data/blogs/data";

export default function BlogListClient({ blogs }: { blogs: BlogCardProps[] }) {
    const [search, setSearch] = useState("");

    const filteredBlogs = useMemo(() => {
        if (!search) return blogs;
        return blogs.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, blogs]);

    return (
        <div className="max-w-screen-xl mx-auto space-y-8">
            <div className="grid place-items-center">
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-2/3 lg:w-1/2"
                    placeholder="Search Blogs"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <Link href={`/blogs/${blog.slug}`} key={index}>
                            <BlogCard
                                blogDesc={blog.desc}
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
