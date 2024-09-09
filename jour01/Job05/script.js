function bisextile (year) {
    if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
        return true;
    } else {    
        return false;
    }
     
 }  

console.log(bisextile(5012));
console.log(bisextile(2009)); 
console.log(bisextile(2020));