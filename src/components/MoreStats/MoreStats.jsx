import "../MoreStats/MoreStats.css";
import statArrow from "../../assets/stat-arrow-right-white.png";
const MoreStats = () => {
  return (
    <section className="more-stats-section">
      <div className="top-more-stats">
        <p>More stats</p>
        <div className="stat-arrow-container">
          <img src={statArrow} alt="" />
        </div>
      </div>

      <div className="middle-more-stat">
        <p>More stats</p>
        <h1>42K</h1>
      </div>
      <div className="bottom-more-stat">
        <p>More stats</p>
        <h1>47.46%</h1>
      </div>
    </section>
  );
};

export default MoreStats;
