import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const UserTable = ({ rows, selectedUser, deleteUser }) => {
    return(
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Post ID</TableCell>
          <TableCell>Topic</TableCell>
          <TableCell>Post</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.length > 0 ? (
          rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.topic}
              </TableCell>
              <TableCell component="th" scope="row" sx={{ textAlign: "justify" }}>
                {row.name}
              </TableCell>
              <TableCell>
                <Button
                  sx={{
                    margin: "0px 10px",
                  }}
                  onClick={() => selectedUser({id:row.id, name:row.name, topic:row.topic})}
                >
                  Update
                </Button>
                <Button
                  sx={{
                    margin: "0px 10px",
                  }}
                  onClick={() => deleteUser({id:row.id})}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow
            sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
                No Data
              </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
    );
};

export default UserTable;
