import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { FeaturedPost } from './_components/FeaturedPost';
import { BlogGrid } from './_components/BlogGrid';
import { Newsletter } from './_components/Newsletter';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs - KelasInovatif University',
    description: 'Read the latest insights, news, and articles from our faculty and students.',
};

export default function BlogsPage() {
    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <Hero />
            <FeaturedPost />
            <BlogGrid />
            <Newsletter />
            <Footer />
        </main>
    );
}