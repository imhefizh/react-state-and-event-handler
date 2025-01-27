import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRating: 0
    };
  }

  handleDislike = () => {
    this.setState((stateSebelumnya) => ({
        dislikes: stateSebelumnya.dislikes + 1,
        totalRating: stateSebelumnya.totalRating + 1
    }))
  };;
  handleLike = () => {
    this.setState((sebelum) => ({
        likes: sebelum.likes + 1,
        totalRating: sebelum.totalRating + 1
    }))
  };

  render() {
    return (
     <>
     <div className='content-rating'>
        <h2>Rate this poem!</h2>
        <p>
            The sky is blue, and The rose is red. I want still with you, even I'm dead
        </p>
        <div className='rating-button'>
            <button className='like-button' onClick={this.handleLike}>Like ({this.state.likes})</button>
            <button className='dislike-button' onClick={this.handleDislike}>Dislike ({this.state.dislikes})</button>
            <p>Total of rating : {this.state.totalRating}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
