let income = [];
let expenses = [];



let expenseChart;
let cashFlowChart;



function addIncome(){

let name =
document.getElementById("incomeName").value;


let amount =
Number(document.getElementById("incomeAmount").value);



if(!name || !amount) return;



income.push({

name,
amount

});


updateDashboard();


}





function addExpense(){

let name =
document.getElementById("expenseName").value;


let amount =
Number(document.getElementById("expenseAmount").value);



if(!name || !amount) return;



expenses.push({

name,
amount

});


updateDashboard();


}





function updateDashboard(){


let totalIncome =
income.reduce(
(sum,item)=>sum+item.amount,
0
);



let totalExpense =
expenses.reduce(
(sum,item)=>sum+item.amount,
0
);



document.getElementById(
"incomeTotal"
).innerText =
"$"+totalIncome;



document.getElementById(
"expenseTotal"
).innerText =
"$"+totalExpense;



document.getElementById(
"balance"
).innerText =
"$"+(totalIncome-totalExpense);



displayTransactions();


createCharts();



}




function displayTransactions(){


let list =
document.getElementById(
"transactionList"
);



list.innerHTML="";



income.forEach(item=>{

list.innerHTML +=
`
<li>
🟢 ${item.name}
+$${item.amount}
</li>
`;

});



expenses.forEach(item=>{

list.innerHTML +=
`
<li>
🔴 ${item.name}
-$${item.amount}
</li>
`;

});


}





function createCharts(){


let expenseNames =
expenses.map(
e=>e.name
);


let expenseValues =
expenses.map(
e=>e.amount
);



if(expenseChart)
expenseChart.destroy();



expenseChart =
new Chart(
document.getElementById(
"expenseChart"
),
{

type:"doughnut",

data:{

labels:expenseNames,

datasets:[{

data:expenseValues

}]

}


});






if(cashFlowChart)
cashFlowChart.destroy();



cashFlowChart =
new Chart(
document.getElementById(
"cashFlowChart"
),
{

type:"bar",

data:{

labels:[
"Income",
"Expenses"
],

datasets:[{

label:"Amount",

data:[

income.reduce(
(a,b)=>a+b.amount,
0
),

expenses.reduce(
(a,b)=>a+b.amount,
0
)

]

}]

}


});



}