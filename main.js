
const printNewName = () => {
  let newDogName = document.getElementById("dog-name-input").value;
  let insertName = document.getElementById("name-of-dog").textContent = newDogName;
}
let nameDogButtton = document.getElementById("dog-name").addEventListener("click", printNewName);