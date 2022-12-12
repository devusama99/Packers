import moment from "moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Subscribed",
          data: [
            {
              x: "Jan",
              y: 400,
            },
            {
              x: "Feb",
              y: 430,
            },
            {
              x: "Mar",
              y: 448,
            },
            {
              x: "Apr",
              y: 470,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 200,
          toolbar: {
            show: false,
          },
        },
        colors: ["#35B368"],

        dataLabels: {
          enabled: false,
        },
        grid: {
          // show: false,
          borderColor: "#fff",
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "category",
          axisTicks: {
            show: false,
          },

          // labels: {
          //   formatter: function (val) {
          //     return "Q" + dayjs(val).quarter();
          //   },
          // },
        },
        yaxis: {
          type: "category",
          axisBorder: {
            show: true,
          },
          labels: {
            formatter: function (val) {
              return "$" + val;
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={380}
        />
      </div>
    );
  }
}
