//This is a funtion to reverse a word
function reverse(text) {
  for (var i = text.length - 1, o = ' '; i >= 0; o += text[i--]) { }
  return o;
}
return reverse ('hello')  