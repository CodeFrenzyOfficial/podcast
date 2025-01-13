'use client'

import React from 'react'
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper'
import { useParams } from 'next/navigation';

export default function Page() {
    const { blog_name } = useParams();
    return (
        <NavFooterWrapper>{blog_name ? blog_name : 'loading..'}</NavFooterWrapper>
    )
}