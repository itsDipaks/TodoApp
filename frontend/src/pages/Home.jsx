import React, {useState} from "react";
import axios from "axios";
import {
  AddNote,
  BaseUrl,
  DeleteTodo,
  EditeTodo,
  GatUsersTodo,
} from "../API/Api";
import {useEffect} from "react";
import {MdDelete} from "react-icons/md";
import {FiEdit} from "react-icons/fi";
import {BsToggleOn, BsToggleOff} from "react-icons/bs";
import "./Home.css";
const Home = () => {
  const [todo, settodo] = useState("todo");
  const [alltodos, setalltodos] = useState([]);
  const [status, setstatus] = useState(false);

  const [editbox, seteditbox] = useState(false);

  const [myeditdata, setmyeditdata] = useState("");

  const toggle = () => {
    editbox ? seteditbox(false) : seteditbox(true);
  };
  const handeldchange = (e) => {
    const {value, name} = e.target;
    settodo({
      ...todo,
      [name]: value,
    });
  };


  const statusHandeld=()=>{
    status?setstatus(false):setstatus(true)
  }
  const Addtodo = () => {
    AddNote(todo);
    pageload();
  };

  const Deletetodo = (id) => {
    DeleteTodo(id);
    pageload();
  };

  const handeldeditedtodo = (todo_id) => {
    EditeTodo(todo_id, myeditdata);
    pageload();
  };

  const UserGetTodos = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios
        .get(`${BaseUrl}/todo/get`, {
          headers: {
            token: token,
          },
        })
        .then((res) => {
          setalltodos(res.data);
          setstatus(res.data.status);
        });
    } catch (err) {
      console.log(err);
    }
  };


  const pageload = () => {
    UserGetTodos();
  };


  console.log(alltodos);

  useEffect(() => {
    pageload();
  }, []);


  return (
    <>
      <h1> My Todo App </h1>
      <div className="addTodo">
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo Here"
          onChange={handeldchange}
        />
        <button onClick={Addtodo}>Add Todo</button>
      </div>
      {alltodos &&
        alltodos.map((el) => {
          return (
            <div className="todo_div" key={el._id}>
              <h2>{el.todo}</h2>
              <MdDelete onClick={() => Deletetodo(el._id)} className="icon" />
              <div>
                {status ? (
                  <BsToggleOn onClick={statusHandeld} className="icon" />
                ) : (
                  <BsToggleOff  onClick={statusHandeld} className="icon" />
                )}
              </div>
              <FiEdit onClick={toggle} className="icon" />
              <div className="editinput">
                {editbox ? (
                  <div className="editdiv">
                    <input
                      type="text"
                      onChange={(e) => setmyeditdata(e.target.value)}
                    />{" "}
                    <button onClick={(e) => handeldeditedtodo(el._id)}>
                      Make Changes
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Home;
