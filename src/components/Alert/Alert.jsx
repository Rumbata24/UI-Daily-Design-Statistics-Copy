import "../Alert/Alert.css";
import news from "../../assets/news.png";
const Alert = () => {
  return (
    <section className="alert-wrapper">
      <div className="alert-left">
        <img src={news} alt="" />

        <div className="alert-text">
          <h3>No alerts set</h3>
          <p>Get notified when your data drasticaly change</p>
        </div>
      </div>
      <button className="alert-btn">Set alert</button>
    </section>
  );
};

export default Alert;
