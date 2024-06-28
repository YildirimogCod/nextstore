import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../helper/SearchBox";
import WishList from "../helper/WishList";
import ShoppingCart from "../helper/ShoppingCart";

const Navbar = () => {
  return (
    <header className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <nav className="flex items-center justify-between w-[95%] md:w-3/4 mx-auto h-full">
        {/* logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={140} />
        </Link>
        {/* links */}

        <ul className="flex gap-2 sm:gap-5 items-center">
          <SearchBox />
          <WishList />
          <ShoppingCart />
          <span>User</span>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
