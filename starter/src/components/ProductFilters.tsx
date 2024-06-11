"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const ProductFilters = () => {
  const router = useRouter();
  const query = useSearchParams();
  const searchTermParams = query.get("q");
  const [gender, setGender] = useState<string>(query.get("gender_like") || "");
  const [search, setSearch] = useState<string>(searchTermParams || "");

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/shop?q=${search}`);
  };

  const handleFilter = (type: string) => {
    if (type === "all") {
      setGender("");
      setSearch("");
    } else if (type === "women" || type === "man") {
      setGender(type);
    } else {
      setSearch(type);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (gender) {
      params.set("gender_like", gender);
    }
    if (search) {
      params.set("q", search);
    }

    router.push(`?${params.toString()}`);
  }, [gender, search]);

  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            !gender && !search ? "how-active1" : ""
          }`}
          onClick={() => handleFilter("all")}
        >
          All Products
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            gender === "women" ? "how-active1" : ""
          }`}
          onClick={() => handleFilter("women")}
        >
          Women
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            gender === "man" ? "how-active1" : ""
          }`}
          onClick={() => handleFilter("man")}
        >
          Men
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          onClick={() => handleFilter("belt")}
        >
          Belt
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          onClick={() => handleFilter("shoes")}
        >
          Shoes
        </button>

        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          onClick={() => handleFilter("watch")}
        >
          Watches
        </button>
      </div>

      <div className="flex-w flex-c-m m-tb-10">
        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
          Search
        </div>
      </div>

      {/* search */}
      <div className="panel-search w-full p-t-10 p-b-15">
        <div className="bor8 dis-flex p-l-15">
          <button
            className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04"
            onClick={() => handleSearchSubmit(search)}
          >
            <i className="zmdi zmdi-search"></i>
          </button>

          <input
            className="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};
