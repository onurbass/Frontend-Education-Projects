// import { getInventory } from "../../services/dashboard";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { getCounts } from "../../services/dashboard";
import { theme } from "antd";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const {
    token: { colorPrimaryBorder, colorPrimaryBorderHover },
  } = theme.useToken();

  // useEffect(() => {
  //   getInventory().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  useEffect(() => {
    getCounts().then((counts) => {
      const data = {
        labels: ["Users", "Roles", "Permissions", "Tasks", "Flows"],
        datasets: [
          {
            label: "Data Counts",
            data: counts,
            backgroundColor: colorPrimaryBorderHover,
            borderColor: colorPrimaryBorder,
            borderWidth: 3,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    });
    // eslint-disable-next-line
  }, []);

  return <Chart type="bar" data={chartData} options={chartOptions} />;
};

export default Dashboard;
