function rot15(str) {
  //create a function that passes in a string
  var solved = ""; //Declares an empty string

  for (i = 0; i < str.length; i++) {
    //for loop to iterate through string

    var asciiNum = str[i].charCodeAt(); //decalre variable to find ascii value of string letters

    if (
      (asciiNum >= 65 && asciiNum <= 75) ||
      (asciiNum >= 97 && asciiNum <= 107)
    ) {
      //All Capital letters from A to K //(Values entered taken from Ascii table)
      solved += String.fromCharCode(asciiNum + 15); //Add solved variable to asciiNum Moving 15 letters down
    } else if (
      (asciiNum >= 76 && asciiNum <= 90) ||
      (asciiNum >= 108 && asciiNum <= 122)
    ) {
      //Capital letters from L to Z //(Values entered taken from Ascii table)
      solved += String.fromCharCode(asciiNum + 15 - 26); //Add solved variable to asciiNum Moving 15 letters up and moving back to A // fromCharCodeAt function Takes ascii number and gives you a letter instead of value
    } else {
      solved += str[i]; //If Ascii code isnt between 65 and 90 add whatever character it is to solved to keep spaces in encoded message
    }
  }

  return solved; //Return string
}
rot15("i"); //Execute function of encoded message (string of letters)
