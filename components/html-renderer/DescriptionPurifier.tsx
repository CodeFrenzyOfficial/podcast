"use client";

import React from "react";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils";

type DescriptionPurifierProps = {
    html: string;
    className?: string;
    actualText: boolean
};

const DescriptionPurifier: React.FC<DescriptionPurifierProps> = ({ html, className, actualText = false }) => {
    const cleanHTML = DOMPurify.sanitize(html);

    return (
        <div
            className={cn(actualText && "prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-a:text-blue-600 prose-img:rounded-lg prose-li:marker:text-gray-500", className)}
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
    );
};

export default DescriptionPurifier;
