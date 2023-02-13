const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./database/todolist.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to database successful");
});

module.exports = {
  db,
};

// const path = require("path");

// const db_path = path.join(__dirname, '../database')

// let db = new sqlite3.Database("./todolist.js", (err) => {
//   if (err) {
//     console.error(err.message);
//   }

//   console.log("Connected to database successful");
// });
