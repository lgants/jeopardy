import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-faded">
        <Link to="/"><h4>Home</h4></Link>
      </nav>
      <br/>
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}
