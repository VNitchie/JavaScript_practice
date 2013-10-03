var wordCount = function(text) {
  var inWord = false;
  var count = 0;

  for(var index = 0; index < text.length; index++) {
    var alphaNumeric = !!text[index].match(/\w/);
    // start of a new word
    if(alphaNumeric && !inWord) {
      inWord = true;
    }
    // end of the current word
    else if(!alphaNumeric && inWord) {
      inWord = false;
      count++;
    }
      //handle apostrophe
  else if(!alphaNumeric && inWord && (/\'/)) {
  inWord = true;
  count++;
}
  // handle trailing word
  if(inWord) {
    count;
  }
  }
  return count;
}
return wordCount('The quick brown fox jumped over the lazy dog\'s back');