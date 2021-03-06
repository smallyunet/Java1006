import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>

        {this.props.children || <Home/>}
      </div>
    )
  }
})
