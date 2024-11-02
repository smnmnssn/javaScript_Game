localStorage.setItem("lol", "haha")

localStorage.getItem("lol")

console.log(localStorage)




function firstScene() {
  // Skriv vad som ska hända när spelet startar
  console.log("Spelet startar!");
  location.href = "firstscene.html";
}



let haveKey = false;

function collectKey() {
  haveKey = true;
  console.log("Key collected:", haveKey);

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



  



/*var a = 4; 4

function foo(x) {
  var b = a * x;  16

    function bar(y) {
      var c = y * b;
      return c;
    }


    return bar(b);
}


console.log( foo(a) );

        //Vad loggar vi ut?






// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
}

// Convert the reversed string back to a number and log it to the console
console.log(Number(reverse_a_number(4321)));*/
