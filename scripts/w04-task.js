/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jeff Bench",
    photo: 'images/profile.webp',
    favoriteFoods: [
        "Ribs",
        "Tacos",
        "BBQ",
        "Hamburgers",
        "Steak",
        "Sushi",
        "Soup",
        "Cinnamon Rolls"
    ],
    hobbies: [
        "Photography",
        "Concerts",
        "Riding Motorcycles",
        "Traveling"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Provo, UT",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Twin Falls, ID",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Rexburg, ID",
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Blackfoot, ID",
        length: "39 years"
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li')
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li')
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = places.place;
    dd.textContent = places.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});