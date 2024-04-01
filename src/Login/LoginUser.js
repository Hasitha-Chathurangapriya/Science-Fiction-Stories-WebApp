import LoginUserForm from "./UserRegistraitionForm";
import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";


const LoginUser = () => {
  const [loginusers, setLoginUsers] = useState([]);
  const [submitted, setSubmited] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedLoginUser, setSelectedLoginUser] = useState({});

  useEffect(() => {
    getLoginUsers();
  }, []);

  const getLoginUsers = () => {
    Axios.get("http://localhost:3002/api/loginUser")
      .then((response) => {
        console.log(response.data.response);
        setLoginUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error", error);
        console.log("Wedakarnne ne");
      });
  };

  const addUser = (data) => {
    setSubmited(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3002/api/createloginuser", payload)
      .then((response) => {
        console.log(response.data.response);
        getLoginUsers();
        setSubmited(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error", error);
        console.log(payload);
      });
  };

  const updateLoginUser = (data) => {
    setSubmited(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3002/api/updateloginuser", payload)
      .then((response) => {
        // console.log(response.data.response);
        getLoginUsers();
        setSubmited(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  const deleteLoginUser = (data) => {
    Axios.post("http://localhost:3002/api/deleteloginuser", data)
      .then((response) => {
        // console.log(response.data.response);
        getLoginUsers();
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  return (
    <Box>
      <LoginUserForm
        addUser={addUser}
        submitted={submitted}
        updateUser={updateLoginUser}
        data={selectedLoginUser}
        isEdit={isEdit}
      />
    </Box>
  );
};

export default LoginUser;
