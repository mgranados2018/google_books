const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "https://books.google.com/books/content?id=LjdeY4gldV4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72vj987SLGugQfcp2ilO7mB8eltxVN2J4SWHYjP6Zc_69AfW43SG1lB6YNnmXdyWvZJuyTCY0ur1rkT8Cvw6wb0Sc9sev-BwoTA_tzD0nKUh0u-jQjYDrb5TxzNk6tpFJ6YAoKS",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api",
    rating: 3.5,
    thumbnail: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    title: "Lord of the Rings",
    authors: "J.R.R. Tolkien",
    description:
      "Continuing the story begun in The Hobbit, this is the first part of Tolkien s epic masterpiece, The Lord of the Rings, featuring an exclusive cover image from the film, the definitive text, and a detailed map of Middle-earth. Sauron, the Dark Lord, has gathered to him all the Rings of Power the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring the ring that rules them all which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. To celebrate the release of the first of Peter Jackson s two-part film adaptation of The Hobbit, THE HOBBIT: AN UNEXPECTED JOURNEY, this first part of The Lord of the Rings is available for a limited time with an exclusive cover image from Peter Jackson s award-winning trilogy.",
    image: "https://books.google.com/books/content?id=LjdeY4gldV4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72vj987SLGugQfcp2ilO7mB8eltxVN2J4SWHYjP6Zc_69AfW43SG1lB6YNnmXdyWvZJuyTCY0ur1rkT8Cvw6wb0Sc9sev-BwoTA_tzD0nKUh0u-jQjYDrb5TxzNk6tpFJ6YAoKS",
    link: "https://books.google.com/books?id=_FjrugAACAAJ&dq=titleLord+of+the+Rings&hl=&source=gbs_api",
    rating: 4,
    thumbnail: "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image: "https://books.google.com/books/content?id=LjdeY4gldV4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72vj987SLGugQfcp2ilO7mB8eltxVN2J4SWHYjP6Zc_69AfW43SG1lB6YNnmXdyWvZJuyTCY0ur1rkT8Cvw6wb0Sc9sev-BwoTA_tzD0nKUh0u-jQjYDrb5TxzNk6tpFJ6YAoKS",
    link: "https://books.google.com/books?id=VPpQjwEACAAJ&dq=titleThe+Catcher+in+the+Rye&hl=&source=gbs_api",
    rating: 3.5,
    thumbnail: "http://books.google.com/books/content?id=VPpQjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  }
];


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
