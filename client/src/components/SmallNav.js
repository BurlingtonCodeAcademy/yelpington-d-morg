import { Link } from "react-router-dom";

import { useState, useEffect } from "react";


function SmallNav(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (restaurants.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restaurantList) => {
          setRestaurants(restaurantList);
        });
    }
  });

 //------------------------------------same functionality as Nav.js...just smoller----------------// 
  return (
    <ul id="mini-nav-bar" style= {{display: "inline-block"}}>
        <h4>
        <Link to={"/"}>Return to Overview</Link>
        </h4>
      {restaurants.map((title, index) => {
        return (
          <h5 key={index}>
            <Link style= {{textDecoration: "none"}} to={`/restaurant/${title}`}>{title.replace("-", " ")}</Link>
          </h5>
        );
      })}
    </ul>
    
  );
}

export default SmallNav;