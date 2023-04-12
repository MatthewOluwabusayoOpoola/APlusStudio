import "./NewsLetter.css";
import addNotificaton from "react-push-notification";
const NewsLetter = ({ onSubmit }) => {
  const handleNotify = (event) => {
    addNotificaton({
      title: "Success",
      message: "You have successfully Subscribed",
      duration: 40000,
      native: true,
    });
  };
  return (
    <section className="NewsletterSsection">
      <div className="NewsletterDiv">
        <img src="./img/Bg-Rectangle4.png" alt="" className="bg-rectangle" />
        <img src="./img/Bg-SquareDot.png" alt="" className="bg-dot" />
        <img src="./img/bg-newsletter.png" alt="" className="bg-newsletter" />
        <div className="text">
          <h1>Subscribe Newsletter</h1>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="input">
          <form className="innerInput" onSubmit={handleNotify}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
