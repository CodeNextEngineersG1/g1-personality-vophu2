let color = null,
    weapon = null,
    trama = null,
    pageTitle = document.querySelector("h1"),
    pageTitleText = paperTitle.innerHTML;,
    tryAgain = document.querySelector('#try-again'),
    quizWrapper = document.querySelector('#quiz-wrapper'),
    result = document.querySelector('#result'),
    formSubmit = document.querySelector('#form-submit');

    tryAgain.addEventListener('click', resetQuiz);
    formSubmit.addEventListener('click', processResults);

function processResults() {

}

function getPersonality() {
  var score = 0;

  if(color.id === "black") {
    score += 1;
  }
  else if(color.id === "red") {
    score += 2;
  }
  else if (color.id === "blue") {
    score += 3;
  }
  else if (color.id == "pink") {
    score +=4;
  }

  if(weapon.id === "gun"){
    score += 1;
  }
  else if (weapon.id === "spear") {
    score += 2;
  }
  else if (weapon.id === "sword") {
    score += 3;
  }
  else if (weapon.id === "bow") {
    score += 4;
  }

  if(trama.id === "friend"){
    score += 1;
  }
  else if (trama.id === "family") {
    score += 2;
  }
  else if (trama.id === "sick") {
    score += 3;
  }
  else if (trama.id === "none") {
    score += 4;
  }

}

function resetQuiz() {

}
