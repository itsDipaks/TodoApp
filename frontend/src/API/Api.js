import axios from "axios";
export const BaseUrl = "https://distinct-waistcoat-bat.cyclic.app/";
export const ApiSignup = async (cred) => {
  await axios.post(`${BaseUrl}/auth/signup`, cred).then((res) => {
    return res;
  });
};


export const ApiLogin = async (cred) => {
  await axios.post(`${BaseUrl}/auth/login`, cred).then((res) => {
    return res;
  });
};






export const AddNote = async (todo) => {
  const token = localStorage.getItem("token");
  try {
    await axios
      .post(`${BaseUrl}/todo/addtodo`, todo, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  } catch (err) {
    console.log("Somnhing wents wrong");
  }
};

export const DeleteTodo = async (todo_id) => {
  const token = localStorage.getItem("token");
  try {
    await axios
      .delete(`${BaseUrl}/todo/delete/${todo_id}`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  } catch (err) {
    console.log(err);
  }
};
export const EditeTodo = async (todo_id,myeditdata) => {
  const token = localStorage.getItem("token");
  try {
    await axios.patch(`${BaseUrl}/todo/edit/${todo_id}`,{myeditdata},{
        headers: {
          "token": token,
        },
      })

      .then((res) => {
        console.log(res);
      });
  } catch (err) {
    console.log(err);
  }
};

// export const GatUsersTodo=async()=>{
//     const token = localStorage.getItem("token");
//     try {
//       await axios.get(`${BaseUrl}/todo/get`, {
//           headers: {
//             "token": token
//           },
//         })
       
//     } catch (err) {
//       console.log(err);
//     }
// }