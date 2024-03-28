import "../ActiveUsersBlock/ActiveUsersBlock.css";
import arrowRightWhite from "../../assets/arrow-right-white.png";
import PageViewsGraph from '../PageViewsGraph/PageViewsGraph'
const ActiveUsersBlock = () => {
  return (
    <section className="activeUsers">
      <section className="users-wrapper">
        <p>Active Users</p>
        <h1>72</h1>
        <div className="bottom">
          <p>View refferals</p>
          <img src={arrowRightWhite} alt="" />
        </div>
      </section>
      
      <section className="graph">
        <PageViewsGraph></PageViewsGraph>
      </section>
    </section>
  );
};

export default ActiveUsersBlock;
