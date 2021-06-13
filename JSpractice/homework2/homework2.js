let currentOl = document.getElementById("marital-status");
let parentDiv = currentOl.parentNode;
let form = document.createElement("form");
let h1 = document.createElement("H1");
let h1Text = document.createTextNode("Choose your Marital Status");
h1.appendChild(h1Text);
parentDiv.insertBefore(h1, currentOl);

var options = ["Single", "Married", "Do not share"];

for (const choices in options){
var choiceSelection = document.createElement('input');
choiceSelection.setAttribute('type', 'radio');
choiceSelection.setAttribute('name', 'maritalStatus');

var labelValue = document.createElement('label');
labelValue.innerHTML = options[choices];
form.appendChild(choiceSelection);
form.appendChild(labelValue);
var mybr = document.createElement('br');
form.appendChild(mybr);
}

parentDiv.replaceChild(form,currentOl);