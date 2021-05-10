const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// DONE 1.1a: Define candidateName // 
// let candidateName = input.question("What is your name?\n");
// refactored so askForName() handles the input
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
    "Who was the first American woman in space? ",
    "True or false: 5000 meters == 5 kilometers. ",
    "(5 + 3)/2 * 10 = ? ",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? ",
];
let correctAnswers = [
    "Sally Ride",
    "true",
    "40",
    "Trajectory",
    "3"
];
let candidateAnswers = [];


function askForName() {
    // DONE 1.1b: Ask for candidate's name //
    candidateName = input.question("What is your name?\n");

}

function askQuestion(q) {
    // DONE 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    candidateAnswers.push(input.question(q));

}

function gradeQuiz(candidateAnswers) {

    // DONE 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

    let grade = 0;

    for(let i = 0; i < candidateAnswers.length; i++) {
        if(candidateAnswers[i] === correctAnswers[i]) {
            grade += .2;
        }
    }

    return grade * 100;
}

function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name // a bit misleading
    // DONE 1.1c: Welcome user:
    console.log(`Welcome ${candidateName}`);

    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i]);
    }

    const grade = gradeQuiz(this.candidateAnswers);
    // console.log({ grade });
    // console.log(`Thanks for completing the test you received a ${grade * 100}%.`);

    output = `
Candidate Name: ${candidateName}
`;

    for(let i = 0; i < correctAnswers.length; i++) {
        output += `
${i+1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
`;
    }

    let status = "FAILED";

    if(grade > .79) {
        status = "PASSED";
    }

    output += `
>>> Overall Grade: ${grade}% (${(grade) / 20} of ${5} responses correct) <<<
>>> Status: ${status} <<<
`;

    console.log(output);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};