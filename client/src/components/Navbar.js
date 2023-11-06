import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/home" className="nav-title">Questionnare</a>
      <div className="menu">
        <ul className="nav-ul">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/login" className="nav-link">Log in</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/create-account" className="create-account">Create Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;