/*const textarea = document.getElementById("keylogger");

document.addEventListener("toucheappui", function(event) {
   var lettre = event.key;
   
   console.log("toucheappui :" + lettre);

   if (lettre.match(/[a-z]/i)) {
      
      if (document.activeElement === textarea) {
         textarea.value += lettre + lettre;
      } else {
         textarea.value += lettre;
      }
         
   }
   
});
*/

const keylogger = document.getElementById("keylogger");

document.addEventListener('keydown', function(event) {
    const char = String.fromCharCode(event.charcode);

    console.log(char); 

    if (/[a-z]/i.test(char)) {
        keylogger.value += char + char;

        console.log(keylogger.value += char + char);
    } else {
        keylogger.value += char;
        console.log(keylogger.value += char);
    } 
    
});
