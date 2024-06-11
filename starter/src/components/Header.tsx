"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // {q : chicken}
  const searchTermParams = searchParams.get("q");
  const [searchTerm, setSearchTerm] = useState<string>(searchTermParams || "");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/search?q=${searchTerm}`);
  };

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <header className="header-v4">
        <div className="container-menu-desktop ">
          <div className="top-bar fixed-top">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>

              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <Link href="/" className="logo">
                <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
              </Link>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className={` ${pathname === "/" && "active-menu"}`}>
                    <Link href="/">Home</Link>
                  </li>

                  <li className={` ${pathname === "/shop" && "active-menu"}`}>
                    <Link href="/shop">Shop</Link>
                  </li>

                  <li className={` ${pathname === "/blog" && "active-menu"}`}>
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li className={` ${pathname === "/about" && "active-menu"}`}>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m h-full">
                <div className="flex-c-m h-full p-r-24">
                  {/* make a click event listener on this div to show the search */}
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11"
                    onClick={handleSearchClick}
                  >
                    <i className="zmdi zmdi-search"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* use show-modal-search class on this div to toggle the serch*/}
        <div
          className={`modal-search-header flex-c-m trans-04  ${
            showSearch ? "show-modal-search" : "js-hide-modal-search"
          } `}
        >
          <div className="container-search-header">
            {/* close the search on this button on click */}
            <button
              className="flex-c-m btn-hide-modal-search trans-04"
              onClick={handleSearchClick}
            >
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form
              className="wrap-search-header flex-w p-l-15"
              onSubmit={handleSearchSubmit}
            >
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
