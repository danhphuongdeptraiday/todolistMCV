// Load modules
const { body } = require("express-validator");
const taskModel = require("../models/taskModels");

// Index page controller
function task_index(request, response) {
  taskModel.getTasks((queryResult) => {
    console.log(queryResult);
    response.render("pages/index", { tasks: queryResult });
  });
}
// GET
let task_create_get = (req, res) => {
  res.render("pages/create");
  // res.setHeader("Content-Type", "application/json");
};

// POST
// let task_create_post = (req, res) => {
//   // res.setHeader("Content-Type", "application/json");
//   const task = req.body.Task; //n chỉ lấy biến Task này thôi => e phải check ở đây nếu k có thì sẽ k tạo
//   if (!task) {
//     //e xử lý như này là được thì kể cả e có gọi 100 lần n cũng k tạo =))
//     // thế cái đoạn setHeader là em sai ở đâu hả a
//     //n k sai ở set header gì đâu => n sai từ lức e tạo task => exception nhưng e k handle xử lý nên n mới lỗi
//     // á đù, thanks anh nhìu :))) oke pp e dạ
//     return res.send({ message: "Please enter a task name to create" });
//   }
//   console.log("task", task);
//   const status = "In progress";
//   taskModel.createTask(
//     task,
//     status,
//     (result) => {
//       console.log("result", result);
//       res.redirect("/");
//     },
//     (error) => res.send({ error })
//   );
// };

// POST
let task_create_post = (req, res) => {
  const task = req.body.Task;
  const status = req.body.Status;
  taskModel.createTask(task, status, (result) => {
    console.log(result);
    res.redirect("/home");
  });
};

let task_delete_get = (req, res) => {
  const id = req.params.id;
  taskModel.getEachTask(id, (result) => {
    console.log(result);

    res.render("pages/delete", { tasks: result });
  });
};

let task_delete_post = (req, res) => {
  const id = req.params.id;
  taskModel.deleteTask(id, (result) => {
    console.log(result);
  });
  res.redirect("/home");
};

let task_update_get = (req, res) => {
  const id = req.params.id;
  taskModel.getEachTask(id, (result) => {
    console.log(result);
    res.render("pages/update", { tasks: result });
  });
};

let task_update_post = (req, res) => {
  const id = req.params.id;
  const status = req.body.Status;
  const task = req.body.Task;
  taskModel.updateTask(task, status, id, (result) => {
    console.log(result);
    res.redirect("/home");
  });
};

let task_about = (req, res) => {
  res.render("pages/about");
};

// Export controllers
module.exports = {
  task_create_get,
  task_create_post,
  task_about,
  task_index,
  task_delete_get,
  task_delete_post,
  task_update_get,
  task_update_post,
};
