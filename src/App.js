import addNotificaton from "react-push-notification";
import "./App.css";
import Client from "./components/client/Client";
import Banner from "./components/banner/Banner";
import About from "./components/about/AboutUs";
import Video from "./components/video/Video";
import More from "./components/more/More";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Contact from "./components/contact/Contact";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactChecked: false,
    };
  }
  contactToggle = () => {
    this.setState({
      contactChecked: !this.state.contactChecked,
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.contactChecked ? (
          <>
            <Navbar onClick={this.contactToggle} />
            <div style={{ height: "65px" }} />
            <Banner onClick={this.contactToggle} />
            <Client />
            {/* <About /> */}
            <Video />
            <More />
            <NewsLetter />
            <hr className="horizontalLine"></hr>
            <Footer />
          </>
        ) : (
          <Contact onClick={this.contactToggle} />
        )}
        {/*  */}
      </div>
    );
  }
}

export default App;
