import { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <a href="/">
          <img className="open" src="./img/logo-main.png" alt="open" />
        </a>
        {/* <div className="collapse">
                    <span className="horizontal"></span>
                    <span className="horizontal"></span>
                    <span className="horizontal"></span>
                  </div> */}
        <div>
          <ul
            id="nav__links"
            className={this.state.clicked ? "nav__links active" : "#navbar"}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About">What we do</a>
            </li>
            {/* <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li> */}
            <li onClick={this.props.onClick}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
