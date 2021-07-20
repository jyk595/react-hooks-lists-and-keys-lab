import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map( (linkName, index) => {
        return (
          <a href={`#`+ linkName} key={index}>{linkName}</a>
        )
      })}
    </nav>
  )
}

export default NavBar;
