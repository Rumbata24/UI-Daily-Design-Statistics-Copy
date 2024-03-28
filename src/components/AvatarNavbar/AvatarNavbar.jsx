import "../AvatarNavbar/AvatarNavbar.css";
import info from "../../assets/info.png";
import notification from "../../assets/notification.png";
import avatar from "../../assets/Bitmap.png";
const AvatarNavbar = () => {
  return (
    <section className="AvatarNavbar">
      <img className="info-img" src={info} alt="info-icon" />
      <img className="notif-img" src={notification} alt="notification-icon" />
      <img className="avatar-img" src={avatar} alt="avatar-picture" />
    </section>
  );
};

export default AvatarNavbar;
