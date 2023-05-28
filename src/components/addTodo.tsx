import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@fontsource/open-sans";
import { getThisTime } from "./accordion";
import { AddTodo } from "../Redux/actions/todoActions";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const styles = {
  btn: {
    backgroundColor: "#e0f2f1",
    fontWeight: "bolder",
    marginLeft: "10px",
  },
  h2: {
    fontFamily: "Open Sans",
    marginLeft: "auto",
    marginRight: "auto",
  },
  box: {
    width: 500,
    maxWidth: "100%",
  },
  box2: {
    width: 500,
    marginTop: "20px",
    maxWidth: "100%",
  },
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const dispatch = useDispatch();
  const [titleVal, setTitleVal] = useState<string>("");
  const [desVal, setDesVal] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const titleHandle = (e: any) => {
    setTitleVal(e.target.value);
  };
  const desHandle = (e: any) => {
    setDesVal(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddItem = () => {
    handleClose();
    const newTodo = createNewTodo();
    dispatch(AddTodo(newTodo));
  };
  const createNewTodo = () => {
    const id = Math.floor(Math.random() * 10000);
    return {
      id: id,
      title: titleVal,
      describition: desVal.replace(/\s/g, ""),
      time: getThisTime(),
      checked: false,
    };
  };

  return (
    <div >
      <Button variant="outlined" onClick={handleClickOpen} style={styles.btn}>
        Add todo item
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Typography m={3} align="center" variant="h5">
          Add new Todo item
        </Typography>
        <DialogContent dividers>
          <Box sx={styles.box}>
            <TextField
              onChange={titleHandle}
              fullWidth
              label="Title"
              id="fullWidth"
            />
          </Box>
          <Box sx={styles.box2}>
            <TextField
              onChange={desHandle}
              fullWidth
              label="Description(Recommended)"
              id="fullWidth"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddItem}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
