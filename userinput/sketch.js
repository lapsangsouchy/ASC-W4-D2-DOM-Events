// Create the button Ref
let buttonRef = document.getElementById('submitButton');

// Create Callback Function that takes in our event

function onClick(event) {
  // Prevent webpage from refreshing
  event.preventDefault();
  // Select our input
  let formRef = document.getElementById('username');
  // Store the value currently inside of input when clicked
  const userText = formRef.value;
  // Create a pop-up of our user input
  alert(userText);
}

// Adding the event listener with Callback

buttonRef.addEventListener('click', onClick);
