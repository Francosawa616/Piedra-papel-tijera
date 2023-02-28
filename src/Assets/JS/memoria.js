let cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;
let score = 0;

function flipCard() {
  if(lockBoard) return;
  if(this === flippedCards[0]) return;

  this.classList.add('flipped');

  if(flippedCards.length === 0) {
    flippedCards.push(this);
  } else {
    cards.forEach(card => card.removeEventListener('click', flipCard));
    flippedCards.push(this);
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = flippedCards[0].dataset.key === flippedCards[1].dataset.key;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  flippedCards.forEach(card => {
    card.removeEventListener('click', flipCard);
    card.classList.add('matched');
  });
  score++;
  if(score === cards.length / 2) {
    setTimeout(() => alert('¡Has ganado!'), 500);
  }
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    flippedCards.forEach(card => {
      card.classList.remove('flipped');
    });
    resetBoard();
  }, 1000);
}

function resetBoard() {
  flippedCards = [];
  lockBoard = false;
  cards.forEach(card => card.addEventListener('click', flipCard));
}

cards.forEach(card => card.addEventListener('click', flipCard));
