const bookStack = [];

function addBook(bookTitle) {
  bookStack.push(bookTitle);
  console.log(`Added: ${bookTitle}`);
}

function readBook() {
  if (bookStack.length === 0) {
    console.log("No books left to read.");
    return;
  }

  const book = bookStack.pop();
  console.log(`Reading: ${book}`);
}

// Example usage
addBook("The Hobbit");
addBook("1984");
addBook("To Kill a Mockingbird");

readBook(); // Reads "To Kill a Mockingbird"
readBook(); // Reads "1984"
readBook(); // Reads "The Hobbit"
readBook(); // No books left to read
