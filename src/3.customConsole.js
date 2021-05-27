function Console(name) {
  this.name = name
  this.consoleHistory = ''
}

Console.prototype.log = function (...object) {
  let result
  if (object.length <= 1) {
    result = `${this.name}: ${JSON.stringify(...object)}`
  } else {
    result = `${([head, tail] = object)}`
  }
  
  this.consoleHistory = result
  return result
}

Console.prototype.history = function () {
  return this.consoleHistory
}

Console.prototype.clearHistory = function () {
  if (this.consoleHistory === '') return false
  else {
    this.consoleHistory = ''
    return true
  }
}

// Result
const myConsole = new Console('Regular')
const fancyConsole = new Console('Fancy')
console.log(myConsole.log([0, 1, 2, 3])) // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })) // "Fancy: {a:1, b:2}"
console.log(myConsole.log('ok : ', 1, 2, 3)) // "ok : 1, 2, 3"
console.log(myConsole.history()) // ""
console.log(myConsole.clearHistory()) // true
console.log(myConsole.history()) // ""
