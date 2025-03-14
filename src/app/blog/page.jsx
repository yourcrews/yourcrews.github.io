import Blog from '@/common/module/Blog'
import React from 'react'

export const metadata = {
  title: 'Case studies - sieve',
  description: 'Case studies',
  
}

const Blogpost = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Blog/>
    </div>
  )
}

export default Blogpost
