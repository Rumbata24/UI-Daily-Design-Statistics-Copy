import "../SessionInfo/SessionInfo.css";
import greenArrowUp from "../../assets/green-arrow-up.png";
import pinkArrowUp from "../../assets/pink-arrow-up.png";
import pinkArrowDown from "../../assets/pink-arrow-down.png";

const SessionInfo = () => {
  const sessionItems = [
    {
      sesh: "Users",
      percentArrow: greenArrowUp,
      percentNum: 268,
      total: 15,
      id: 1,
    },
    {
      sesh: "Sessions",
      percentArrow: greenArrowUp,
      percentNum: 268,
      total: 17,
      id: 2,
    },
    {
      sesh: "Bounce Rate",
      percentArrow: pinkArrowUp,
      percentNum: 19.9,
      total: 68.78,
      id: 3,
    },
    {
      sesh: "Session Duration",
      percentArrow: pinkArrowDown,
      percentNum: 29.5,
      total: 3000,
      id: 4,
    },
  ];

  return (
    <section className="session-info-wrapper">
      {sessionItems.map((item) => (
        <div className="box" key={item.id}>
          <div className="top-items">
            <p>{item.sesh}</p>
            <div className="arrow">
              <img src={item.percentArrow} alt="" />
              <p>{item.percentNum}%</p>
            </div>
          </div>
          <h1>{item.total}K</h1>
        </div>
      ))}
    </section>
  );
};

export default SessionInfo;
