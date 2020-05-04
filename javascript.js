var highscoresDiv = document.getElementById('highscoresDiv');
var jared = ""

const scores = localStorage.getItem('highscores')

var splitScores = scores.split(',');



for (i=0; i<splitScores.length -1; ++i) {
    var list = document.createElement('div');
    list.textContent = splitScores[i];
    highscoresDiv.appendChild(list);
}



function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
};

document.getElementById('clear').onclick = clearHighscores;
