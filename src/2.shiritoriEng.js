function Shiritory() {
  this.words = []
}

// Play word
Shiritory.prototype.play = function (anyWord) {
  const words = this.words,
    prevWord = words[words.length - 1]

  if (words.length === 0) {
    words.push(anyWord)
  } else if (
    words.indexOf(anyWord) === -1 &&
    prevWord.charAt(prevWord.length - 1) === anyWord.charAt(0)
  ) {
    words.push(anyWord)
  } else {
    return 'Game over!!'
  }

  return words
}
// Restart game
Shiritory.prototype.restart = function () {
  this.words.length = 0
  return 'Game restarted'
}

myShiritori = new Shiritory()
console.log(myShiritori.play('apple')) // ["apple"]
console.log(myShiritori.play('ear')) // ["apple", "ear"]
console.log(myShiritori.play('rhino')) // ["apple", "ear", "rhino"]
console.log(myShiritori.play('corn')) // "game over"
// Corn does not start with an "o".
console.log(myShiritori.words) // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()) // "game restarted"
console.log(myShiritori.words) // []
// Words array should be set back to empty.
console.log(myShiritori.play('hostess')) // ["hostess"]
console.log(myShiritori.play('stash')) // ["hostess", "stash"]
console.log(myShiritori.play('hostess')) // "game over"
