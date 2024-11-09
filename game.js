localStorage.setItem("lol", "haha")

localStorage.getItem("lol")

console.log(localStorage)




function firstScene() {
  // Skriv vad som ska hända när spelet startar
  console.log("Spelet startar!");
  location.href = "firstscene.html";
}



let haveNote = false;
let haveKey = false;

function collectKey() {
  haveKey = true;
  console.log("Key collected:", haveKey);

}

function collectNote() {
  haveNote = true;
  console.log("Have note: " + haveNote);
}

let backBtn = document.getElementById("backBtn");

function goBack() {
    history.back();
};

function showPainting() {
  location.href = "painting.html";
}

function secondScene() {
  if (haveKey) {
    location.href = "secondscene.html";
}
}

function enterGoldenRoom() {
  location.href = "goldroom.html"
}

function openChest() {
  if (haveKey) {
    location.href = "openedchest.html"

  }
}

function hallwayToFrontDoor() {
  location.href = "maindoor.html"
}

function finalDoor() {
  if (haveKey)
  location.href = "lastscene.html"
}

function combLock() {
  location.href = "combLock.html"

}

function openDrawer() {
  location.href = "openDrawer.html"

}
  

document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogText = "Välkommen till äventyret! Är du redo att utforska slottet och hitta skatten?";
  
  const dialogElement = document.getElementById("dialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogText.length) {
      dialogElement.innerHTML += dialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});


//ARRAY?
let scenarios = ["Menu", "Bedroom", "Hallway", "Goldroom", "Courtyard", "Exit"];



  

//let allDigits = document.getElementsByClassName("digits");
let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
let digit3 = document.getElementById("digit3");
let digit4 = document.getElementById("digit4");

/*const digits = document.querySelectorAll('.digits');// Hämta alla div-element med klassen "digits"


function plusOne() {
   for (let i = 0; i < digits.length; i++) { // Loop genom alla div-element
    let currentDigit = parseInt(digits[i].textContent); // Hämta och konvertera textinnehållet till ett nummer
    
    currentDigit++; // Addera 1 till siffran

    digits[i].textContent = currentDigit; // Uppdatera texten i div-elementet med den nya siffran
}
}

digit1.addEventListener("click", (plusOne));


console.log(digit1.textContent);
console.log(currentNumber);*/







//copypasta
const correctCombination = [1, 3, 3, 7];  // Den rätta kombinationen som spelaren ska ange
let playerInput = [];  // Array för att lagra spelarens siffror
const digits = document.querySelectorAll('.digits'); // Hämta alla div-element med klassen "digits"


digits.forEach((digit, index) => {                       // Lägg till en eventlyssnare på varje div-element
  digit.addEventListener('click', function() {                                      
    let currentDigit = parseInt(digit.textContent);  // Hämta och konvertera texten i det klickade elementet till ett nummer

    if (currentDigit === 9) { // Om siffran är 9, sätt tillbaka den till 0, annars addera 1
      currentDigit = 0;
    } else {
      currentDigit++;
    }
   
    digit.textContent = currentDigit;  // Uppdatera texten i det klickade elementet med den nya siffran

    playerInput[index]= currentDigit; // Lägg till siffran i spelarens input-array

     // Om index är mindre än längden på correctCombination, fyll på playerInput med siffran
     if (playerInput.length < correctCombination.length) {
      playerInput[index] = currentDigit;  // Sätt rätt index i playerInput
     }
     
    if (JSON.stringify(playerInput) === JSON.stringify(correctCombination)) { // Kontrollera om spelarens input matchar den rätta kombinationen
      alert("Kombinationen är korrekt! Uppdraget är upplåst.");      // Här kan du lägga till kod för att "låsa upp" något, t.ex. visa ett meddelande eller öppna en dörr.
    }

    console.log('Player Input:', playerInput.join(''));
    console.log('Correct Combination:', correctCombination.join(''));
    console.log('Clicked digit index:', index);   // Logga indexet för varje siffra som klickas
    console.log('Current digit value:', currentDigit); // Logga värdet på den klickade siffran

  });
});


//const correctCombination = 1337;  // Den rätta kombinationen som spelaren ska ange


 





