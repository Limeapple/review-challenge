import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        height: "7vh",
        position: "fixed",
        background: "white",
        width: "105vw",
        zIndex: 3,
        borderBottom: "1px solid hsla(38, 100%, 50%, .25)",
      }}>
      <ul style={{ listStyle: "none", display: "flex", cursor: "pointer" }}>
        <li style={{ paddingRight: 25 }}>
          <Link
            to='/'
            style={location.hash.length + location.pathname.length > 1 ? notActive : active}>
            HOME
          </Link>
        </li>

        <li>
          <a
            href='#reviews'
            style={location.hash.length + location.pathname.length > 1 ? active : notActive}>
            REVIEWS
          </a>
        </li>
      </ul>
    </div>
  );
};

const active = {
  textDecoration: "none",
  color: " hsla(38, 95%, 50%, 1)",
  fontWeight: "bold",
  textDecoration: "underline",
};

const notActive = {
  textDecoration: "none",
  color: "black",
};

export default Navbar;
