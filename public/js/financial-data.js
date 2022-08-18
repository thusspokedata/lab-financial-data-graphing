let fromDate = document.getElementById("from").valueAsDate;
let toDate = document.querySelector(".to").value;
let currency = document.querySelector(".form-check-input");

console.log("this is from currency:", currency)
console.log("this is from toDate:", toDate)
console.log("this is from fromDate:", fromDate)
// let fromDate = undefined;
// let toDate = undefined;
// let currency = "USD"



document.querySelector("#button").addEventListener("click", function () {
  fromDate = document.getElementById("from").valueAsDate;
  toDate = document.querySelector("#to").innerText;
  currency = document.querySelector(".form-check-input").textContent;
  console.log("this is from two:", fromDate);
});




// fromDate = fromDate.replace("/", "-");
// console.log("this is fromDate", fromDate)
fromDate = ("07-01-2021".slice(-4)) + "-" +("07-01-2021".slice(0, -5))
// fromDate = "2021-07-01"
toDate = "2022-07-01";
currency = "USD";


/// from here is working ///

let apiUrlQuery = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`;
// let apiUrlQuery = `http://api.coindesk.com/v1/bpi/historical/close.json`


/////////////////////////////////////////////////////////////////////////////////////////////7
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
///////////////////////////////////////////////////////////////////////////////////////////


axios
  .get(apiUrlQuery)
  .then((response) => {
    console.log(response.data);
    printChart(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
