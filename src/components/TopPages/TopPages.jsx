import "../TopPages/TopPages.css";
import MoreStats from "../MoreStats/MoreStats";
const TopPages = () => {
  const pageVisits = [
    {
      pages: "/",
      visits: 23956,
      id: 1,
    },
    {
      pages: "/about",
      visits: 565,
      id: 2,
    },
    {
      pages: "/license",
      visits: 477,
      id: 3,
    },
    {
      pages: "/posts/sketch-help-ce...links-search-day-1120",
      visits: 458,
      id: 4,
    },
    {
      pages: "/posts/sketch-pricing...n-card-cards-day-1116",
      visits: 700,
      id: 5,
    },
    {
      pages: "/posts/sketch-stats-ca...istics-cards-day-1119",
      visits: 907,
      id: 6,
    },
    {
      pages: "/posts/sketch-dark-c...ogress-bar-day-1112",
      visits: 558,
      id: 7,
    },
    {
      pages: "/posts/sketch-messages-me...-messaging-ui-kit-day-595	1	",
      visits: 493,
      id: 8,
    },
  ];
  return (
    <section className="top-pages-wrapper">
      <div className="top-pages-visits-section">
        <p>Top Pages</p>
        <p>Visits</p>
      </div>
      <div className="top-pages-visits-info">
        {pageVisits.map((visit) => (
          <div key={visit.id} className="info">
            <p className="visits">{visit.pages}</p>
            <p>{visit.visits}</p>
          </div>
        ))}
      </div>
      <MoreStats />
    </section>
  );
};

export default TopPages;
