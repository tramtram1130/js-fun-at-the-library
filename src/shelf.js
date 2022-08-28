

function shelfBook(book, shelf) {
  // put the book object into the shelf array
  // the books will be added to the start of the array each time
  // a book can be further added if there is less than 4 in the shelfBook
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}


function unshelfBook(bookTitle, shelf) {
// remove a book object from the shelf array by the title
// the bookTitle parameter is the 'title' value within that specific book object
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
// create a list of all of the titles on the shelf
// it will need to loop through the shelf array containing the book objects
// it will list the titles with a comma in between in a string format
  var list = []
  for (var i = 0; i < shelf.length; i++) {
    list.push(shelf[i].title)
  }
  return list.join(", ")
}

function searchShelf(shelf, title) {
  // check shelf array to see if book object is in it by its title: value
  var tempShelf = []
  for (var i = 0; i < shelf.length; i++) {
    tempShelf.push(shelf[i].title)
  }

  if (tempShelf.includes(title) === true) {
    return true
  } else {
    return false
    }

}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
