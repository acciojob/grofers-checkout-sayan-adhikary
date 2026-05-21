let prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach((price) => {
    total += Number(price.textContent);
});

let table = document.querySelector("table");

let newRow = document.createElement("tr");

let totalCell = document.createElement("td");

totalCell.colSpan = 2;
totalCell.textContent = "Total Price: " + total;

newRow.appendChild(totalCell);

table.appendChild(newRow);