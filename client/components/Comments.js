import React, { Component } from 'react';

class Comment extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="" placeholder="author" />
          <input type="text" ref="" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comment;
