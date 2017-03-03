var addButton = document.getElementById("makeCards");
var vocabCard = document.getElementById("vocabHolder");
var cardBuilder = ""
function addVocabCard(){
	var inBox = document.getElementById("userInput").value;
	cardBuilder=`<div class="vocabBox"><p>${inBox}</p><button type="btn" class="delete">Delete</button></div>`;
	vocabCard.innerHTML += cardBuilder;
};
function deleteVocabCard(){
	event.target.parentNode.remove();
}
function determineButton(){
	if (event.target.className==="addButton") {
		addVocabCard();
	} else if(event.target.className==="delete"){
		deleteVocabCard();
	}
}

document.addEventListener("click", determineButton);