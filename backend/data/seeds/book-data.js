/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('books').truncate();
  await knex('books').insert([
    {book_title : "Agile Web Development with Rails",
     book_author : "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
     book_genre : "Web development",
     book_year : 2010,
     book_edition : "Fourth Edition",
     book_pages : 472,
     book_cover : "http://libgen.org/covers/721000/ae49d9bb94118632df0691df18706319-g.jpg",
     book_price : ((Math.random()*50) + 1).toFixed(2),
     book_description : "N/A"
    },
    {
      book_title: "Flask Web Development",
      book_author: "Miguel Grinberg",
      book_genre: "python,pyhton web development,flask",
      book_year: "N/A",
      book_edition: "N/A",
      book_pages: "N/A",
      book_cover: "http://bookzz.org/dl/2375753/c8da9e",
      book_price : ((Math.random()*50) + 1).toFixed(2),
      book_description: "N/A",
    },
    {
      book_title: "Agile Web Development with Rails: A Pragmatic Guide",
      book_author: "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
      book_genre: "Web site development -- Handbooks, manuals, etc.,Ruby (Computer program language) -- Handbooks, manuals, etc.,Sites Web -- DeРњРѓveloppement -- Guides, manuels, etc.,Ruby (Langage de programmation) -- Guides, manuels, etc.",
      book_year: 2005,
      book_edition: "1",
      book_pages: 554,
      book_cover: "http://libgen.org/covers/164000/af5f2f07c3bf2fd005fc4189b6945feb-d.jpg",
      book_price : ((Math.random()*50) + 1).toFixed(2),
      book_description: "Rails is a full-stack, open source web framework...",
    },
    {
      book_title: "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
      book_author: "Ahsanul Bari, Anupom Syam",
      book_genre: "Computer Science/Web/Server Side Scripting/PHP",
      book_year: 2008,
      book_edition: "N/A",
      book_pages: 328,
      book_cover: "http://libgen.org/covers/215000/0130dd963cca48d57bfe2252c2a521f7-d.jpg",
      book_price : ((Math.random()*50) + 1).toFixed(2),
      book_description: "I bought this book based on the reviews here...",
    },
    {
      book_title: "Alex Homer, ASP.NET 2.0 Visual Web Developer 2005",
      book_author: "David Sussman",
      book_genre: "Компьютерная литература\\11 web строительство\\Web - строительство, ASP.NET\\",
      book_year: 2006,
      book_edition: "N/A",
      book_pages: 314,
      book_cover: "http://libgen.org/covers/117000/f317bc40ec89d98e867b2099c4341a68.jpg",
      book_price : ((Math.random()*50) + 1).toFixed(2),
      book_description: "*  This Starter Kit serves as an entry-level introduction...",
    },
  ]);
};
