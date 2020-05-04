// Getting the IDs of all the elements
var starterButton = document.getElementById('starter');
var initialContainer = document.getElementById('initial');
var quizContainer = document.getElementById('initialized');
var quizQuestions = document.getElementById('questions');
var questionOne = document.getElementById('firstChoice');
var questionTwo = document.getElementById('secondChoice');
var questionThree = document.getElementById('thirdChoice');
var questionFour = document.getElementById('fourthChoice');
var questionContainer = document.getElementById('questionContainer');
var finalScore = document.getElementById('finalScore');
var timer = document.getElementById('timer');
var finale = document.getElementById('finale');
var highscoresCheck = document.getElementById('highscores');
var popUp = document.getElementById('popUp');
var failure = document.getElementById('failure');
// Getting the IDs of pictures
var runescapePic = document.getElementById('runescape');
var bearPic = document.getElementById('bear');
var shrekPic = document.getElementById('shrek');
var fruitPic = document.getElementById('fruit');
var questionmarkPic = document.getElementById('questionmark');


// Creating a "state" variable which will increase and act as an index for question object
// Creating a "score" variable which will increase if the correct answer is chosen
// Creating a "highScores" object which will contain the calculated score and initials of user, and be pushed into local storage
var state = 0;
var score = 0;
var totalTime = 200;
timer.innerHTML = "Timer: " + totalTime;
var quizTimer;
var calculatedScore;
var highScores;
if (localStorage.getItem("highscores")=== null){
    highScores = "";
    localStorage.setItem("highscores", highScores);
};

// List of questions, with answers and choices
const questions = [
    {
        title: "How many hitpoints does shrimp heal in Runescape?",
        choices: ["3", "2", "1", "5"],
        answer: "3"
    },
    {
        title: "What kind of bear is best?",
        choices: ["polar bear", "black bear", "grizzly bear", "brown bear"],
        answer: "black bear"

    },
    {
        title: "What color is Shrek?",
        choices: ["green colored", "teal colored", "onion colored", "brown colored"],   
        answer: "green colored"
    },
    {
        title: "Which of the following is not a fruit?",
        choices: ["orange", "banana", "strawberry", "dog"],
        answer: "dog"
    },
    {
        title: "I am out of questions",
        choices: ["one", "two", "three", "four"],
        answer: "four"
    }];

//Button that starts the quiz hides the first div and shows the first question
//Initializing the first question with content
//Starting timer when button is clicked, and changes html to show
starterButton.addEventListener("click", function () {
    initialContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    runescapePic.classList.remove('hidden');


    quizQuestions.textContent = questions[state].title;
    questionOne.textContent = questions[state].choices[0];
    questionTwo.textContent = questions[state].choices[1];
    questionThree.textContent = questions[state].choices[2];
    questionFour.textContent = questions[state].choices[3];

    quizTimer = setInterval(function(){
        if (totalTime <= 0) {
            clearInterval(quizTimer);
            quizContainer.classList.add('hidden');
            failure.classList.remove('hidden');
        };
        timer.innerHTML = "Timer: " + (totalTime -=1)
    },1000)

});



// Event listener for each choice.  When clicked will increase state by 1
// Checks to see if end of quiz via state.  If it is, it will hide the div, and show the final div
//
// Counts how many questions are correct, and calculates final score
questionOne.addEventListener("click", function () {
    
    if (questionOne.textContent === questions[state].answer){
       score = score +1
       popUp.innerHTML = 'Correct!'
    } else {
        totalTime = totalTime -20
        popUp.innerHTML ='Wrong!'
    };
    if (state <4) {
        state = state+1
        pic()
      } else{
          popUp.classList.add('hidden');
          quizContainer.classList.add('hidden');
          finalScore.classList.remove('hidden');
          clearInterval(quizTimer);
          calculatedScore = score * (totalTime);
          finale.innerHTML = "Your final score is: " + calculatedScore;

      };
    quizQuestions.textContent = questions[state].title;
    questionOne.textContent = questions[state].choices[0];
    questionTwo.textContent = questions[state].choices[1];
    questionThree.textContent = questions[state].choices[2];
    questionFour.textContent = questions[state].choices[3];
    
});


