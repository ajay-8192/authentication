import React from 'react';
import { Link } from 'react-router-dom';
import './style.module.css';


class NavbarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    const list_style={
      marginLeft:"8x",
      marginRight:"8px"
    }
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item nav-list" style={list_style}>
              <a className="nav-link" href="#"><i className="fa fa-home fa-lg" aria-hidden="true"></i></a>
            </li>
            <li className="nav-item nav-list" style={list_style}>
              <a className="nav-link" href="#"><i className="fa fa-columns fa-lg" aria-hidden="true"></i></a>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <li className="nav-item nav-list">
            <button className="nav-link" href="#">Only my Tasks</button>
            </li>
          </ul> */}
          <ul className="navbar-nav logo mr-auto">
            <a className="navbar-brand" href="#">WorkZone</a>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown nav-list-profile">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Icon</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" >Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>


    )
  }
}
export default NavbarComponent
