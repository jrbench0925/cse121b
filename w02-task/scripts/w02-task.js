/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jeff Bench";
const currentYear = new Date().getFullYear;
const profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
document.querySelector("img").setAttribute("src", profilePicture)
document.querySelector("img").setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["Ribs", "Tacos", "BBQ", "Hamburgers", "Steak", "Sushi", "Soup"];
foodElement.textContent = favFoods;
let newFood = "Ice Cream";
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





