import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/lib/constants'

const Footer = () => {
  return (
   <footer className="container grid grid-cols-1 md:grid-cols-3 gap-4 w bg-gray-100 dark:bg-gray-800 mx-auto px-4 md:px-6 py-8">
    <div>
        <Image src="/images/logo.jpg" alt="Logo" width={50} height={50}  />
        <p className='text-gray-600 dark:text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione praesentium ut sed repudiandae fugit animi ipsum quia autem iusto eius, itaque asperiores, adipisci porro perferendis. Sit, id?</p>
    </div>
    <div>
        <h3 className='font-bold mb-6'>Company</h3>
        <ul>
            {
                footerLinks.map((link, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))
            }
            
        </ul>
    </div>
    <div>
        <h3 className='font-bold mb-6'>Get in Touch</h3>
        <ul>
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
        </ul>
    </div>
   </footer>
  )
}

export default Footer