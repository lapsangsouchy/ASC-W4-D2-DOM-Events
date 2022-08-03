// Task
// Change the image using the change image button
let changeImageButton = document.getElementById('change_image');
let firstImg = document.getElementById('first_image');

console.dir(firstImg);

// Task adding images!
// Declare counter and array of Pokemon
let counter = 0;
let pokemonArray = ['bulbasaur', 'charmander', 'pikachu', 'squirtle'];

// Create Callback function for change button (only works on first image loaded)
function changeImageOnClick() {
  firstImg.src = 'images/squirtle.png';
}

changeImageButton.onclick = changeImageOnClick;

//Getting elements DOM
let addImageButton = document.getElementById('add_image');
let imageContainer = document.getElementById('image_container');

//Add event listener method
addImageButton.addEventListener('click', function () {
  let pokemonName = pokemonArray[counter];
  let newImg = document.createElement('img');
  newImg.src = 'images/' + pokemonName + '.png';
  imageContainer.appendChild(newImg);
  counter++;
  if (counter == 4) {
    counter = 0;
  }
});

//get delete button
let deleteImageButton = document.getElementById('delete_image');

//add an onclick function
deleteImageButton.onclick = function () {
  imageContainer.removeChild(imageContainer.children[0]);
};
