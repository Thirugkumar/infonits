import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const IotMenu = [
    {
      icon: <i className="fa fa-paint-brush" />,
      title: "Building and Home Automation Solutions",
      path: "/service/BAHAS",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-globe" />,
      title: "Industrial Solutions (IIOT)",
      path: "/service/IIOT",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-microchip" />,
      title: "Custom IIOT Solution Development",
      path: "/service/iot/CIIOT",
      cName: "dropdown-link",
    },
    {
      icon: <i className="fa fa-tablet" />,
      title: "Smart Farming & Agriculture IOT Solutions",
      path: "/service/iot/SFAIOT",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {IotMenu.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.icon}&nbsp;&nbsp;&nbsp;
                  {item.title}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
