"use client";
import React, { useEffect, useState } from "react";
import { BlogProps } from "./BlogItem";
import Link from "next/link";

const FeaturedBlogs = () => {
  const [blogProps, setBlogProps] = useState<BlogProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5001/blogs/?_limit=3");
        const data = await res.json();
        setBlogProps(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {blogProps.map((el) => (
            <div key={el.id} className="col-sm-6 col-md-4 p-b-40">
              <div className="blog-item">
                <Link href={`/blog/${el.id}`}>
                  <div className="hov-img0">
                    <img src={el.img} alt="IMG-BLOG" className="img-fluid" />
                  </div>
                </Link>
                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">By</span>

                      <span className="cl5">{el.author}</span>
                    </span>

                    <span>
                      <span className="cl4">on</span>

                      <span className="cl5 ml-1">{el.date}</span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <div className="mtext-101 cl2 hov-cl1 trans-04">
                      {el.title}
                    </div>
                  </h4>

                  <p className="stext-108 cl6">{el.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
