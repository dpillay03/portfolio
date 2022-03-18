import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "../../style/blog.scss";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <section id='page'>
      <h1 className='section-titles'>ARTICLES & BLOGS</h1>
      <section>
        <div className='blog-flex-container'>
          {postData &&
            postData.map((post, index) => (
              <div className='blog-flex-item'>
                <Link
                  className='article'
                  to={"/blog/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='blog-image'
                    />
                    <span>
                      <p className='blog-description'>{post.title}</p>
                    </span>
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}
