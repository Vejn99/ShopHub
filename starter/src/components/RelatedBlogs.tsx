import React from "react";
import { BlogInterface } from "./BlogItem";

const RelatedBlogs = ({ blogProps }: BlogInterface) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {blogProps.map((el) => (
          <li key={el.id} className="mb-4">
            <a className="wrao-pic-w">
              <img src={el.img} alt="PRODUCT" className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {el.title}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
