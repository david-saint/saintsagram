import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';

class Main extends Component {

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Saintstagram</Link>
        </h1>
        {cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;