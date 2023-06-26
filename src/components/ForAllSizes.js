import React from "react";
import { Link } from "react-router-dom";
const ForAllSizes = () => {
  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <h1>Available Colors</h1>
      <div className="available-color-wrapper">
        <Link to={`/${"men-shoes"}/${"airred-jordan-3-valor-blue"}`}>
          <div className="test1">
            <img
              src={
                "http://localhost:3000/static/media/nike-red.56ed19c9d3be44060182.jpg"
              }
              alt="Shoe Site"
              className="logo-image"
              onClick={handleClick}
            />
          </div>
        </Link>
        <div>
          <Link to={`/${"men-shoes"}/${"airgreen-jordan-3-valor-blue"}`}>
            <div className="green-shoes-spacing last-black">
              <span className="last-black"><img
                src={
                  "http://localhost:3000/static/media/nike-green.38606a65db2eb8b6cf65.jpg"
                }
                alt="Shoe Site"
                className="logo-image"
                onClick={handleClick}
              /></span>
            </div>
          </Link>{" "}
          <Link to={`/${"men-shoes"}/${"nikenew-react-miler"}`}>
            <div className="green-shoes-spacing">
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg"
                }
                alt="Shoe Site"
                className="logo-image"
                onClick={handleClick}
              />
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ForAllSizes;
