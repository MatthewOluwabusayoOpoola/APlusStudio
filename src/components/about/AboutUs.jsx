import "./About.css";
const About = () => (
  <section className="AboutSection">
    <img src="./img/Bg-Rectangle2.png" alt="" className="bg-rectangle" />
    <img src="./img/Bg-Dot.png" alt="" className="bg-dot" />
    <img src="./img/bg-ring.png" alt="" className="bg-ring" />
    <img src="./img/big-BigRec.png" alt="" className="bg-bigrec" />
    <div className="sectionDiv">
      <div className="text">
        <h1>How can we help your Business ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          excepturi.
        </p>
      </div>
      <div className="cards">
        <div className="outerCard" style={{ marginTop: "20px" }}>
          <div className="card">
            <div
              className="cardImg"
              style={{ background: "#F1F7FF", borderRadius: "20px" }}
            >
              <img src="./img/icon-planning.png" alt="" />
            </div>
            <h1 className="cardHeading">Business Idea Planning</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              libero?
            </p>
          </div>
        </div>
        <div className="outerCard">
          <div className="card">
            <div
              className="cardImg"
              style={{ background: "#F1F7FF", borderRadius: "20px" }}
            >
              <img src="./img/icon-wallet.png" alt="" />
            </div>
            <h1 className="cardHeading">Financial Planning System</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              libero?
            </p>
          </div>
        </div>
        <div className="outerCard" style={{ marginTop: "20px" }}>
          <div className="card">
            <div
              className="cardImg"
              style={{ background: "#FFF7E3", borderRadius: "20px" }}
            >
              <img src="./img/icon-code.png" alt="" />
            </div>
            <h1 className="cardHeading">Development Website and App</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              libero?
            </p>
          </div>
        </div>
        <div className="outerCard" style={{ marginTop: "2px" }}>
          <div className="card">
            <div
              className="cardImg"
              style={{ background: "#DEFFEE", borderRadius: "20px" }}
            >
              <img src="./img/icon-chat.png" alt="" />
            </div>
            <h1 className="cardHeading">Market Analysis Project</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              libero?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
