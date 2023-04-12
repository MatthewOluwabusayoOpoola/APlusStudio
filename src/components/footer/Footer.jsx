import "./Footer.css";
const Footer = () => (
  <footer className="footerSection">
    <div className="topFooter">
      <div className="rightFooter">
        <img src="./img/logo-main.png" alt="" className="mainLogo" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          itaque illo quod vero eaque quas rerum, neque, fugiat minus illum
          distinctio perspiciatis culpa ex magnam quam alias! In, doloremque
          expedita.
        </p>
        <div className="logo">
          <a href="#">
            <img
              src="./img/icon-facebook.png"
              alt="facebook"
              className="icon-facebook"
            />{" "}
          </a>
          <a href="#">
            <img
              src="./img/icon-twitter.png"
              alt="facebook"
              className="icon-twitter"
            />{" "}
          </a>
          <a href="#">
            <img
              src="./img/icon-linkedin.png"
              alt="facebook"
              className="icon-linkedin"
            />{" "}
          </a>
        </div>
      </div>
      <div className="leftFooter">
        <div className="innerLeftDiv whatWeDo">
          <h1>What We Do</h1>
          <p>Web Design</p>
          <p>App Design</p>
          <p>Social Media Manager</p>
          <p>Market Analysis Project</p>
        </div>
        <div className="innerLeftDiv company">
          <h1>Company</h1>
          <p>
            <a href="#">About Us</a>
          </p>
          <p>
            <a href="#">Career</a>
          </p>
          <p>
            <a href="#">Become an Investor</a>
          </p>
        </div>
        <div className="innerLeftDiv support">
          <h1>Support</h1>
          <p>
            <a href="#">FAQ</a>
          </p>
          <p>
            <a href="#">Policy</a>
          </p>
          <p>
            <a href="#">Business</a>
          </p>
        </div>
        <div className="innerLeftDiv contact">
          <h1>Contact</h1>
          <p>
            <a href="#">WhatsApp</a>
          </p>
          <p>
            <a href="#">Support 24</a>
          </p>
        </div>
      </div>
    </div>
    <div className="bottomFooter">Copyright c 2022 Avi Yansah</div>
  </footer>
);
export default Footer;
