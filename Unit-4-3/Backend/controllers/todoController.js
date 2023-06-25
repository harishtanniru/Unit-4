const BaseController = require("./baseController");
const ToDoModel = require("../models/todoModel");
class ToDo extends BaseController {
  constructor() {
    super(ToDoModel, ToDo);
  }
}
module.exports = new ToDo();
