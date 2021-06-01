import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../style/blog.scss";

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
    <main id='article-section'>
      <h1 className='page-header'>BLOG</h1>
      <section>
        <div className='article-container'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  className='article'
                  to={"/post/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='blog-image'
                    />
                    <span>
                      <h3 className='blog-title'>{post.title}</h3>
                      <h3 className='blog-title'>{post.publishedAt}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
        <div class='clear'></div>
      </section>
    </main>
  );
}
