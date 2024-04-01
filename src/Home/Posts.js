import { Box } from "@mui/material";
import PostTable from "./PostTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import AppBarr from "./AppBar";
import Footer from "./Footer";

// const users =[
//   {
//     id:1,
//     name:'Hasitha'
//   },
//   {
//     id:2,
//     name:'Kamal'
//   },
//   {
//     id:3,
//     name:'Nimesha'
//   }
// ];

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmited] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3002/api/user")
      .then((response) => {
        // console.log(response.data.response);
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  const addUser = (data) => {
    setSubmited(true);

    const payload = {
      id: data.id,
      name: data.name,
      topic: data.topic,
    };
    Axios.post("http://localhost:3002/api/createuser", payload)
      .then((response) => {
        // console.log(response.data.response);
        getUsers();
        setSubmited(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };



  const deleteUser = (data) => {
    Axios.post("http://localhost:3002/api/deleteuser", data)
      .then((response) => {
        // console.log(response.data.response);
        getUsers();
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  return (
    <Box>
      <AppBarr/>
      <PostTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure") && deleteUser(data)
        }
      />
      <Footer/>
    </Box>
  );
};

export default Posts;
