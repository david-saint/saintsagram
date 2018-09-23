import React, { Component } from 'react';
// Import components
import Photo from './Photo';
import Comments from './Comments'

class Single extends Component {

  render() {
    // get the post-id
    const { postId } = this.props.params;
    // index of the post 
    const i = this.props.posts.findIndex(post => post.code === postId);
    // get the post
    const post = this.props.posts[i];
    // get the post's comments
    const postComments = this.props.comments[postId] || [];
    // return the view
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;