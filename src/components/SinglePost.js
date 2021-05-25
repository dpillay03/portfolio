import React, { useState, useEffect } from "react";
import "../style/singlepost.scss";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className='blog-wrapper'>
      <article className='blog-article-container'>
        <header className='blog-header-container'>
          <div>
            <div>
              <h1 className='page-header'>{singlePost.title}</h1>
            </div>
          </div>
          <img
            className='blog-main-image'
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
        </header>
        <div className='blog-content-container'>
          <BlockContent
            className='blog-content'
            blocks={singlePost.body}
            projectId='ph4hgpxb'
            dataset='production'
          />
        </div>
        <div className='blog-author-container'>
          <img
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            className='blog-author-image'
          />
          <p className='blog-author'>{"Written by: " + singlePost.name}</p>
        </div>
      </article>
    </main>
  );
}
