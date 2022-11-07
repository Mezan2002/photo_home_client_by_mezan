import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex justify-center container mx-auto mt-5 mb-10">
      <div>
        <ul className="menu menu-horizontal">
          <li className="mr-3">
            <Link>Photos</Link>
          </li>
          <li className="mr-3">
            <Link>Videos</Link>
          </li>
          <li className="mr-3">
            <Link>GIFs</Link>
          </li>
          <li className="mr-3">
            <Link>Animations</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/addNew" className="btn">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Menu;
