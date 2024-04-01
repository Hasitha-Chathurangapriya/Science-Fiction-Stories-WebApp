import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";

const LoginUserForm = ({
  addUser,
  updateLoginUser,
  submitted,
  data,
  isEdit,
}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Box
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        marginTop: "60px",
        display: "flex",
        item: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          <h1>Registration Form</h1>
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
          User Name
        </Typography>
        <TextField
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box><br></br>
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
          Passaword
        </Typography>
        <TextField
          type="password"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Box>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20x",
          backgroundColor: "#00c6e6",
          color: "#000000",
          marginLeft: "875px",
          marginTop: "20px",
          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={() =>
          isEdit ? updateLoginUser({ id, name }) : addUser({ id, name })
        }
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default LoginUserForm;
