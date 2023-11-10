import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
const Header = () => {
  const { items } = useContext(BasketContext);
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0",
        }}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to="/basket">
          Basket
          <span className="count">{items.reduce((acc, curr) => (acc += curr.count), 0)}</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
