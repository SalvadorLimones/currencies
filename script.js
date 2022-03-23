const money = [
  {
    title: "US Dollar",
    sub: "$",
    text: "USD",
  },
  {
    title: "Euro",
    sub: "€",
    text: "EUR",
  },
  {
    title: "Chinese Yuan",
    sub: "¥",
    text: "CNY",
  },
  {
    title: "Thai Baht",
    sub: "฿",
    text: "THB",
  },
  {
    title: "British Pound Sterling",
    sub: "£",
    text: "GBP",
  },
  {
    title: "Ghanaian Cedi",
    sub: "₵",
    text: "GHS",
  },
  {
    title: "Japanese Yen",
    sub: "￥",
    text: "JPY",
  },
  {
    title: "Polish Zloty",
    sub: "zł",
    text: "PLN",
  },
];
let beerHTML = "";

money.map((money, i) => {
  beerHTML += `
    <div class="money-card">
      <div class="money-sub-container">
        <p class="money-sub">${money.sub}</p>
      </div>
      <h3 class="money-title">${money.title}</h3>
      <p class="money-text">${money.text}</p>
      <button class="money-button">
      Save
    </button>
    </div>
  `;
});

function loadEvent() {
  console.log("page has been loaded");
  document
    .querySelector(".money-card-container")
    .insertAdjacentHTML("beforeend", beerHTML);
}

window.addEventListener("load", loadEvent);
