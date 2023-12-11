import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import backgroundImg from "./assets/discord-background.png";

function App() {
  return (
    <>
      <div className="App">
        <div id="navbar">
          <img className="navbar-img" src={logo} alt="discord logo" />
          <img src={menu} alt="discord menu" />
        </div>
        <h1 id="main-heading">
          Imagine a <br></br>place...
        </h1>
        <p id="sub-heading">
          ...where you can belong to a school club, a gaming group, or a
          <br></br>
          worldwide art community. Where just you and a handful of <br></br>
          friends can spend time together. A place that makes it easy to
          <br></br> talk every day and hang out more often.
        </p>
        <div>
          <button id="white-btn">Download for Mac</button>
        </div>
        <div>
          <button id="black-btn">Open Discord in your browser</button>
        </div>

        <img id="bg-img" src={backgroundImg} alt="discord background image" />
      </div>
    </>
  );
}

export default App;
