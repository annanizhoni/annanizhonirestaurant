import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {

    const user = false
  return (
    <div className="h-12 text-orange-700 p-4 flex items-center justify-between border-b-2 border-b-orange-700 md:h-24 lg:px-20 xl:px-40">
        {/* Left Links */}
        <div className="hidden md:flex gap-4 flex-1">
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* Logo */}
        <div className="text-xl text-orange-900 md:font-bold flex-1 md:text-center">
            <Link href="/">The Yucca Blossom</Link>
        </div>
        <div>
            {/*Mobile Menu*/}
        </div>
        <div className="md:hidden">
            <Menu />
        </div>
        {/* Right Links */}
        <div className="hidden md:flex gap-4 items-center justify-end flex-1">
            <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-teal-300 text-white px-1 rounded-md">
                <Image src="/phone.png" alt="phone" width={20} height={20}/>
                <span>435-123-4567</span>
            </div>
            {!user ? (
            <Link href="/login">Login</Link>
            ) : (
            <Link href="/orders">Orders</Link>
            )}
            <CartIcon />
        </div>
    </div>
  );
};

export default Navbar;