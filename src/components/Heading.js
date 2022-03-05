import React from 'react';
import {Link} from "react-router-dom"

export const Heading = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Team
          </Link>
          <Link  className="btn-btn-success" to="/add"> <button class="btn btn-outline-success">Adduser</button></Link>
        </div>
      </nav>
    </div>
  );
};