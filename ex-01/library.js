const favoriteBooksArr = [];
const triggerWord = "Great";

function addFavoriteBook(bookName) {
  //console.log(bookName);
  if (!bookName.includes(triggerWord)) {
    console.log("Add To Favorite Books");
    favoriteBooksArr.push(bookName);
  } else {
    console.log("Will not be added to favorites");
  }
}

function printFavoriteBooks() {
  console.log("Printing Fav Books", favoriteBooksArr.length);
  for (let i = 0; i < favoriteBooksArr.length; i++) {
    console.log(favoriteBooksArr[i]);
  }
}

addFavoriteBook("A Wizards Tale");
addFavoriteBook("A Wizards Tale II");
addFavoriteBook("A Wizards Tale III");
addFavoriteBook("A Great Wizards Tale");

printFavoriteBooks();
