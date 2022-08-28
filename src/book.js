

function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(remark, myList) {
  if (myList.includes(remark) === false) {
    myList.push(remark)
  }
  return myList
}



function calculatePageCount(title) {
  createTitle(title)
  var bookPageCount = title.length
  var bookPageCount = bookPageCount*20
  return bookPageCount
}

function writeBook(bookTitle, bookCharacter, genre) {
  pageCount = calculatePageCount(bookTitle)
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: pageCount,
    genre: genre
  }
}

function editBook(book1) {
  book1.pageCount = book1.pageCount*.75
  }



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
