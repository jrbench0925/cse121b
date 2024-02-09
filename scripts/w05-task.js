/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (data) => {
    data.forEach((temple) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        const imageElement = document.createElement("img");
        h3Element.textContent = temple.templeName;
        imageElement.setAttribute("src", temple.imageUrl);
        imageElement.setAttribute("alt", temple.templeName);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    })
}

/* async getTemples Function using fetch()*/

const getTemples = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    const divChild = document.querySelector('#temples');
    while (divChild.firstChild) {
        divChild.removeChild(divChild.lastChild);
    }
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    const checkDate = new Date("1950-01");
    let filteredList;
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => (new Date(temple.dedicated)) <= checkDate));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples(url);