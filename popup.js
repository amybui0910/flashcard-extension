// create popup window for flashcard and prompt user with the option to flip and close

let name = "flashcards"
let flashcards = localStorage.getItem(name); 

if (!flashcards) { // flashcards do not exist
    document.querySelector('h1').innerHTML = "No cards created";

} else { 
    let cards = JSON.parse(flashcards); 

    if (cards.length > 0) {// flashcards stored
        let index = Math.floor(Math.random() * cards.length); // choose random flashcard

        document.querySelector('h1').innerHTML = `${cards[index]["front"]}`;
        document.querySelector('body').innerHTML += "<button id='flip'>Flip</button>";

        document.querySelector('#flip').addEventListener('click', function() {
            document.querySelector('h2').innerHTML += `${cards[index]["back"]}`;
            document.querySelector('button').remove();
        });

    } else { // no flashcards stored
        document.querySelector('h1').innerHTML = "No cards stored";
    }
}
