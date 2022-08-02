// Task
// Change the image using the change image button
let changeImageButton = document.getElementById('change_image');
let firstImg = document.getElementById('first_image');

// Create Callback function
function changeImageOnClick() {}

changeImageButton.onclick = changeImageOnClick();

// Task adding images!
let counter = 0;
let pokemonArray = ['bulbasaur', 'charmander', 'pikachu', 'squirtle'];

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
