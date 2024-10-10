// Form element
const new_card_form = document.getElementById("new-card-form");

// Button elements
const create = document.getElementById("create");
const view = document.getElementById("view");

// Input elements
const front_card = document.getElementById("front-card");
const back_card = document.getElementById("back-card");

const name = "flashcards";

// check if flashcards exist
if (!localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify([]));
}

// Create a card
create.onclick = function() {

    event.preventDefault(); // pause form submition

    if (front_card.value && back_card.value) { // both values are filled
        let card = { front: front_card.value, back: back_card.value }; 
        let cards = JSON.parse(localStorage.getItem(name)); // add card

        cards.push(card); // add card to cards
        localStorage.setItem(name, JSON.stringify(cards)); // update local storage

        new_card_form.submit(); // submit form

    } else {
        console.log("Invalid Card")
    }
}

// View all cards stored
view.onclick = function() {
    location.href = "cards.html"
}

// set timers
let timers = document.querySelector('select');
timers.addEventListener('change', function() {
    if (document.querySelector('#off').selected) { // turn alarm off
        chrome.alarms.clear("popupAlarm");
    } else {
        chrome.alarms.create("popupAlarm", {
            periodInMinutes: parseInt(timers.value) // set timer
        })
    }
})