const coding = ["js", "cpp", "ruby", "swift", "java", "c#", "python"];
// foreach does not return the value
const values = coding.forEach((item) => {
    console.log(item);
    return item;
}); 
console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7];
// filter return the value and any operation in the elements of the array can be done and can be returned
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);
// if you want to do that in foreach, this is the way to go
const otherNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        otherNums.push(num);
    }
});
console.log(otherNums);

// practice
const books = [
  {
    title: "The Silent Patient",
    genre: "Psychological Thriller",
    publishingYear: 2019,
    currentEdition: 3
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publishingYear: 2018,
    currentEdition: 5
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-Fiction",
    publishingYear: 2011,
    currentEdition: 7
  },
  {
    title: "The Midnight Library",
    genre: "Fantasy",
    publishingYear: 2020,
    currentEdition: 2
  },
  {
    title: "Educated",
    genre: "Memoir",
    publishingYear: 2018,
    currentEdition: 4
  },
  {
    title: "Project Hail Mary",
    genre: "Science Fiction",
    publishingYear: 2021,
    currentEdition: 1
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    genre: "Self-Help",
    publishingYear: 2016,
    currentEdition: 6
  },
  {
    title: "Where the Crawdads Sing",
    genre: "Mystery",
    publishingYear: 2018,
    currentEdition: 4
  },
  {
    title: "It Ends With Us",
    genre: "Romance",
    publishingYear: 2016,
    currentEdition: 3
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publishingYear: 1988,
    currentEdition: 10
  }
];
const genreBooks = books.filter((bkl) => bkl.genre === "Self-Help");
console.log(genreBooks);
console.log("\n");
const publishBooks = books.filter((bkl) => bkl.publishingYear > 2000 && bkl.genre === "Mystery");
console.log(publishBooks);
