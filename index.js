const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("creator-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contents = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

contents.forEach(divMaker);

function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = "";
    contents = [];
}

function hide() {
    createBox.style.display = "none"
}

function showCreatorBox() {
    createBox.style.display = "block";
}

function createFlashCard() {
    const flashcard_info = {
        question: question.value,
        answer: answer.value
    }

    contents.push(flashcard_info);
    localStorage.setItem("items", JSON.stringify(contents));
    divMaker(contents[contents.length - 1]);
    question.value = "";
    answer.value = "";
}

function divMaker(text) {
    let div = document.createElement("div");
    let h2_question = document.createElement("h2");
    let h2_answer = document.createElement("h2");

    div.classList.add("flashcard", "hvr-float");
    h2_question.setAttribute("id", "display-question"); 
    h2_question.innerHTML = text.question;

    h2_answer.setAttribute("id", "display-answer");
    h2_answer.innerHTML = text.answer;

    div.addEventListener("click", () => {
        if(h2_answer.style.display == "none") {
            h2_answer.style.display = "block";
            h2_question.style.display = "none";
        } else {
            h2_answer.style.display = "none";
            h2_question.style.display = "block";
        }    
    });

    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    flashcards.appendChild(div);
}