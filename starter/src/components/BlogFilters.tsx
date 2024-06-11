"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const BlogFilters = () => {
  const router = useRouter();
  const query = useSearchParams();
  const searchTermParams = query.get("q");
  const [category, setCategory] = useState<string>(
    query.get("category_like") || ""
  );
  const [search, setSearch] = useState<string>(searchTermParams || "");

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/blog?q=${search}`);
  };

  const handleFilter = (type: string) => {
    if (type === "all") {
      setCategory("");
      setSearch("");
    } else if (
      type === "fashion" ||
      type === "beauty" ||
      type === "street" ||
      type === "life" ||
      type === "diy"
    ) {
      setCategory(type);
    } else {
      setSearch(type);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) {
      params.set("category_like", category);
    }
    if (search) {
      params.set("q", search);
    }

    router.push(`?${params.toString()}`);
  }, [category, search]);

  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div className="side-menu">
        <form
          className="bor17 of-hidden pos-relative"
          onSubmit={() => handleSearchSubmit(search)}
        >
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />

          <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
        </form>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

          <ul>
            <li className="bor18">
              <button
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={() => handleFilter("fashion")}
              >
                Fashion
              </button>
            </li>

            <li className="bor18">
              <button
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={() => handleFilter("beauty")}
              >
                Beauty
              </button>
            </li>

            <li className="bor18">
              <button
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={() => handleFilter("street")}
              >
                Street Style
              </button>
            </li>

            <li className="bor18">
              <button
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={() => handleFilter("life")}
              >
                Life Style
              </button>
            </li>

            <li className="bor18">
              <button
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                onClick={() => handleFilter("diy")}
              >
                DIY & Crafts
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
