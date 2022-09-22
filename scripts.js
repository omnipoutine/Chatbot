//Main scripts for NikolAI-chatbot
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#textInput').addEventListener('keydown', function(e) {
    if(e.code == 'Enter'){
        console.log(document.querySelector('#textInput').value)
    }
    });

}
);