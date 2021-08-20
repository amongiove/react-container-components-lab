import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KDhLoe3yMX8GPEGUPOIBkbzUpMgiXTKq';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleSearchInputChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    handleSearch = (event) => {
        event.preventDefault();
        let search = this.state.searchTerm
        fetch(URL.concat(`&query=${search}`))
        .then((response) => response.json())
        .then((reviewData) => this.setState({reviews: reviewData.results}))
    }

    render(){
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSearch}>
                    <label>Search for Reviews</label>
                    <input type='text' id='search-input' onChange={this.handleSearchInputChange} />
                    <button type='submit'>Search</button>
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search</h2> }
                <MovieReviews reviews={this.state.reviews} /> 
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;