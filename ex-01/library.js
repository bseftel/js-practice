class BookShelf {
  constructor() {
    this.bookShelfArray = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.bookShelfArray.push(bookName);
    } else {
      console.log("Will not be added to favorites");
    }
  }

  printFavoriteBooks() {
    console.log(`Printing Fav Books: ${String(this.bookShelfArray.length)}`);
    for (let bookName of this.bookShelfArray) {
      console.log(bookName);
    }
  }
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  });
}

//
var BOOK_API = "https://some.url/api";
var myBooks = new BookShelf();
loadBooks(myBooks);

//*********************************************************************//

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
