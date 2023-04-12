import "./More.css";
const More = () => (
  <section className="MoreSection">
    <div className="heading">
      <h1>What Our Happy Client Say</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        laborum.
      </p>
    </div>
    <div className="body">
      <div className="person">
        <img src="./img/bg-ring.png" alt="" className="bg-ring" />
        <img src="./img/Bg-SquareDot.png" alt="" className="bg-dot" />
        <img src="./img/person.png" alt="" className="person" />
      </div>
      <div className="feedback">
        <h1>Matthew Opoola</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          enim numquam mollitia reprehenderit!
        </p>
        <div className="slider">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="people">
        <img src="./img/Bg-Circle.png" alt="" className="bg-circle" />
        <img src="./img/people.png" alt="" className="peopleImg" />
      </div>
    </div>
  </section>
);
export default More;
