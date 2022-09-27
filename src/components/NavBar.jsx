import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge bg-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;