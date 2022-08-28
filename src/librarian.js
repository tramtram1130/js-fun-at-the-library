class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
    this.greetPatron = function(friend, isMorning) {
      if (isMorning === false) {
        return `Hello, ${friend}!`
      } else if (isMorning === true) {
          return `Good morning, ${friend}!`
      } else {
        return `Hello, ${friend}!`
      }
    }
    this.findBook = function(bookTitle) {
      var allBooks = this.library.shelves.fantasy.concat(this.library.shelves.fiction, this.library.shelves.nonFiction)
      for (var i = 0; i < allBooks.length; i++) {
        if (allBooks[i].title === bookTitle) {
          this.library.shelves.fantasy.splice(i, 1)
          return `Yes, we have ${bookTitle}`
        }
        return `Sorry, we do not have ${bookTitle}`
      }
    }
    this.calculateLateFee = function(daysLate) {
      var totalLateFee = Math.ceil(daysLate*.25)
      return totalLateFee
    }
  }
}

module.exports = Librarian;
