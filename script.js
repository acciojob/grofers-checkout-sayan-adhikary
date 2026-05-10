const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let end = 0;
const getSum = () => {
//Add your code here
	if (end == 1) {
        return;
    }
    end = 1;
    let sum = 0;
    let price = document.querySelectorAll(".price");

    for (let i = 0; i < price.length; i++) {
        let temp = price[i].textContent;
        sum += Number(temp);
    }

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.textContent = "Total Cost : ";
    td2.textContent = `${sum}`;
    tr.appendChild(td1);
    tr.appendChild(td2);

    // body.insertBefore(tr, btn);
    let table = document.querySelector('table');
    table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

