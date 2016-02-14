// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

// class
class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    )
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }
}

// maps
const mapStateToProps = (state) => {
  return {
    posts: state.posts.all
  }
}

// export
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
