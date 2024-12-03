

function firstScene() {
  location.href = "firstscene.html";
  document.getElementById("dialogBoxContainer").style.display = "none";
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

const originalImage =
  "assets/Interior/Foremal/b3b5f4da-d678-4ba2-88ed-adc93f1a31d7-removebg-preview.png";
const hoverImage = "assets/Interior/Foremal/image-removebg-preview.png";

function showInventory() {
  inventoryContainer.style.display = "flex";
  updateInventoryDisplay();
}

function closeInventory() {
  if (inventoryContainer) inventoryContainer.style.display = "";
}

function changeBackpackImage() {
  backpack.src = hoverImage;
}

function resetBackpackImage() {
  backpack.src = originalImage;
}

backpack.addEventListener("mouseenter", () => {
  showInventory();
  changeBackpackImage();
});

backpack.addEventListener("mouseleave", () => {
  closeInventory();
  resetBackpackImage();
});

const itemPickUpIcon = document.getElementById("itemPickUpIcon");

function collectKey() {
  if (!inventory.includes("key")) inventory.push("key");
  localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
  document.getElementById("key1DialogText").style.display = "block";
  document.getElementById("dialogBoxKey1").style.display = "block";
  document.getElementById("talkingHeadKeyDrawer").style.display = "block";
  
}

function collectNote() {
  haveNote = true;
  if (!inventory.includes("note")) inventory.push("note");
  localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
  document.getElementById("noteDialogText").style.display = "block";
  document.getElementById("dialogBoxNote").style.display = "block";
  document.getElementById("talkingHeadNoteDrawer").style.display = "block";

  document.getElementById("itemPickUpIcon").style.display = "block";
}

function collectGold() {
  if (!inventory.includes("gold")) inventory.push("gold");
  localStorage.setItem("inventoryContainer", JSON.stringify(inventory));
}

function collectBarrelKey() {
  if (!inventory.includes("barrelKey")) inventory.push("barrelKey");
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
  location.href = "keyDrawer.html";
}

function showPainting() {
  location.href = "painting.html";
}

function secondScene() {
  if (inventory.includes("key")) location.href = "secondscene.html";
  else {
    alert("Dörren är låst, det kanske finns en nyckel här någonstans?");
  }
}

function toMainMenu() {
  location.href = "index.html";
}

function toSecondScene() {
  location.href = "secondscene.html";
}

function enterGoldenRoom() {
  location.href = "goldroom.html";
}

function hallwayToFrontDoor() {
  location.href = "maindoor.html";
}

function showBarrelKey() {
  location.href = "keyBarrel.html";
}

function finalDoor() {
  if (inventory.includes("gold") && inventory.includes("barrelKey"))
    location.href = "lastscene.html";
  else {
    alert("Vi behöver hitta guldet OCH sista nyckeln!");
  }
}

function combLock() {
  if (!inventory.includes("note"))
    alert(
      "Det behövs en kod för detta lås! Vi måste ha missat den någonstans."
    );
  else {
    location.href = "combLock.html";
  }
}

function openDrawer() {
  location.href = "openDrawer.html";
}

//Textbox in first scene (bedroom)
if (!localStorage.getItem("dialogShown")) {
  const dialogText =
    "Spelet går ut på att ta sig ut ur slottet med skattkistan, och i detta rum finns det två saker du behöver för det!";

    document.getElementById("dialogBoxContainer").style.display = "flex";

  const dialogElement = document.getElementById("dialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogText.length) {
      dialogElement.innerHTML += dialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();

  localStorage.setItem("dialogShown", "true");
};

//Textbox in hallway
if (!localStorage.getItem("dialogHallShown")) {
  const dialogTextHallway =
    "Där nere verkar man kunna gå ut, men först ser denna dörr till vänster mycket intressant ut..";
  const dialogElement = document.getElementById("dialogTextHallway");
  let charIndex = 0;

  document.getElementById("dialogBoxContainerHallway").style.display = "flex";

  function showNextChar() {
    if (charIndex < dialogTextHallway.length) {
      dialogElement.innerHTML += dialogTextHallway[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();

  localStorage.setItem("dialogHallShown", "true");

};

//Textbox key 1 collected in drawer
if (!localStorage.getItem("dialogDrawerKeyShown")) {
  document.getElementById("dialogBoxKey1Container").style.display = "flex";

  const key1DialogText =
    "Snyggt! Du hittar en nyckel och stoppar den i din ryggsäck, undra vad den är till?";

  const dialogElement = document.getElementById("key1DialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < key1DialogText.length) {
      dialogElement.innerHTML += key1DialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();
  localStorage.setItem("dialogDrawerKeyShown", "true");

};


//Textbox note collected in drawer
if (!localStorage.getItem("dialogDrawerNoteShown")) {
  document.getElementById("dialogBoxNoteContainer").style.display = "flex";
  localStorage.setItem("dialogDrawerNoteShown", "true");
  const noteDialogText =
    "Du hittar en mystisk lapp med någon slags kod som du stoppar ner i din ryggsäck..";

  const dialogElement = document.getElementById("noteDialogText");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < noteDialogText.length) {
      dialogElement.innerHTML += noteDialogText[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();
};

//Textbox goldroom
if (!localStorage.getItem("dialogGoldRoomShown")) {
  document.getElementById("dialogBoxContainerGoldRoom").style.display = "flex";
  localStorage.setItem("dialogGoldRoomShown", "true");

  const dialogTextGoldRoom =
    "En skattkista! Den är låst, så vi måste få upp låset på något sätt!";

  
  
  const dialogElement = document.getElementById("dialogTextGoldRoom");
  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextGoldRoom.length) {
      dialogElement.innerHTML += dialogTextGoldRoom[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();

};

//Textbox opened chest room
if (!localStorage.getItem("dialogGoldChestShown")) {
  document.getElementById("dialogBoxContainerOpenedChest").style.display = "flex";
  localStorage.setItem("dialogGoldChestShown", "true");

  // Texten som ska visas bokstav för bokstav
  const dialogTextOpenedChest =
    "Wow! Du får upp kistan och fyller din ryggsäck med guld! ";

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
};

//Textbox last room main door
if (!localStorage.getItem("dialogMainDoorShown")) {
  document.getElementById("dialogBoxMainDoorContainer").style.display = "flex";
  localStorage.setItem("dialogMainDoorShown", "true");
  dialogBoxMainDoorContainer
  // Texten som ska visas bokstav för bokstav
  const dialogTextMainDoor =
    "Detta ser ut att vara utgången..men porten är låst!";

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
};

//Textbox barrel key on collect
document.addEventListener("DOMContentLoaded", function () {
  const dialogTextBarrelKey = "Denna nyckel ser ut att passa porten!";
  const dialogElement = document.getElementById("dialogTextBarrelKey");

  let charIndex = 0;

  function showNextChar() {
    if (charIndex < dialogTextBarrelKey.length) {
      dialogElement.innerHTML += dialogTextBarrelKey[charIndex];
      charIndex++;
      setTimeout(showNextChar, 50);
    }
  }

  showNextChar();
});

let scenes = [
  "Menu",
  "Bedroom",
  "Hallway",
  "Goldroom",
  "Goldchest",
  "Courtyard",
  "Barrel",
  "Exit",
];

let digit1 = document.getElementById("digit1");
let digit2 = document.getElementById("digit2");
let digit3 = document.getElementById("digit3");
let digit4 = document.getElementById("digit4");

const correctCombination = [1, 3, 3, 7];
let playerInput = [];
const digits = document.querySelectorAll(".digits");

digits.forEach((digit, index) => {
  digit.addEventListener("click", function () {
    let currentDigit = parseInt(digit.textContent);

    if (currentDigit === 9) {
      currentDigit = 0;
    } else {
      currentDigit++;
    }

    digit.textContent = currentDigit;

    playerInput[index] = currentDigit;

    if (playerInput.length < correctCombination.length) {
      playerInput[index] = currentDigit;
    }

    if (JSON.stringify(playerInput) === JSON.stringify(correctCombination)) {
      location.href = "openedchest.html";
      collectGold();
    }

    console.log("Player Input:", playerInput.join(""));
    console.log("Correct Combination:", correctCombination.join(""));
    console.log("Clicked digit index:", index);
    console.log("Current digit value:", currentDigit);
  });
});
