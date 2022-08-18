//const apiUrl = "http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}";

let fromDate = document.querySelector("#from");
let toDate = document.querySelector("#to");
let currency = document.querySelector(".form-check");

document.querySelector("#boton").addEventListener("click", function () {
  fromDate = fromDate.textContent;
  toDate = toDate.value;
  currency = currency.value;
  console.log(fromDate);
});

// fromDate = fromDate.replace("/", "-");
// toDate = "07-01-2022";
// currency = "USD";

let apiUrlQuery = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`;
//let apiUrlQuery = `http://api.coindesk.com/v1/bpi/historical/close.json`

// document.querySelector("#from").onchange = () => {
//   updateChart();
// }

// document.querySelector("#to").onchange = () => {
//   updateChart();
// }
// document.querySelector(".form-check").onchange = () => {
//   updateChart();
// }

// function updateChart() {
//   fromDate;
//   toDate;
//   currency;
//   axios
//     .get(
//       `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`
//     )
//     .then((response) => {
//       drawCharts(
//         Object.keys(response.data.bpi),
//         Object.values(response.data.bpi)
//       );
//       document.getElementById("max").innerText = Math.max.apply(
//         Math,
//         Object.values(response.data.bpi)
//       );
//       document.getElementById("min").innerText = Math.min.apply(
//         Math,
//         Object.values(response.data.bpi)
//       );
//     });
// }

const printChart = (stockData) => {
  const dailyData = stockData.bpi;
  // x axis
  const stockDates = Object.keys(dailyData);
  console.log(stockDates);
  // y axis
  const stockPrices = Object.values(dailyData);
  // draw the chart
  const ctx = document.querySelector("#myChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      // x axis
      labels: stockDates,
      datasets: [
        {
          label: "Bitcoin Price Index",
          backGroundColor: "rgba(0, 0, 0",
          borderColor: "rgb(60, 180, 171",
          // y axis
          data: stockPrices,
        },
      ],
    },
  });
};

// const printChart = (stockData) => {
//   const dailyData = stockData.bpi;
//   // x axis
//   const stockDates = Object.keys(dailyData);
//   console.log(stockDates);
//   // y axis
//   const stockPrices = Object.values(dailyData);
//   // draw the chart
//   const ctx = document.querySelector("#myChart").getContext("2d");

//   new Chart(ctx, {
//     type: "line",
//     data: {
//       // x axis
//       labels: stockDates,
//       datasets: [
//         {
//           label: "Bitcoin Price Index",
//           backGroundColor: "rgba(0, 0, 0",
//           borderColor: "rgb(60, 180, 171",
//           // y axis
//           data: stockPrices,
//         },
//       ],
//     },
//   });
// };

// axios
//   .get(apiUrl)
//   .then((response) => {
//     //console.log(response.data.bpi);
//     printChart(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

axios
  .get(apiUrlQuery)
  .then((response) => {
    console.log(response.data);
    printChart(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
