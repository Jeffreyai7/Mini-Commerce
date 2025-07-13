import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        {/* Logo and Description */}
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your trusted ecommerce store for high-quality products, smooth
            checkout, and fast delivery.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Email:</span>{' '}
              info@example.com
            </li>
            <li>
              <span className="font-medium text-foreground">Phone:</span> (123)
              456-7890
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
