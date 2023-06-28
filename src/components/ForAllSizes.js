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
        <Link to={`/${"men-shoes"}/${"nike-react-infinity-run-flyknit"}`}>
          <div className="test1">
            <img
              src={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg"
              }
              alt="Shoe Site"
              className="logo-image"
              onClick={handleClick}
            />
          </div>
        </Link>
        <div>
          <Link to={`/${"men-shoes"}/${"michael-feburary-sk8-hi"}`}>
            <div className="green-shoes-spacing test1">
              <span><img
                src={
                  "https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$"
                }
                alt="Shoe Site"
                className="logo-image"
                onClick={handleClick}
              /></span>
            </div>
          </Link>{" "}
          <Link to={`/${"men-shoes"}/${"nikenew-react-miler"}`}>
            <div className="green-shoes-spacing">
            <div className="test1">
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg"
                }
                alt="Shoe Site"
                className="logo-image"
                onClick={handleClick}
              />
              </div>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ForAllSizes;
