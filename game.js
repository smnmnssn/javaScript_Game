
console.log(localStorage)



function firstScene() {
  location.href = "firstscene.html";
}

let haveNote = false;
let haveKey = false;

let key = document.getElementById("keyIcon");
let note = document.getElementById("noteIcon");
let gold = document.getElementById("goldenChestIcon");
let barrelKey = document.getElementById("barrelKey");

let inventory = JSON.parse(localStorage.getItem("inventoryContainer")) || [];

function updateInventoryDisplay() {
  if (inventory.includes("key")) {
      document.getElementById("keyIcon").style.display = "block";
  }
  if (inventory.includes("note")) {
      document.getElementById("noteIcon").style.display = "block";
  }
  if (inventory.includes("gold")) {
    document.getElementById("goldenChestIcon").style.display = "block";
  }
  if (inventory.includes("barrelKey")) {
    document.getElementById("barrelKeyIcon").style.display = "block";
  }
}

const backpack = document.getElementById("backpack");
const inventoryContainer = document.getElementById("inventoryContainer");

const originalImage = "assets/Interior/Foremal/b3b5f4da-d678-4ba2-88ed-adc93f1a31d7-removebg-preview.png";
const hoverImage = "assets/Interior/Foremal/image-removebg-preview.png";

function showInventory() {
  inventoryContainer.style.display = "flex";
  updateInventoryDisplay();
}

function closeInventory() {
  if (inventoryContainer) 
    inventoryContainer.style.display = "";
}

function changeBackpackImage() {
  backpack.src = hoverImage; // Byt till hoverbild vid mouseenter
}

function resetBackpackImage() {
  backpack.src = originalImage; // Återställ till originalbild vid mouseleave
}

backpack.addEventListener("mouseenter", () => {
  showInventory();
  changeBackpackImage();
});

backpack.addEventListener("mouseleave", () => {
  closeInventory();
  resetBackpackImage();
});

const itemPickUpIcon = document.getElementById("itemPickUpIcon")

function collectKey() {
  if (!inventory.includes("key")) 
    inventory.push("key");
    localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
    document.getElementById("key1DialogText").style.display = "block";
    document.getElementById("dialogBoxKey1").style.display = "block";
    document.getElementById("talkingHeadKeyDrawer").style.display = "block";
    document.getElementById("talkingHead").style.display = "block";
    
  
}

function collectNote() {
  haveNote = true;
  if (!inventory.includes("note")) 
    inventory.push("note");
    localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
    document.getElementById("noteDialogText").style.display = "block";
    document.getElementById("dialogBoxNote").style.display = "block";
    document.getElementById("talkingHeadNoteDrawer").style.display = "block";

    document.getElementById("itemPickUpIcon").style.display = "block";
    

}

function collectGold() {
  if (!inventory.includes("gold")) 
    inventory.push("gold");
    localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
}

function collectBarrelKey() {
  if (!inventory.includes("barrelKey")) 
    inventory.push("barrelKey");
    localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
    document.getElementById("dialogTextBarrelKey").style.display = "block";   
    document.getElementById("dialogBoxBarrelKey").style.display = "block";
    document.getElementById("talkingHeadBarrel").style.display = "block";
    document.getElementById("dialogBoxContainerBarrel").style.display = "block";

}


let backBtn = document.getElementById("backBtn");

function closeDialogBox() {
  document.getElementById("dialogBoxContainer").style.display = "none";
}

function goBack() {
    history.back();
}



function keyDrawer() {
  location.href = "keyDrawer.html"
}



function showPainting() {
  location.href = "painting.html";
}

function secondScene() {
  if (inventory.includes("key")) 
    location.href = "secondscene.html";
  else {
    alert("Dörren är låst, det kanske finns en nyckel här någonstans?")
  }
}

function toMainMenu() {
  location.href = "index.html";
}

function secondSceneFromGoldRoom() {
    location.href = "secondscene.html";
}


