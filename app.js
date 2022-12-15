// on input, the inputted item turns into a unordered list item in the website html

// I ultimately want the information inputted to be saved into a sheet that could be printed off
// I'd like a searchable database (date of assignment, # of times assigned, )
// I'd like the information to be sorted in the database upon submission
// --Ex. Which Arban's exercises have been assigned and have them listed 

// function() id submit button => on submit listener {turn the data into json }

function handleSubmit(event) {
    event.preventDefault();

    var weeklyLog = {
        studentName: studentName.value,
        week: week.value,
        specialNotes: specialNotes.value,
        technicalExercises: technicalExercises.value,
        scales: scales.value,
        pieces: pieces.value,
    }
    localStorage.setItem("studentLog", JSON.stringify(weeklyLog))
    console.log(weeklyLog)
}

var lastLessonButton = document.createElement("button");
document.body.appendChild(lastLessonButton);
button.style.width = "100px"
button.style.height = "75px"
button.innerText = "Last Lesson"

lastLessonButton.addEventListener("click", renderMessage);

function renderMessage() {
    lastWeek = localStorage.getItem(JSON.parse(weeklyLog))
    if (lastWeek !== null) {
        lessonDisplay = document.createElement("span");
        document.body.appendChild(lessonDisplay);
        lessonDisplay.innerText = lastWeek;
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

var studentName = document.querySelector("#studentName");
var week = document.querySelector("#week");
var specialNotes = document.querySelector("#specialNotes");
var technicalExercises = document.querySelector("#technicalExercises");
var scales = document.querySelector("#scales");
var pieces = document.querySelector("#pieces");



