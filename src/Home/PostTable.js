import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card } from "@mui/material";

const PostTable = ({ rows, selectedUser, deleteUser }) => {
    return(
  <Card component={Paper} sx={{ marginLeft:"80px", marginRight:"80px" }}>
    <Table>
      <TableBody>
        {rows.length > 0 ? (
          rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ textAlign: "justify" }}>
                <h1>{row.topic}</h1>  {row.name}
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
  </Card>
    );
};

export default PostTable;