function enterGoldenRoom() {
  location.href = "goldroom.html"
}


function hallwayToFrontDoor() {
  location.href = "maindoor.html"
}

function showBarrelKey() {
  location.href = "keyBarrel.html"

}



function finalDoor() {
  if (inventory.includes("barrelKey"))
  location.href = "lastscene.html"
  else {
    alert("Dörren är låst, det kanske finns en nyckel här någonstans?")
  }
}

function combLock() {
  location.href = "combLock.html"

}

function openDrawer() {
  location.href = "openDrawer.html"
  
}
  
//Textbox in first scene (bedroom)
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogText = "Spelet går ut på att ta sig ut ur slottet med skattkistan, och i detta rum finns det två saker du behöver för det!";
  
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

//Textbox in hallway
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogTextHallway = "Där nere verkar man kunna gå ut, men först ser denna dörr till vänster mycket intressant ut..";
  
  const dialogElement = document.getElementById("dialogTextHallway");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextHallway.length) {
      dialogElement.innerHTML += dialogTextHallway[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});

//Textbox key 1 collected in drawer
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const key1DialogText = "Snyggt! Du hittar en nyckel och stoppar den i din ryggsäck, undra vad den är till?";
  
  const dialogElement = document.getElementById("key1DialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < key1DialogText.length) {
      dialogElement.innerHTML += key1DialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});

//Textbox note collected in drawer
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const noteDialogText = "Du hittar en mystisk lapp med någon slags kod som du stoppar ner i din ryggsäck.."
  
  const dialogElement = document.getElementById("noteDialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < noteDialogText.length) {
      dialogElement.innerHTML += noteDialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});

//Textbox goldroom
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogTextGoldRoom = "En skattkista! Den är låst, så vi måste få upp låset på något sätt!"
  
  const dialogElement = document.getElementById("dialogTextGoldRoom");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextGoldRoom.length) {
      dialogElement.innerHTML += dialogTextGoldRoom[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});


//Textbox opened chest room
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogTextOpenedChest = "Wow! Du får upp kistan och fyller din ryggsäck med guld! "
  
  const dialogElement = document.getElementById("dialogTextOpenedChest");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextOpenedChest.length) {
      dialogElement.innerHTML += dialogTextOpenedChest[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});

//Textbox last room main door
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogTextMainDoor = "Detta ser ut att vara utgången..men porten är låst!"
  
  const dialogElement = document.getElementById("dialogTextMainDoor");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextMainDoor.length) {
      dialogElement.innerHTML += dialogTextMainDoor[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});


//Textbox barrel key on collect
document.addEventListener("DOMContentLoaded", function() {
  // Texten som ska visas bokstav för bokstav
  const dialogTextBarrelKey = "Denna nyckel ser ut att passa porten!"
  
  const dialogElement = document.getElementById("dialogTextBarrelKey");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextBarrelKey.length) {
      dialogElement.innerHTML += dialogTextBarrelKey[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50); // Justera hastigheten här
    }
  }
  
  // Starta bokstav-för-bokstav-animationen
  showNextChar();
});











//ARRAY?
let scenarios = ["Menu", "Bedroom", "Hallway", "Goldroom", "Courtyard", "Exit"];



  



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




//let allDigits = document.getElementsByClassName("digits");
let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
let digit3 = document.getElementById("digit3");
let digit4 = document.getElementById("digit4");

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
      location.href = "openedchest.html";
      collectGold();      // Här kan du lägga till kod för att "låsa upp" något, t.ex. visa ett meddelande eller öppna en dörr.
    }

    console.log('Player Input:', playerInput.join(''));
    console.log('Correct Combination:', correctCombination.join(''));
    console.log('Clicked digit index:', index);   // Logga indexet för varje siffra som klickas
    console.log('Current digit value:', currentDigit); // Logga värdet på den klickade siffran

  });


  
});


//const correctCombination = 1337;  // Den rätta kombinationen som spelaren ska ange


 





