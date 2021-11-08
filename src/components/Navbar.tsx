import React from "react";

export const Navbar: React.FunctionComponent = () =>{
return(
    <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">информация</a></li>
      </ul>
    </div>
  </nav>
)
}

