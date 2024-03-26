var ele = document.getElementById("vk");
var heading = document.createElement("h1");
ele.appendChild(heading);
heading.textContent = "keshavSoft";

var tab = document.createElement("table");
ele.appendChild(tab);

var tab_row = document.createElement("tr");
tab.appendChild(tab_row);

var tab_head = document.createElement("th");
tab_row.appendChild(tab_head);

var tab_head2 = document.createElement("th");
tab_row.appendChild(tab_head2);

tab_head.textContent = "hello";
tab_head2.textContent = "hello2";


var tab_row2 = document.createElement("tr");
tab.appendChild(tab_row2);

var tab_1 = document.createElement("td");
tab_row2.appendChild(tab_1);

var tab_2 = document.createElement("td");
tab_row2.appendChild(tab_2);

tab_1.textContent = "this is a cell";
tab_2.textContent = "this is another cell";
