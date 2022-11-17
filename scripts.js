import {replyArray, triggerArray} from './responses.js'


//Main scripts for NikolAI-chatbot
const input = document.getElementById('textInput');

//Timeout
function getRandomTimeout() {
    return Math.random() * (1000 - 500) + 500;
  }



//Event listener for chat input
//Logs input sends to main function and clears input
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#textInput').addEventListener('keydown', function(e) {
    if(e.code == 'Enter'){
        let inputValue = input.value;
        inputValue = regexReplace(inputValue);
        let rawString = input.value;
        console.log(inputValue);
        input.value = '';
        let reply = compare(replyArray, triggerArray, inputValue);
        console.log(reply);
        updateuserChat(rawString);
        window.scrollTo(0, document.body.scrollHeight);
        console.log(getRandomTimeout());
        setTimeout(function() { updatebotChat(reply);window.scrollTo(0, document.body.scrollHeight); }, getRandomTimeout());
        
        
    }
    });

}
);

const regexReplace = (text) => {

    text = text.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
    return text;
};

//function to compare input text to an array of triggers and return the matching array.
const compare = (replyArray, triggerArray, text ) => {
    let replytext = "";
    let isValid = false;

    //Search triggerArray for index with keyword
    if(text.includes('keyword')){
        return triggerArray
    }
    else{
    for(let i = 0; i< triggerArray.length; i++){

        let innerArray = triggerArray[i];

        for(let j=0; j<=innerArray.length; j++){
            if(text.includes(triggerArray[i][j])){
                replytext = replyArray[i];
                isValid = true;
            

            }
        }
    }
    if (isValid){
        return replytext;
    }
    //Incase keyword cannot be found
    return 'I have not reached such intelligence levels to understand what you are saying. :( Type keywords for a list of words I can understand.'
}
        
    
}
//Function to update users chat bubble
const updateuserChat = (text) => {
    const chatDiv = document.getElementById('messages');
    let userChat = document.createElement('div');
    let botChat = document.createElement('div');
    userChat.id = 'user';
    botChat.id = 'bot';
    userChat.innerHTML = `<p class='user'>User : <span>${text} </span></p>`;
    chatDiv.append(userChat);
    

}
//Function to update bot's chat bubble
const updatebotChat = ( reply) => {
    const chatDiv = document.getElementById('messages');
    let botChat = document.createElement('div');
    botChat.id = 'bot';
    botChat.innerHTML = `<p>User : <span>${reply} </span></p>`;
    chatDiv.append(botChat);

}


