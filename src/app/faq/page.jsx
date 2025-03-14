import Faq from '@/common/module/Faq'
import React from 'react'

export const metadata = {
  title: 'Faq & Documentation - sieve',
  description: 'Faq & Documentation',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Faq />
    </div>
  )
}

export default page
