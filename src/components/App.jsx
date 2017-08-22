import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from '../actions';


class App extends Component {
  componentDidMount() {
    fetch('http://jservice.io/api/categories?count=20')
      .then(response => response.json())
      .then(json => {
        this.props.setCategories(json);
      });
  }

  render() {
    return (
      <div>
        <h2>Jeopardy</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state }
}

export default connect(mapStateToProps, { setCategories })(App);
