const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const emojies = ['😎', '🎉', '🏆', '🔥', '🥳'];

function pickComputerMove() {
  const randNumber = Math.random();
  if (randNumber < 1 / 3) return 'rock';
  if (randNumber < 2 / 3) return 'paper';
  return 'scissors';
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  // קביעת התוצאה
  if (playerMove === 'rock') {
    result = computerMove === 'rock' ? 'tie' : computerMove === 'paper' ? 'you lose' : 'you win';
  } else if (playerMove === 'paper') {
    result = computerMove === 'rock' ? 'you win' : computerMove === 'paper' ? 'tie' : 'you lose';
  } else if (playerMove === 'scissors') {
    result = computerMove === 'rock' ? 'you lose' : computerMove === 'paper' ? 'you win' : 'tie';
  }

  // --- עדכון הניקוד ---
  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }

  // בחירת אימוג'י לניצחון
  let emoji = '';
  if (result === 'you win') {
    emoji = ' ' + emojies[Math.floor(Math.random() * emojies.length)];
  }

  // בניית הודעה הכוללת את הניקוד המעודכן
  const finalMessage = `You picked ${playerMove}. Computer picked ${computerMove}. 
Result: ${result}${emoji}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  // עדכון הטקסט בדף
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerText = finalMessage;
  }

  alert(finalMessage);
}