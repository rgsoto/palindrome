module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds 'blank' method to all strings (returns true or false)
String.prototype.blank = function(){
  return (this.length === 0 || !this.trim());
}
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return this.letters().toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns the letters in the content.
  // For example:
//   new Phrase("Hello, world!").letters() === "Helloworld"
this.letters = function letters() {
  return (this.content.match(/[a-z]/gi) || []).join("");
}
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Adds a "last" method to all Arrays
Array.prototype.last = function() {
  return this[this.length - 1];
};
