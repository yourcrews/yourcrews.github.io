import BlogDetail from '@/common/module/Blog/component/BlogDetail'
import React from 'react'
import { BlogContent } from '@/common/constant/BlogContent'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return BlogContent.map((blog) => ({
    slug: blog.slug,
  }))
}

const page = ({ params }) => {
  const blog = BlogContent.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className='flex justify-center'>
      <BlogDetail />
    </div>
  )
}

export default page
