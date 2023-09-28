import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const AyurvedaVsAllopathyAnalysis = () => {
  // Sample data for Ayurveda and Allopathy usage over the past 10 years
  const data = {
    labels: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Ayurveda",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: [5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500],
      },
      {
        label: "Allopathy",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [12000, 11800, 11500, 11200, 10900, 10600, 10300, 10000, 9700, 9400],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        // type:linear,
        title: {
          display: true,
          text: "Number of People",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  return (
    <div className="py-4" style={{backgroundColor:"#fdf5e6"}} id="analysis">
      <h2  style={{textAlign:"center"}}>Analysis of Ayurveda vs. Allopathy Usage Over the Past 10 Years</h2>
      <div className="row col-12">
        <div className=" col-lg-6 col-md-12 ">
          <Bar data={data} options={options} />
        </div>
        <div className="col-lg-6 col-md-12">
  <ul style={{ fontSize: '17px', color: 'black' }}>
    <li>
      <span style={{ fontWeight: 'bold' }}>Steady Rise in Ayurveda Usage:</span> Ayurveda has witnessed a consistent increase in usage, with the number of people opting for it growing from around 5,000 in 2013 to approximately 9,500 in 2022.
    </li>
    <li>
      <span style={{ fontWeight: 'bold' }}>Allopathy's Slight Decline:</span> In contrast, Allopathy, the conventional medical system, has experienced a slight decline in usage over the same period, with around 12,000 people in 2013 to approximately 9,400 in 2022.
    </li>
    <li>
      <span style={{ fontWeight: 'bold' }}>Changing Healthcare Preferences:</span> The data indicates changing healthcare preferences among individuals, with an increasing number turning to Ayurveda as an alternative to Allopathy.
    </li>
    <li>
      <span style={{ fontWeight: 'bold' }}>Factors Influencing Choices:</span> It's important to recognize that healthcare choices can be influenced by various factors such as individual health needs, personal beliefs, and cultural influences, which may explain the shifts in usage.
    </li>
    <li>
      <span style={{ fontWeight: 'bold' }}>Holistic Health Awareness:</span> The rising interest in Ayurveda suggests a growing awareness of holistic and natural healing methods, reflecting a broader trend toward holistic health and well-being.
    </li>
  </ul>
</div>

     </div>
    </div>
  );
};

export default AyurvedaVsAllopathyAnalysis;
