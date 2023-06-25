var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const todoController = require("../controllers/todoController");

router.post("/add-todo", async (req, res) => {
  data = req.body;
  data.todo_id = uuidv4();
  todoController.create(data, (err, todoResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: todoResponse,
    });
  });
});

router.post("/update-todo", (req, res) => {
  let data = req.body;
  todoController.findOneAndUpdate(
    { todo_id: req.body.todo_id },
    data,
    (err, updatedTodo) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedTodo,
      });
    }
  );
});

router.get("/find-todo/:id", (req, res) => {
  todoController.find({ todo_id: req.params.id }, (err, todoDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: todoDetails,
    });
  });
});

router.post("/delete-todo", (req, res) => {
  todoController.findOneAndRemove(
    { todo_id: req.body.todo_id },
    (err, deletedTodo) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedTodo,
      });
    }
  );
});

router.get("/find-all-todos", (req, res) => {
  todoController.find({}, (err, allTodoDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allTodoDetails,
    });
  });
});

module.exports = router;
