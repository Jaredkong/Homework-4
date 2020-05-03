document.onload = function () {

    var questions = [
        {
            title: "How many hitpoints does shrimp heal you in Runescape?",
            choices: ["3", "2", "1", "5"],
            answer: "3"
        },
        {
            title: "What type of bear is best?",
            choices: ["polar bear", "black bear", "grizzly bear", "brown bear"],
            answer: "black bear"

        },
        {
            title: "What color is Shrek?",
            choices: ["green colored", "teal colored", "onion colored", "brown colored"],   
            answer: "green colored"
        },
        {
            title: "Which of the following is a fruit?",
            choices: ["orange", "banana", "strawberry", "dog"],
            answer: "dog"
        },
        {
            title: "I am out of questions",
            choices: ["one", "two", "three", "four"],
            answer: "four"
        }]


    var initialBody = document.getElementsByClassName(".initial");
    var initializedBody = document.getElementsByClassName(".intialized");
    var finishedBody = document.getElementByClassName(".finished");
    var firstChoice = document.getElementsByClassName(".firstChoice");
    var secondChoice = document.getElementsByClassName(".secondChoice");
    var thirdChoice = document.getElementsByClassName(".thirdChoice");
    var fourthChoice = document.getElementsByClassName(".fourthChoice");
    var starter = document.getElementsByClassName(".starter");

    



    starter.on("click", function () {
         
        initialBody.style.display = none;





    })






}

