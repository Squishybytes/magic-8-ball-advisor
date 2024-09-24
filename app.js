const answers = [
    "Customer arrives late for appointment",
    "No available loaner cars",
    "Mechanic calls in sick",
    "Customer doesn’t know what oil they use",
    "Angry walk-in customer",
    "Customer misreads invoice charges",
    "Car comes back with a new issue",
    "Wrong part ordered",
    "Parts delivery delayed",
    "Car with a 'mystery noise'",
    "Customer complains about wait time",
    "Warranty claim rejected",
    "Can't reach customer for approval",
    "Customer has 100 questions about the service",
    "Printer jam during peak hours",
    "Check engine light comes on after service",
    "Customer wants same-day service without appointment",
    "Mechanic points out unexpected problem",
    "Customer insists Google diagnosed their issue",
    "Computer system crashes",
    "Upsell offer refused",
    "Customer unhappy about cost",
    "Job takes twice as long as estimated",
    "Manager asks for paperwork right now",
    "Customer accuses service of causing a scratch",
    "Parts are obsolete",
    "Parts are on back order",
    "Sales sent them over with no appointment",
    "Crying/Screaming baby in the lobby",
    "105"
];

document.getElementById('askButton').addEventListener('click', function() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answer').innerText = randomAnswer;
});
