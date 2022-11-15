import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../Components/Navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";
import Add from "../../Components/AddBody/AddCategoryBody";
import { useDispatch, useSelector } from "react-redux";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Stack from "@mui/material/Stack";
import { getcategory } from "../../Redux/Actions/CategoryActions";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 500,
};
export const AddCategory = () => {
  const dispatch = useDispatch();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [catID, setCatID] = React.useState("");
  const handleOpen = () => setOpenAdd(true);
  const handleClose = () => setOpenAdd(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    dispatch(getcategory());
  }, []);
  const category = useSelector((state) => state.categoryReducer.category);
  return (
    <>
      <Navbar />

      <List
        sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Categories
          </ListSubheader>
        }
      >
        <ListItemButton
          onClick={() => {
            setCatID("");
            handleOpen();
          }}
          sx={{ mt: 0, bgcolor: "Grey", position: "sticky" }}
        >
          <ListItemText primary="Add New Category" />
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
        </ListItemButton>
        {category.map((category) => {
          return (
            <>
              <ListItemButton
                onClick={() => {
                  setCatID(category);
                  handleClick();
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={category.CatName} />
              </ListItemButton>
            </>
          );
        })}

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {catID
              ? catID.SubCat.map((category) => {
                  return (
                    <ListItemButton
                      sx={{ width: "100%", maxWidth: 260, bgcolor: "grey" }}
                    >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary={category.SubCatName} />
                    </ListItemButton>
                  );
                })
              : ""}

            <ListItemButton onClick={() => handleOpen()}>
              <ListItemText primary="Add New Sub Category" />
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Modal
        open={openAdd}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" ml={45}>
            <Button variant="outlined" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Stack>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add Category
          </Typography>
          <Add catID={catID._id} setOpenAdd={setOpenAdd} />
        </Box>
      </Modal>
    </>
  );
};
