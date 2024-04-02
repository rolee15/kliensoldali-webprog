import "./App.css";

function App() {
  return (
    <>
      <div className="ui container">
        <nav className="ui secondary menu">
          <img src="assets/logo.png" />
          <a className="active item" href="index.html">
            <i className="home icon"></i> Home
          </a>
          <a className="item" href="playlists.html">
            <i className="headphones icon"></i> My Playlists
          </a>
          <a className="item" href="tracks.html">
            <i className="music icon"></i> Tracks
          </a>
          <a className="item" href="search.html">
            <i className="search icon"></i> Search
          </a>
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
        <div className="ui center aligned container">
          <h1>My Playlist App</h1>
          <p>
            Welcome to MPA. To use this awesome piece of software you must log
            in.
          </p>
          <div className="ui segment">
            <div className="ui two column very relaxed stackable grid">
              <div className="column">
                <div className="ui form">
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input type="text" placeholder="Username" />
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input type="password" />
                      <i className="lock icon"></i>
                    </div>
                  </div>
                  <div className="ui blue submit button">Login</div>
                </div>
              </div>
              <div className="middle aligned column">
                <div className="ui big button">
                  <i className="signup icon"></i>
                  Sign Up
                </div>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
