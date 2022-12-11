const {Router} = require("express");
const {TodoModel} = require("../Models/Todo.model");

const TodoRouter = Router();

TodoRouter.post("/addtodo", async (req, res) => {
  const {todo, user_id} = req.body;

  try {
    const Todos = new TodoModel({
      todo,
      user_id,
    });
    await Todos.save();
    res.send("Todo Added Sucessfully");
  } catch (err) {
    res.send({msg: "no", err});
  }
});

TodoRouter.get("/get", async (req, res) => {
  const {user_id} = req.body;
  try {
    const getTodos = await TodoModel.find({user_id});
    res.send(getTodos);
  } catch (err) {
    res.send("No todo Available ", err);
  }
});
TodoRouter.get("/get/:todo_id", async (req, res) => {
  const {user_id} = req.body;
  const todo_id = req.params.todo_id;
  try {
    const getTodo = await TodoModel.find({user_id, _id: todo_id});
    res.send(getTodo);
  } catch (err) {
    res.send("No todo Available ", err);
  }
});

TodoRouter.patch("/edit/:todo_id", async (req, res) => {
  const todo_id = req.params.todo_id;
  const myeditdata = req.body.myeditdata;
  const user_id = req.body;
  const id = user_id.user_id;
  // console.log(myeditdata)
  try {
    const editedTodo = await TodoModel.findOneAndUpdate(
      {
        user_id: id,
        _id: todo_id,
      },
      {todo: myeditdata}
    );

    if (editedTodo) {
      res.send(editedTodo);
    }
  } catch (err) {
    res.send("Somenthing Wents Wrong Please Try Again", err);
  }
});

TodoRouter.delete("/delete/:todo_id", async (req, res) => {
  const todo_id = req.params.todo_id;
  const user_id = req.body;
  // console.log(user_id.user_id)
  try {
    const DeleteTodo = await TodoModel.findOneAndDelete({
      _id: todo_id,
      user_id: user_id.user_id,
    });

    if (DeleteTodo) {
      res.send("Todo Deleted Successfully");
    }
  } catch (err) {
    res.send({mas: "Somenthing Wents Wrong Please Try Again", err});
  }
});

module.exports = {TodoRouter};
