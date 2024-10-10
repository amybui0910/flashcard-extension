// loads all of the cards 

const name = "flashcards"

document.addEventListener("DOMContentLoaded", function() {
    let info = document.querySelector('tbody');
    let cards = JSON.parse(localStorage.getItem(name)) || []; 

    // Display cards in view page
    if (cards.length) {
        for (let i = 0; i < cards.length; i++) {
            const front = cards[i]["front"]; // Get front of card
            const back = cards[i]["back"]; // Get back of card
            info.innerHTML += `
                <tr>
                    <td>${front}</td>
                    <td>${back}</td>
                    <td><button class="delete" key="${front}">Delete</button></td>
                </tr>
            `;
        }
    } else {
        console.log("No cards to display");
    }

    // Deleting flashcards
    let buttons = document.querySelectorAll('.delete'); 

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            cards.splice(i, 1); // remove from list
            localStorage.setItem(name, JSON.stringify(cards)); // update flashcards

            this.closest('tr').remove(); // remove this row
        })
    }
});
