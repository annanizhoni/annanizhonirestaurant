import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-orange-950 flex items-center justify-between">
      <Link href="/" className="font-semibold text-xl">
        The Yucca Blossom
      </Link>
      <p>©2023</p>
    </div>
  );
};

export default Footer;
