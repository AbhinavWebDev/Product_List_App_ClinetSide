import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../Components/Navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button,Stack, Typography } from "@mui/material";
import AddProductBody from "../../Components/AddBody/AddProductBody";
import { useSelector } from "react-redux";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";



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
export const AddProduct = () => {
  const category = useSelector((state) => state.categoryReducer.category);
  const [addProduct, setAddProduct] = React.useState(false);
  const [catID, setCatID] = React.useState("");
  console.log("iddd", catID);
  const addProductOpen = () => setAddProduct(true);
  const addProductclose = () => setAddProduct(false);
  console.log("category", category);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
                      <ListItemText primary={category.SubCatName} />
                      <ListItemIcon onClick={() => addProductOpen()}>
                        <AddIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  );
                })
              : ""}
          </List>
        </Collapse>
      </List>
      {/* </List> */}

      <Modal
        open={addProduct}
        onClose={addProductclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" ml={45}>
            <Button variant="outlined" onClick={addProductclose}>
              <CloseIcon />
            </Button>
          </Stack>

          <Typography id="modal-modal-title" variant="h5" component="h2">
            Product Detials
          </Typography>

          <AddProductBody catID={catID._id} setOpenEdit={setAddProduct} />
        </Box>
      </Modal>
    </>
  );
};
