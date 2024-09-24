const answers = [
    "Yes", "No", "Ask again later", "Definitely", "Absolutely not", "Probably", "It is certain", "Don't count on it"
];

document.getElementById('askButton').addEventListener('click', function() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answer').innerText = randomAnswer;
});
