

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  // add book object to a shelf in the library object(created with createdLibrary)
  // shelf example: denverLibrary.shelves.fantasy
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book)
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, title, genre) {
  // use genre argument to enter the specific shelf where the title argument inspect
  // remove the book from the shelf if it's available
  if (genre === 'fantasy') {
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === title) {
        library.shelves.fantasy.splice(i, 1)
        return `You have now checked out ${title} from the ${library.name}`
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
  else if (genre === 'fiction') {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === title) {
        library.shelves.fiction.splice(i, 1)
        return `You have now checked out ${title} from the ${library.name}`
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
  else if (genre === 'nonFiction') {
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title === title) {
        library.shelves.nonFiction.splice(i, 1)
        return `You have now checked out ${title} from the ${library.name}`
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
