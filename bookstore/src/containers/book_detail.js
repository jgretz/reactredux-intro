// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// View Class
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// maps
const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  };
}

// connect
export default connect(mapStateToProps)(BookDetail);
