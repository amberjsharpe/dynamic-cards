// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM.
// on click --> takes input text, creates a card element, and adds text to it.
// create a function that takes input text and adds it to a card with a delete button --> activated by button event listener.
let textInput = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let cardDisplay = document.getElementById("displayArea");

let createCard = () => {
    // Create a card with text
    let newCard = document.createElement("div");
    cardDisplay.appendChild(newCard); 
    newCard.innerHTML = textInput.value;
    textInput.value = "";
    
    // Add a class to style in CSS
    newCard.classList.add("card");
}

// Create Button Event Listener
createButton.addEventListener("click", createCard);


// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
// Create a function that removes the card from the DOM --> activated on delete button event listener.
