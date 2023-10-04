import React from 'react'

const Navbar = () => {
 return (
  <header className="sticky top-0 ">
   <nav className='bg-darkSecondary text-white  flex items-center justify-between px-10   border-b border-gray-400'>
    <div>
     <h1 className='font-semibold tracking-widest text-xl'>Coder Space</h1>
    </div>
    <ul className="flex justify-center gap-4 text-2xl font-medium uppercase tracking-wider py-2">
     <li className="p-2">Home</li>
     <li className="p-2">Blog</li>
     <li className="p-2">About</li>
     <li className="p-2">Contact</li>
    </ul>
   </nav>
  </header>
 )
}

export default Navbar