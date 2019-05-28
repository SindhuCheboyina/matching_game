'use strict';
// created a variable to store all the cards
//   and added eventListener
const cards = document.querySelectorAll('.card');
for (let card of cards) {
  card.addEventListener('click', () => {

  });
}
// deck of cards for toggling and flipping the ccards to display,show, hide
const deck = document.querySelector('.deck');
deck.addEventListener('click', e => {

  const clickEvent = e.target;
  if (clickEvent.classList.contains('card') && !clickEvent.classList.contains('match') && openedCards.length < 2 && !openedCards.includes(clickEvent)) {
    if (timerOff) {
      startTimer();
      timerOff = false;
    }
    displayCard(clickEvent);
    flipCard(clickEvent);
    if (openedCards.length === 2) {
      match(clickEvent);
  movesCount();
      endOfGame();
      starsScore();
    }
  }
});
// displays card when toggled
function displayCard(clickEvent) {
  clickEvent.classList.toggle('open');
  clickEvent.classList.toggle('show');
}
// pushing all the toggled cards into an array
let openedCards = [];

function flipCard(clickEvent) {
  openedCards.push(clickEvent);
}
// Checking whether any of the cards are matched
let matched = 0;

function match() {
  if (openedCards[0].firstElementChild.className == openedCards[1].firstElementChild.className) {
    openedCards[0].classList.toggle('match');
    openedCards[1].classList.toggle('match');
    openedCards = [];
    matched++;
    const totalCards = 8;
    if (matched === totalCards) {
      stopTimer();
    }
  } else {
    setTimeout(() => {
      displayCard(openedCards[0]);
      displayCard(openedCards[1]);
      openedCards = [];
    }, 1000);
  }
}

// shuffle cards whenever reloaded
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffleCards() {
  const shufflecard = Array.from(document.querySelectorAll('.deck li'));
  const shuffledCards = shuffle(shufflecard);
  for (let card of shuffledCards) {
    deck.appendChild(card);
  }
}
shuffleCards();
// moves counting
let moves = 0;

function movesCount() {
  moves++;
  const move = document.querySelector('.moves');
  move.innerHTML = moves;
}
// Star Rating depending on number of moves
let star="⭐⭐⭐";

function starsScore() {
  if (moves == 16) {
    disableStar();
    star = "⭐⭐⭐";
  } else if (moves >= 17 && moves <= 24) {
    star = "⭐⭐";
  } else if (moves >= 24) {
    disableStar();
    star = "⭐";
  }
}
  // disabling the stars
  const starList = document.querySelectorAll('.stars li');

  function disableStar() {
    for (let star of starList) {
      if (star.style.display !== 'none') {
        star.style.display = 'none';
        break;
      }
    }
  }
  // Starting the timer
  let time = 0;
  let timecount;
  let timerOff = true;

  function startTimer() {
    timecount = setInterval(() => {
      time++;
      timeDisplay();
    }, 1000);
  }
  // displaying the time taken to play
  const timer = document.querySelector('.timer');

  function timeDisplay() {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    if (sec < 10) {
      timer.innerHTML = `${min} min:0${sec} sec`;
    } else {
      timer.innerHTML = `${min} min:${sec} sec`;
    }
  }
  // to restart the game
  function restart() {
    window.location.reload();
  }
  // to stop the timer
  function stopTimer() {
    clearInterval(timecount);
  }
  // alert by using sweetalert displaying time,rating,moves
  var getCard = document.getElementsByClassName('match');

  function endOfGame() {
    if (getCard.length == 16) {
      stopTimer();
      var scoreBlock = document.createElement("span");
      scoreBlock.innerHTML = " Rating: " + (star) + "<br>" + " Moves: " + moves + "<br>" + " Time Taken: " + timer.innerHTML;
      swal({
        title: "Well Played..Awesome",
        content: scoreBlock,
        text: "Game is Ended",
        icon: "success",
        button: "Once Again"

      }).then(
        valid => {
          if (valid) {
            window.location.reload();
          }
        });
    }
  }
