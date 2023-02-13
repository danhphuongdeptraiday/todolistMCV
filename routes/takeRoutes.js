const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

router.get("/home", taskControllers.task_index);
router.get("/about", taskControllers.task_about);
router.get("/task/create", taskControllers.task_create_get);
router.post("/task/create", taskControllers.task_create_post);

// GET/POST Delete Page
router.get("/task/delete/:id", taskControllers.task_delete_get);
router.post("/task/delete/:id", taskControllers.task_delete_post);
// // GET/POST Update Page
router.get("/task/update/:id", taskControllers.task_update_get);
router.post("/task/update/:id", taskControllers.task_update_post);

module.exports = router;
