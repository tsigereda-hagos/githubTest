let libraryBooks = [
 { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
 { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
 { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
 { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
 ];


//number-1
//addBook
function addBook(title,author,libraryId){
    const newBook={title,author,libraryId};
    libraryBooks.push(newBook);
    return newBook;
}

const newBook=addBook("Nothing Lasts Forever", "Sydney Sheldon","1234");
console.log(newBook);
console.log(libraryBooks);

//getTitles
function getTitles(){
    const titles=libraryBooks.map(book=>book.title);
    const titlesSorted= titles.sort();
    return titlesSorted;
}
const titlesSorted=getTitles();
console.log(titlesSorted);

//findBooks
function findBooks(keyword){
    const matchBooks = libraryBooks.filter(book=>book.title.toLowerCase().includes(keyword.toLowerCase()));
    const sortedBooks = matchBooks.sort((a,b)=>a.author.localeCompare(b.author));
    return sortedBooks;
}
const keyword = "The";
const matchBooks =findBooks(keyword);
console.log(matchBooks);


//number-2
function myMap(arr,fun){
    const result=[];
    for(let i=0; i<arr.length; i++){
        result.push(fun(arr[i], i, arr));
    }
    return result;
}
const number=[1,2,3,4,5];
const double = (num)=>num*2;
const doubleNumbers=myMap(number, double);
console.log(doubleNumbers);