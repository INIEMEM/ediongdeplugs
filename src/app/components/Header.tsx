"use client";
import { Button } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'
const Header = () => {
  const router = useRouter()
  return (
    
      <header className='flex fixed top-0 left-0 right-0 w-screen shadow-sm bg-white justify-between p-2 lg:hidden'>
          <p>DePlug</p>

          <Button type='primary' onClick={()=> router.replace('/login')}>Get Started</Button>
      </header>
    
  )
}

export default Header