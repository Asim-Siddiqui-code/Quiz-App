let data = [
    {
        Question: "JS is used for?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamic update content",
        d: "Backend",
        ans: "ans3"
    },
    {
        Question: "Which one is the capital of Pakistan?",
        a: "Lahore",
        b: "Isalmabad",
        c: "Multan",
        d: "Karachi",
        ans: "ans2"
    },
    {
        Question: "CSS Stands for",
        a: "Frontend",
        b: "Animation",
        c: "Cascading Style Sheet",
        d: "Backend",
        ans: "ans3"
    },
];

let Question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let num = 0;
let score = 0;
let Answer = document.querySelectorAll(".options");
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

Question.innerHTML = data[num].Question;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAnswer() {
    let ans;
    Answer.forEach((currentElement) => {
        if (currentElement.checked) {
            ans = currentElement.id;
            console.log(ans);
        }
    })
    return ans;
}
function disSelect (){
    Answer.forEach((currentElement)=>{
        currentElement.checked = false;
    })
}
function next() {
    let checkedAnswer = checkAnswer();
    if (checkedAnswer == data[num].ans) {
        score++;
    }
    num++;
disSelect();
    
    if(num < data.length){
    Question.innerHTML = data[num].Question;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
}else{
myScore.innerHTML = ` Your Score is ${score} / ${data.length} <br/> 
 <button onclick="location.reload()">Play Again</button>`;
 nextBtn.style.display = "none";
}
}