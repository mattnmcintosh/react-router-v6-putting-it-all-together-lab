import './NavBar.css'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/directors" end>Directors</NavLink>
      <NavLink to="/about" end>About</NavLink>
    </nav>
  );
}

export default NavBar;
