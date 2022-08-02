// Select First h1
let firstH1 = document.querySelector('h1');
console.log(firstH1);

// Select First p
let pRef = document.querySelector('p');
console.log(pRef);

// Select Second p (a <p> element inside of a <div>)
let pRef2 = document.querySelector('div p');
console.log(pRef2);

// Add width of 300px;
// Add a border 3px solid black

let clickDiv = document.getElementById('click_div');
console.log(clickDiv);
clickDiv.style.border = '3px solid black';
clickDiv.style.width = '300px';

// Create onclick function
function clickDivOnClick() {
  clickDiv.innerHTML += ' Magikarp';
}

// Set the onClick to element
clickDiv.onclick = clickDivOnClick;

// Add as many Magikarps as you want :)
