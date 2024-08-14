import React from "react";
import './product.css'
import img1 from "../../images/image 1.png";
import img2 from "../../images/image 2 (1).png";
import img3 from "../../images/image 3.png";
import img4 from "../../images/image 4.png";
import img5 from "../../images/Image 5.png";
import img6 from "../../images/image 6.png";
import img7 from "../../images/image 7.png";
import img8 from "../../images/image 8.png";

import { Link } from "react-router-dom";
const data = [
  {
    src: img1,
    name: "Slytherine",
    des: "Stylish cafe chair",
    price: "Rp 2.500.000",
    redPrice: "Rp 3.500.000",
    bubble: "-30%",
  },
  {
    src: img2,
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: "Rp 2.500.000",
    redPrice: false,
    bubble: false,
  },
  {
    src: img3,
    name: "Lolito",
    des: "Luxury big sofa",
    price: "Rp 7.000.000",
    redPrice: "Rp 14.000.000",
    bubble: "-50%",
  },
  {
    src: img4,
    name: "Respira",
    des: "Outdoor bar table and stool",
    price: "Rp 500.000",
    redPrice: false,
    bubble: "New",
  },
  {
    src: img5,
    name: "Grifo",
    des: "Night lamp",
    price: "Rp 1.500.000",
    redPrice: false,
    bubble: false,
  },
  {
    src: img6,
    name: "Muggo",
    des: "Small mug",
    price: "Rp 150.000",
    redPrice: false,
    bubble: "New",
  },
  {
    src: img7,
    name: "Pingky",
    des: "Cute bed set",
    price: "Rp 7.000.000",
    redPrice: "Rp 14.000.000",
    bubble: "-50%",
  },
  {
    src: img8,
    name: "Potty",
    des: "Minimalist flower pot",
    price: "Rp 500.000",
    redPrice: false,
    bubble: "New",
  },
];
function HomeProducts() {
  return (
    <>
      {data.map((item) => (
        <>
          <Link to='/Product'>
            <div className="products" >
              {item.bubble ? (
                <div className={item.bubble === "New" ? "bubble new" : "bubble"}>
                  {item.bubble}
                </div>
              ) : (
                ""
              )}
              <div>
                <img className="img-fluid" src={item.src} />
              </div>
              <div className="prod-des">
                <ul>
                  <li>{item.name}</li>
                  <li>{item.des}</li>
                  <li>
                    {item.price}
                    <span
                      style={{
                        color: "#B0B0B0",
                        fontSize: "1rem",
                        textDecoration: "line-through",
                        fontWeight: "400",
                      }}
                    >
                      {item.redPrice}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default HomeProducts;
