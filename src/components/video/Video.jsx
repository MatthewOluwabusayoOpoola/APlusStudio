import "./Video.css";
const Video = () => (
  <section className="videoSection" id="About">
    <div className="vidDiv">
      <button>
        <img src="./img/icon-play.png" alt="" className="playIcon" />
      </button>

      <img src="./img/vidImg.png" alt="" className="vidImg" />
      <img src="./img/Bg-Circle.png" alt="" className="bg-circle" />
    </div>
    <div className="text">
      <img src="./img/Bg-Rectangle3.png" alt="" className="bg-rectangle" />
      <div className="textText">
        <h1>Great Digital Product Agency Since 2006</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas harum
          alias enim excepturi iure sequi illo fugiat unde rem corrupti deserunt
          voluptatibus atque cum debitis perspiciatis placeat, iste consectetur
          consequuntur.
        </p>
      </div>
    </div>
  </section>
);
export default Video;
