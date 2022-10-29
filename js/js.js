//Assing card, advice, advice id and button into const
const button = document.querySelector(".advice-btn");
const adviceCard = document.querySelector(".advice-card");
const id = document.querySelector(".advice-id") ;
const adviceBlock = document.querySelector(".advice") ;
//function used to fetch data 
 function fetchAdvice(){
    fetch(' https://api.adviceslip.com/advice',
         {cache: "no-store"}).
    then(response=>response.json()).
    then(data=>{
       id.innerHTML= `advice #${data.slip.id}`;
       adviceBlock.innerHTML= `&OpenCurlyDoubleQuote;${data.slip.advice}&CloseCurlyDoubleQuote;`;
    });
}
// Function used to call fetchAdvice() and add animations
 function getAdvice(){
    this.firstElementChild.classList.add("rotation")
    setTimeout(()=>{
        this.firstElementChild.classList.remove("rotation")
        adviceCard.classList.add("card-entrance");
        fetchAdvice();
    }, 1000)
    setTimeout(() => {
        adviceCard.classList.remove("card-entrance");
    }, 1060);
}
//Adding events to button and window
button.addEventListener("click",getAdvice);
window.addEventListener("load", fetchAdvice)
