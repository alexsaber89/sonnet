// Take the contents of the sonnet div and place it in a variable
var sonnetDiv = document.getElementById("sonnet");
var sonnetString = sonnetDiv.innerHTML;
console.log(sonnetString);

// Find and output the starting position of the word "orphans"
var posOrphans = sonnetString.indexOf("orphans");
console.log(posOrphans);

// Output the number of characters in the sonnet
console.log(sonnetString.length);

// Replace the first occurance of the string "winter" with "yuletide"
  // sonnetString = sonnetString.replace("winter","yuletide");

// Replace all occurances of the string "the" with "a large"
  // sonnetString = sonnetString.replace(/the/g, "a large");

// Set the content of the sonnet div with the new string
sonnetDiv.innerHTML = sonnetString.replace("winter","yuletide").replace(/the/g, "a large");