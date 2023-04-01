const keys = document.querySelectorAll("li");
const allChar = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM[]';.,/-=";
const numsAndLetters = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
const symbols = "[]';.,/-="
keys.forEach(element => {
  if (numsAndLetters.includes(element.innerText)) {
    element.setAttribute("id", element.innerText);
  }
});
let rdmElement = document.getElementById("G");
const pickRandomKey = () =>{
    let randomIndex =  Math.floor(Math.random()*(letters.length-1));

    while(rdmElement.innerText === letters[randomIndex])
        randomIndex = Math.floor(Math.random()*(letters.length-1));

    rdmElement = document.getElementById(letters[randomIndex]);
    if(rdmElement.classList.contains("chosen"))
            return;

    rdmElement.classList.add("chosen");
}   
pickRandomKey()

document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase()
    let element;
    if(symbols.includes(event.key))
    element = document.getElementById(`c${event.key}`);
    else if (allChar.includes(key)){
        element = document.getElementById(key);
    }
    else
    return;
  if((key !== " " && !element.classList.contains("pressed")))
  {
    element.classList.add("pressed")
    if(element){
    element.style.transform = "scale(1.1)";
  }
}
});

document.addEventListener("keyup", event => {
    let element
    const key = event.key.toUpperCase()
    if(symbols.includes(event.key))
    element = document.getElementById(`c${event.key}`);
    else if (numsAndLetters.includes(key)){
        element = document.getElementById(key);
    }
    else
    return;
  if(element){
        element.style.transform = "scale(1)";
        element.classList.remove("pressed");
        if (element.classList.contains("chosen")){
            pickRandomKey()
            element.classList.remove("chosen");
        }
    }
});