import { useEffect, useState } from "react";
import "../Devices/Devices.css"; // Assuming you have CSS for styling
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import more from "../../assets/more.png";
const data = [
  { device: "Desktop", percentage: 52 },
  { device: "Tablet", percentage: 15 },
  { device: "Mobile", percentage: 36 },
];

const Devices = () => {
  const [activeMonth, setActiveMonth] = useState("");

  const months = [
    {
      monthName: "May",
      id: 1,
    },
    {
      monthName: "June",
      id: 2,
    },
    {
      monthName: "July",
      id: 3,
    },
    {
      monthName: "August",
      id: 4,
    },
  ];

  useEffect(() => {
    setActiveMonth("May"); // Change "May" to the desired initial active month
  }, []);

  const handleActiveMonth = (activeMonth) => {
    setActiveMonth(activeMonth);
  };
  return (
    <>
      <section className="device-wrapper">
        <div className="left-device-section">
          <div className="top-device">
            <h3>Devices</h3>

            <div className="months">
              {months.map((item) => (
                <p
                  key={item.id}
                  onClick={() => handleActiveMonth(item.monthName)}
                  className={activeMonth === item.monthName ? "active" : ""}
                >
                  {item.monthName}
                </p>
              ))}
            </div>
          </div>

          <BarChart width={350} height={150} data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="device" type="category" hide />
            <Bar dataKey="percentage" fill="#0E1731" barSize={9} />
            {data.map((entry, index) => (
              <text
                key={index}
                x={9} // Move text to the right by adding a constant value
                y={index * 45} // Adjust the y position as needed
                dy={15} // Adjust vertical offset
                fill="#000"
                textAnchor="start" // Align text to the start (left)
              >
                {entry.device} ({entry.percentage}%)
              </text>
            ))}
          </BarChart>
        </div>

        <div className="right-device-section">
          <div className="top-right">
            <h3>Devices</h3>
            <div className="img-container">
              <img src={more} alt="" />
            </div>
          </div>
          <div className="middle-right">
            <div className="together">
              <p>Direct</p>
              <span>24</span>
            </div>
            <div className="together">
              <p>Organic</p>
              <span>8</span>
            </div>
            <div className="together">
              <p>Social</p>
              <span>13</span>
            </div>
            <div className="together">
              <p>Referral</p>
              <span>5</span>
            </div>
            <div className="together">
              <p>Social</p>
              <span>6</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Devices;
