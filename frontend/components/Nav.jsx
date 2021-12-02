import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav className="bg-neutral shadow">
      <div className="container mx-auto py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center relative">
          <div className="w-10 h-10">
            <Image
              src="/logo.svg"
              layout="fill"
              alt="My logo"
            />
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="flex flex-col gap-2 md:flex-row md:mx-6">
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Home</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/about">About</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/contact">Contact</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/shop">Shop</Link>
            { user
            && <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/add-item">AddItems</Link>}
            {' '}
            { !user
            && <a href="/api/auth/login">Login</a>}
            { user
      && <a href="/api/auth/logout">Logout</a>}
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Nav;
