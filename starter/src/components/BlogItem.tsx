import Link from "next/link";
import React from "react";

export interface BlogProps {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
}

export interface BlogInterface {
  blogProps: BlogProps[];
}
const BlogItem = ({ blogProps }: BlogInterface) => {
  return (
    <>
      {blogProps.map((el) => (
        <div key={el.id} className="p-b-63 d-block">
          <Link href={`/blog/${el.id}`}>
            <span className="hov-img0 how-pos5-parent">
              <img src={el.img} alt="IMG-BLOG" />
            </span>
          </Link>
          <div className="p-t-32">
            <h4 className="p-b-15">
              <span className="ltext-108 cl2 hov-cl1 trans-04">{el.title}</span>
            </h4>

            <p className="stext-117 cl6">{el.excerpt}</p>

            <div className="flex-w flex-sb-m p-t-18">
              <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                <span>
                  <span className="cl4">By</span> {el.author}
                  <span className="cl12 m-l-4 m-r-6">|</span>
                </span>

                <span>{el.category}</span>
              </span>

              <span className="stext-101 cl2 trans-04 m-tb-10">
                Continue Reading
                <i className="fa fa-long-arrow-right m-l-9"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
