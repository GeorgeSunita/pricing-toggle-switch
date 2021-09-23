let priceCard1 = document.querySelector(".price1");
let priceCard2 = document.querySelector(".price2");
let priceCard3 = document.querySelector(".price3");

document.addEventListener("keypress", function (event) {
    event.preventDefault();

    if (event.ArrowUp || event.keyCode === 38) {
        console.log("clicked");
    }
});

document.querySelector("#toggle").addEventListener("click", function () {
    if (document.querySelector("#toggle:checked") !== null) {
        priceCard1.innerHTML = "&dollar;19.99";
        priceCard2.innerHTML = "&dollar;24.99";
        priceCard3.innerHTML = "&dollar;39.99";
    } else {
        priceCard1.innerHTML = "&dollar;199.99";
        priceCard2.innerHTML = "&dollar;249.99";
        priceCard3.innerHTML = "&dollar;399.99";
    }
});
