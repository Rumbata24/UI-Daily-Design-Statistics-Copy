import { useEffect, useState } from "react";
import "../MainNavbar/MainNavbar.css";

const MainNavbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    setActiveItem("Home"); // Change "Home" to the desired initial active
  }, []);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const navbarItems = [
    { name: "Home", href: "#", id: 1 },
    { name: "Audience", href: "#", id: 2 },
    { name: "Behaviour", href: "#", id: 3 },
    { name: "Conversions", href: "#", id: 4 },
  ];

  return (
    <nav className="navbar-wrapper">
      <ul className="navbar-container">
        {navbarItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activeItem === item.name ? "active" : ""}`}
          >
            <a href={item.href} onClick={() => handleItemClick(item.name)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <p>
        <a href="#">Customize</a>
      </p>
    </nav>
  );
};

export default MainNavbar;
