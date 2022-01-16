const quizData = [
    {
        title:"織田信長は何年生まれ？",
        choices:[
            { id:1, value:"1634"},
            { id:2, value:"1534"},
            { id:3, value:"1504"},
            { id:4, value:"1454"},
        ],
        correctId: 1,
        number: 4,
    },
    {}
]
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');

for (let i = 0; i < quizData[0].number; i++) {
    quizAnswerSelect.innerHTML += `<input type="radio" name="answer" value="${i}" id="${i}" class="radio-inline__input"><label for="${i}" class="radio-inline__label">${quizData[0].choices[i].value}</label>`;
}

quizSentence.innerHTML = `<p>${quizData[0].title}</p>`

quizSendButton.onclick = ev => {
    for (const element of quizAnswerSelect.querySelectorAll("input")) {
        if (element.checked) {
            const result = element.id == quizData[0].correctId
            const str = result ? "（正解）" : "もう一度挑戦";
            quizResult.innerHTML = `<p>${str}</p>`
        }
    }
}; 