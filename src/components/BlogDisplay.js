import React from "react";
import "../style/blog.scss";

const BlogDisplay = () => {
  return (
    <div className='home-blog'>
      <div className='home-blog-item'>
        <img
          alt='blogs by daniel pillay'
          className='home-blog-image'
          src='https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg'
        />
        <h4 className='home-blog-title'>5 Favorite Books of 2021</h4>
        <p className='home-blog-description'>
          Let's talk about some of my favorite and most influential books from
          2021.
        </p>
      </div>

      <div className='home-blog-item'>
        <img
          alt='blogs by daniel pillay'
          className='home-blog-image'
          src='https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg'
        />
        <h4 className='home-blog-title'>
          A Guide for Vets Transitioning to Tech
        </h4>
        <p className='home-blog-description'>
          Are you a veteran? Here are some tips to break into the industry of
          tech
        </p>
      </div>

      <div className='home-blog-item'>
        <img
          alt='blogs by daniel pillay'
          className='home-blog-image'
          src='https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg'
        />
        <h4 className='home-blog-title'>Transform Your Life With Jiu-jitsu</h4>
        <p className='home-blog-description'>
          Jiu-jitsu has transformed my life both on and off the mat and it can
          do the same for you.
        </p>
      </div>
      <button className='contact-button'>See More Blogs</button>
    </div>
  );
};

export default BlogDisplay;
