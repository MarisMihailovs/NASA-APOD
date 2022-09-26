

//  NASA API
const count = 10;
const apiKey = 'RCHhVy0qoZm9DpRnIdEniiD9Vx0LwnP7oQkGgWXd';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// get 10 images from nasa api

async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log(resultsArray);
    } catch (error) {
        // catch error here
        console.log(error);
    }

}

// onload

getNasaPictures();