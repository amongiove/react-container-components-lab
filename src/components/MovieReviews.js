import React from 'react';

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
  };
  
const Review =({
    display_title, 
    byline,
    link,
    summary_short
}) => {
    return (
        <div className="review" key={summary_short} href={link}>
            <h2 className="linked-title" href={link}>{display_title}</h2>
            <h4 className="byline">{byline}</h4>
            <h5 className="short">{summary_short}</h5>
        </div>
    )
}


export default MovieReviews;