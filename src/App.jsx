// import PageViewsGraph from "./components/PageViewsGraph/PageViewsGraph";
import AvatarNavbar from "./components/AvatarNavbar/AvatarNavbar";
import MainNavbar from "./components/MainNavbar/MainNavbar";

import ActiveUsersBlock from "./components/ActiveUsersBlock/ActiveUsersBlock";
import SessionInfo from "./components/SessionInfo/SessionInfo";
import Alert from "./components/Alert/Alert";
import Devices from "./components/Devices/Devices";
import TopPages from "./components/TopPages/TopPages";
const App = () => {
  return (
    <>
      <AvatarNavbar />
      <MainNavbar />

      <main>
        <section className="left-wrapper-app">
          <ActiveUsersBlock />
          <SessionInfo />
          <Alert />
          <Devices />
        </section>
        <section className="left-wrapper-app">
          <TopPages />
        </section>
      </main>
    </>
  );
};

export default App;
