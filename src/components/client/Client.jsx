import "./Client.css";
const Client = () => (
  <section className="ClientSection">
    <div className="client">
      <div className="text">
        <h1>Our Client</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className="logos">
        <div>
          <img src="./img/logo-google.png" alt="" className="air" />
        </div>
        <div>
          <img src="./img/logo-airbnb.png" alt="" className="air" />
        </div>
        <div>
          <img src="./img/logo-uber.png" alt="" />
        </div>
        <div>
          <img src="./img/logo-mazon.png" alt="" className="mt" />
        </div>
      </div>
    </div>
  </section>
);
export default Client;
