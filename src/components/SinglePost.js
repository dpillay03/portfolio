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
          "authorName": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <section id='page'>
      <article className='post-article-container'>
        <h1 className='section-titles blog-header'>{singlePost.title}</h1>
        <img
          className='post-main-image'
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
        />
        <div className='post-content-container'>
          <BlockContent
            className='post-content'
            blocks={singlePost.body}
            projectId='ph4hgpxb'
            dataset='production'
          />
        </div>
        <div className='post-author-container'>
          <img
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            className='post-author-image'
          />
          <p className='post-author'>{"Written by " + singlePost.authorName}</p>
        </div>
      </article>
    </section>
  );
}
