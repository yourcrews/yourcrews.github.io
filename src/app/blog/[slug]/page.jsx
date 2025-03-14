import BlogDetail from '@/common/module/Blog/component/BlogDetail'
import React from 'react'
import { BlogContent } from '@/common/constant/BlogContent'

export async function generateStaticParams() {
  return BlogContent.map((blog) => ({
    slug: blog.slug,
  }))
}

const page = () => {
  return (
    <div className='flex justify-center'>
      <BlogDetail />
    </div>
  )
}

export default page
