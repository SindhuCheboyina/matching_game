# Memory Game Project
 - This project is a matching game which contains 16 cards-8pairs .all the cards should be matched and returns a message whenever the game finishes.

## How to get the Project
   Download the project from https://github.com/udacity/fend-project-memory-game
   extract the files and then write the functionality by opening app.js file
## Table of Contents
  - index.html
  - CSS
  - js\app.js
  -img

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Steps in developing the Game:
- created a variable to store all the cards and add event eventListener for click event.
- created a function which displays and flips all the cards - displayCard()
- created an array which stores all the cards which are toggled.
- write match logic to match the cards which are stored in the array. match()
- implemented timer - to start,stop; moves , star rating.
created a parent which contains all the cards and generates the events like startTimer(), stopTimer(), movesCount(), displayCard(), flipCard(),match().
- created an alert using sweetalert to generate the final message whenever the game finishes.

## How to play the game:
 - the game contains 8 pair of cards.
 - while we are flipping the cards the two two cards which are alike will be enabled.
 -  when two cards will get clicked the moves will get changed.
 - as soon as the card gets clicked the timer starts.
 - we will continue till we finishes all the matches.
 - at final when alll the matches finished we will get an alert which contains a message,time taken to play, number of moves, star rating depends on the moves.
 - if wish to play again there is a button in the alert.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
