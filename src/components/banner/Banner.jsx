import "./Banner.css";
const Banner = ({ onClick }) => (
  <section className="BannerSection">
    <div className="text">
      <h1>A Digital Product Agency</h1>
      <p>
        Leading digital agency with solid design and development expertise. We
        build readymade websites, mobile applications, and elaborate online
        business services.
      </p>
      <button className="Btn" onClick={onClick}>
        Contact Now
      </button>
      <img src="./img/Bg-Dot.png" alt="" className="bg-dotted" />
    </div>
    <div className="img">
      <img src="./img/banner.png" alt="" className="side-img" />
      <img src="./img/Bg-Ellipse.png" alt="" className="bg-ellipse" />
      <img src="./img/Bg-Rectangle.png" alt="" className="bg-Rectangle" />
    </div>
  </section>
);
export default Banner;
