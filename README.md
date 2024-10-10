# cs50_final_project
# Flashcard chrome extension 
#### Video Demo: https://youtu.be/OndbzlF2u1A
#### Description: 

This project is intended to be submitted for the Harvard cs50 2024 online course. Uses the following resources
to help implement the code: 
- https://youtube.com/playlist?list=PLVrGZCP4x3PRHKbq-gDrSygGHbU4X9pTR&si=1LQjCtmzpbNiVqyK
- cs50.ai

Development of this extension will either slow down or stop completely.

Please feel free to use this code as you please, as long as proper credit is in place. Further improvements to this project are more than welcome. 

This is a chrome extension that allows the user to create their own flashcards, store them and set a timer so a popup window with a randomly selected card appears. 

#### Functionality
When users click the extension icon they are able to: 
- create their own flashcards, inputting text for the "front" and for the "back" of the card
- view all of their stored flashcards
- change the timer of when the popup window appears or turn it off completely

If the input texts for "front" and "back" are empty, no card is created if button to create is clicked and the console logs "Invalid card". 

Default setting of the timer is off.

When users click to view all of their stored flashcards, a new page appears and all of their stored cards are stored in a row in a table as well as an option to delete the corresponding card on that row. If the user hovers over a row, the entire row will be highlight with another colour. 

When the popup window appears, users will be displayed with the "front" of the card and a button to "flip" the card. If that button is pressed, the "back" of the card will be displayed and the "flip" button will be deleted. 

If no cards have been created, the popup window will say "no cards created" and if no cards are currently stored, the popup window will say "no cards stored". 

Users are required to close the popup window themselves. 

#### Specifics for files
manifest.json - This file allows the extension to be made and allows the usage of chrome.alarms, chrome.storage and chrome.tabs API in related files using permissions. Additionally, this file allows the usage of service workers. 

background.js - This file allows the usage of service workers and to properly use the chrome.alarms API to use the chrome.storage API to create the popup window that uses popup.html for the window. I debated only using a 5 minute timer but that was not up to my standards to make every application as user-friendly as possible. 

popup.html and popup.js - These files were used to create and make the functionality of the popup window that displays the information of a random card and "flip" the card. popup.js utilizes the chrome.storage API to locate the user's local storage where the array of flashcards are located to pick a card at random. 

flashcard.html and flashcard.js - These files were used to create the page to create flashcards, view flashcards and change the timer of when the popup window appears. 
flashcard.js utilizes the chrome.storage API to create flashcards, by locating the user's local storage, finding the array associated with the key "flashcards" and adding to that array when the button with the id "create" is clicked. 
If the input texts for front and back are empty, no card is created if the create button is clicked. 
flashcard.js utilizes the chrome.alarms API to set up and turn off a timer via a change in options listed in flashcard.html.

cards.html and cards.js - These files were used to create the page to view and delete the flashcards the user has created. 
cards.js utilizes the chrome.storage API to view flashcards, locating the user's local storage, finding the array associated with the key "flashcards" and iterating through the array to create new rows in the table of flashcards in cards.html. 

style.css - Stylesheet for all of the above html files listed above. 

flashcard_logo.png - extension icon. Created in Canva. 

#### Roadmap
Future implementations that would greatly improve the extension
- Automatic closing of popup window (would greatly reduce memory usage)
- More appealing style choices and customization for styles
- Text input for the front and back of cards to not be single line text boxes (means changing input to textarea and changing the implementation of flashcards.js and flashcards.html)
- Animation of a card flipping when flip is clicked
- The ability to continue going through flashcards in the popup window
- The displayed timer option stays the same after the user closes the extension window instead of resetting to off each time despite no changes to the alarm