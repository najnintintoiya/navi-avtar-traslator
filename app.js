var userInput = document.querySelector('#user-input');
var userOutput = document.querySelector('#output-div');
var btnTranslate = document.querySelector('#btn-translate');

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function constructURL(text){
    return serverURL + "?text=" + text;
}

function tarnslateURL() {
    var text = userInput.value;
    fetch(constructURL(text))
    .then(response => response.json())
    .then(json => userOutput.innerText =json.contents.translated)
    .catch(errorHandler)
}

function errorHandler(error){
    console.log("error occured",error);
}

btnTranslate.addEventListener("click" , tarnslateURL);