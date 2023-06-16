import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carousel1({ posts }) {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {posts.map((post) => (
          <div className="image-silder">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${post.backdrop_path}`}
              />
            </div>
            <div className="image-silder-overlay">
              <div className="post-title">
                {post.title}
                <span className="post-rating">Rate: {post.vote_average}</span>
              </div>

              <div className="post-description">{post.overview}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousel1;
