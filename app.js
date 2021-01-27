var myInput = document.querySelector("textarea");

// var myInput2 = document.querySelector("#txt-area");
// console.log(myInput2===myInput)    // true

var myButton = document.querySelector("button");
// console.log(myButton);

var myOutput = document.querySelector("#output");
// console.log(myOutput);

var myURL = "https://api.funtranslations.com/translate/pig-latin.json";

function craeteURL(input){
    return(myURL+"?text="+input)
}



function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again after some time")
}

// var inputValue = myInput.value;

function getTranslation(){

    // var inputText = myInput.value;

    fetch(craeteURL(myInput.value))
        .then(response => response.json())
        .then( json => {
            var translatedText = json.contents.translated;
            myOutput.innerText = translatedText;
        })
        .catch(errorHandler)

};
myButton.addEventListener("click",getTranslation);
