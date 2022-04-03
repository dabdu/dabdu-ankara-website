import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <div className='h-24 w-full flex items-center justify-between px-24' >
        <div className='ml-6'>
            <Image 
            src={"https://firebasestorage.googleapis.com/v0/b/house-marketplace-b3077.appspot.com/o/ankara%2FGroup%2046.png?alt=media&token=a8c3ad3a-29da-4cd0-ab6a-10dcc8f181e2"}
            alt={"Logo"}
            height={30}
            width={70}
            layout={"fixed"}
            />
        </div>
        <div>
            <ul
                className='flex items-center justify-around text-white'
            >
                <li className='navlink font-bold'>home</li>
                <li className='navlink'>how It Works</li>
                <li className='navlink'>marketplace</li>
                <li className='navlink primary-btn py-2 px-10'>Login</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Header