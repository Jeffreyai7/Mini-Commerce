import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="w container mx-auto grid grid-cols-1 gap-4 bg-gray-100 px-4 py-8 md:grid-cols-3 md:px-6 dark:bg-gray-800">
      <div>
        <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ratione praesentium ut sed repudiandae fugit animi ipsum quia autem
          iusto eius, itaque asperiores, adipisci porro perferendis. Sit, id?
        </p>
      </div>
      <div>
        <h3 className="mb-6 font-bold">Company</h3>
        <ul>
          {footerLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-6 font-bold">Get in Touch</h3>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
