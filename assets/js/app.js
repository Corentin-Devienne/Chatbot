const dialogs=[
    {question:"toto",answer:"tata"}, 
    {question:"Salut", answer:"Salut"}, 
    {question:"ça va ?", answer:"bien et toi ?"},
    {question:"comment tu t'apelle ?", answer:"je m'appelle Bob"},
    {question:"Quelle temps fait il a Boulogne?", answer:"Pas d'API alors je peux pas te dire en temps réel mais il fait surrement froid comme d'hab :/"},
]

const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

inputdialog.addEventListener("change", function(event){
    event.preventDefault();
    question.innerHTML=document.querySelector(".form-question").value
    answer.innerHTML="Coucou"
    dialogs.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            answer.innerHTML=element.answer
        }
    })
})

dialogs.forEach((dialog) =>{
    datalist.innerHTML += `<option value="${dialog.question}">`;
});