import {
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
      setTopic("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
      setTopic(data.topic);
    }
  }, [data]);

  const Logout = () => {
    navigate("/adminLogin");
  };

  const navigate = useNavigate();

  return (
    <Box
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
        paddingLeft: "380px",
        paddingTop: "10px",
      }}
    ><Button onClick={Logout}
    sx={{ backgroundColor: "#00c6e6",color: "#ffffff", marginLeft:"850px",marginTop:"-300" }}>
      Logout
    </Button>
      <Box item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          <h1>Create Post</h1>
        </Typography>
      </Box>

      <Box item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Post ID
        </Typography>
        <TextField
          type="number"
          id="id"
          name="id"
          sx={{ width: "100px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Box><br></br>

      {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <Box item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Topic
        </Typography>
        <TextField
          type="text"
          id="topic"
          name="topic"
          sx={{ width: "500px" }}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </Box><br></br>

      {/* //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <Box item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Post
        </Typography>
        {/* <TextField
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Type something..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          minRows={10}
          cols={100}
          style={{ width: "50%", resize: "none" }}
        />
      </Box>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20x",
          backgroundColor: "#00c6e6",
          paddingLeft: "0px",
          color: "#000000",
          marginLeft: "540px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={() =>
          isEdit ? updateUser({ id, name,topic }) : addUser({ id, name, topic })
        }
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default UserForm;
