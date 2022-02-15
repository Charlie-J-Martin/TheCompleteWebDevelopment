let player1 = Math.floor(Math.random() * 6 + 1);

document.querySelector('.img1').src = 'images/dice' + player1 + '.png';

let player2 = Math.floor(Math.random() * 6 + 1);

document.querySelector('.img2').src = 'images/dice' + player2 + '.png';

function checkWinner() {
  if (player1 === player2) {
    document.querySelector('h1').innerHTML = '&#128560 Draw! &#128560';
  } else if (player1 > player2) {
    document.querySelector('h1').innerHTML = '&#129311 Player 1 Wins!';
  } else if (player2 > player1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! &#129305';
  }
}

checkWinner();
