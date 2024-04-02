import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="ui secondary menu">
      <img src={logo} />
      <NavLink exact="true" to="/" className="item">
        <i className="home icon"></i> Home
      </NavLink>
      <NavLink exact="true" to="/playlists" className="item">
        <i className="headphones icon"></i> My Playlists
      </NavLink>
      <NavLink exact="true" to="/tracks" className="item">
        <i className="music icon"></i> Tracks
      </NavLink>
      <NavLink exact="true" to="/search" className="item">
        <i className="search icon"></i> Search
      </NavLink>

      <div className="ui right dropdown item">
        John Doe
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item">
            <i className="user icon"></i> Profile
          </div>
          <div className="item">
            <i className="settings icon"></i> Settings
          </div>
          <div className="item">
            <i className="sign out icon"></i>Log out
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
