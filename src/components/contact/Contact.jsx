import "./Contact.css";
const Contact = ({ onClick }) => {
  return (
    <section className="contactSection">
      <div className="close" onClick={onClick}>
        <i className="fas fa-times"></i>
      </div>

      <div className="contactDiv">
        <img src="./img/Bg-Rectangle4.png" alt="" className="bg-rectangle" />
        <img src="./img/Bg-SquareDot.png" alt="" className="bg-dot" />
        <img src="./img/bg-contact.png" alt="" className="bg-contact" />
        <div className="text">
          <h1>Let's Here From You</h1>
          <p>We would love to here from you</p>
        </div>
        <form action="" method="get" className="input">
          <div className="innerInput">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="innerInput textarea">
            <textarea> </textarea>
          </div>
          <div className="innerInput">
            <button type="submit">Message </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
