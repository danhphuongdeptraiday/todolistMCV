// Load modules
const database = require("../database/database");

// Get all tasks from database
const getTasks = (callback) => {
  const sql = `SELECT * FROM Tasks`;
  database.db.all(sql, [], (error, rows) => {
    if (error) {
      console.error(error.message);
    }
    callback(rows);
  });
};

const createTask = (task, status, callback) => {
  const sql = `INSERT INTO Tasks (Task, Status) VALUES ('${task}', '${status}')`;
  database.db.run(sql, [], (error, row) => {
    if (error) {
      callback(error.message);
    }
    console.log(this);
    const successMessage = "The task was entered successfully.";
    callback(successMessage);
  });
};

const getEachTask = (id, callback) => {
  let sql = `select * from tasks where taskId = ${id}`;

  database.db.get(sql, [], (err, row) => {
    if (err) {
      console.log(err.message);
    }
    callback(row);
  });
};

// Delete
const deleteTask = (id, callback) => {
  const sql = `delete from tasks where taskId = ${id}`;
  database.db.run(sql, [], (err, row) => {
    if (err) {
      console.log(err.message);
    }
    callback(row);
  });
};

const updateTask = (task, status, id, callback) => {
  const sql = `update tasks set task = '${task}', status = '${status}' where taskId = ${id}`;
  database.db.run(sql, [], (err, row) => {
    if (err) {
      console.log(err.message);
    }
    callback(`${task} task was updated`);
  });
};

// const createTask = (task, status, callback, errorCallback) => {
//   //nho them dau '' neu value la string nhe ok anh dinh qua
//   const sql = `insert into tasks (Task, Status) values ('${task}', '${status}')`;

//   database.db.run(sql, [], (error, rows) => {
//     if (error) {
//       errorCallback(error);
//       return;
//     }
//     callback("Enter successfully");
//   });
// };

// Export models
module.exports = {
  createTask,
  getTasks,
  getEachTask,
  deleteTask,
  updateTask,
};
