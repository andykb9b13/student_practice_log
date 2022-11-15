// on input, the inputted item turns into a unordered list item in the website html

// I ultimately want the information inputted to be saved into a sheet that could be printed off
// I'd like a searchable database (date of assignment, # of times assigned, )
// I'd like the information to be sorted in the database upon submission
// --Ex. Which Arban's exercises have been assigned and have them listed 

// function() id submit button => on submit listener {turn the data into json }

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = data.get('weeklyLog');

    console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

const lesson1 = {
    name: {
        first: "Andy",
        last: "Kleindienst"
    },
    date: "11/2/22",
    Notes: [
        "Play with better posture",
        "Breathe deeper",
        "Move wrist"
    ],
    techEx: [
        "Arbans #20",
        "Arbans #50",
        "Foundations: slurs"
    ],
    scales: [
        "Bb",
        "Eb",
        "Ab"
    ],
    pieces: [
        "Cavatine"
    ]
}
