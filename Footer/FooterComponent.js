import React from "react";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
    return(
        <div class="container bg-dark ">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-white">&copy; 2022 Company, Inc</p>

    <NavLink to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use link href="#bootstrap"/></svg>
    </NavLink>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><NavLink to="/" class="nav-link px-2 text-white">Home</NavLink></li>
      <li class="nav-item"><NavLink to="/Book's" class="nav-link px-2 text-white">Book's</NavLink></li>
      <li class="nav-item"><NavLink to="/About" class="nav-link px-2 text-white">About</NavLink></li>
      <li class="nav-item"><NavLink to="/contact" class="nav-link px-2 text-white">Contact</NavLink></li>
    </ul>
  </footer>
</div>

    )
}

export default FooterComponent;