questionTwo.addEventListener("click", function () {
  
    if (questionTwo.textContent === questions[state].answer){
       score = score +1
       popUp.innerHTML = 'Correct!'
    } else {
        totalTime = totalTime -20
        popUp.innerHTML ='Wrong!'
    };
    if (state <4) {
        state = state+1
        pic()
    } else{
        popUp.classList.add('hidden');
        quizContainer.classList.add('hidden');
        finalScore.classList.remove('hidden');
        clearInterval(quizTimer);
        calculatedScore = score * (totalTime);
        finale.innerHTML = "Your final score is: " + calculatedScore;
      };
    quizQuestions.textContent = questions[state].title;
    questionOne.textContent = questions[state].choices[0];
    questionTwo.textContent = questions[state].choices[1];
    questionThree.textContent = questions[state].choices[2];
    questionFour.textContent = questions[state].choices[3];
    

});


questionThree.addEventListener("click", function () {
   
    if (questionThree.textContent === questions[state].answer){
       score = score +1
       popUp.innerHTML = 'Correct!'
    } else {
        totalTime = totalTime -20
        popUp.innerHTML ='Wrong!'
    };
    if (state <4) {
        state = state+1
        pic()
    } else{
        popUp.classList.add('hidden');
        quizContainer.classList.add('hidden');
        finalScore.classList.remove('hidden');
        clearInterval(quizTimer);
        calculatedScore = score * (totalTime);
        finale.innerHTML = "Your final score is: " + calculatedScore;
      };
    quizQuestions.textContent = questions[state].title;
    questionOne.textContent = questions[state].choices[0];
    questionTwo.textContent = questions[state].choices[1];
    questionThree.textContent = questions[state].choices[2];
    questionFour.textContent = questions[state].choices[3];
    

});


questionFour.addEventListener("click", function () {
    if (questionFour.textContent === questions[state].answer){
       score = score +1
       popUp.innerHTML = 'Correct!'
    } else {
        totalTime = totalTime -20
        popUp.innerHTML ='Wrong!'
    };
    if (state <4) {
        state = state+1
        pic()
      } else{
        popUp.classList.add('hidden');
        quizContainer.classList.add('hidden');
        finalScore.classList.remove('hidden');
        clearInterval(quizTimer);
        calculatedScore = score * (totalTime);
        finale.innerHTML = "Your final score is: " + calculatedScore;

      };
    quizQuestions.textContent = questions[state].title;
    questionOne.textContent = questions[state].choices[0];
    questionTwo.textContent = questions[state].choices[1];
    questionThree.textContent = questions[state].choices[2];
    questionFour.textContent = questions[state].choices[3];
    

});

function pic(){
    if (state ===0){
        bearPic.classList.add('hidden');
        shrekPic.classList.add('hidden');
        fruitPic.classList.add('hidden');
        questionmarkPic.classList.add('hidden');
    }
    else if (state === 1){
        runescapePic.classList.add('hidden');
        bearPic.classList.remove('hidden');
    }
    else if (state === 2) {
        bearPic.classList.add('hidden');
        shrekPic.classList.remove('hidden');
    } 
    else if (state ===3) {
        shrekPic.classList.add('hidden');
        fruitPic.classList.remove('hidden');
    }
    else if (state ===4) {
        fruitPic.classList.add('hidden');
        questionmarkPic.classList.remove('hidden');
    }
    else{
        runescapePic.classList.add('hidden');
        bearPic.classList.add('hidden');
        shrekPic.classList.add('hidden');
        fruitPic.classList.add('hidden');
        questionmarkPic.classList.add('hidden');
    }
};





// Onclick function that is called when submit is clicked
// Takes the calculated score and initials and pushes into "highScore" array, which is then put into localStorage
function submitter () {
    // var initialsInput = document.getElementById('initialsInput');
    // highScores.push(initialsInput.value + ": " + calculatedScore);
    var anything = localStorage.getItem("highscores");
    anything += initialsInput.value + ": " + calculatedScore + ",";
    localStorage.setItem("highscores", anything);
};
 






