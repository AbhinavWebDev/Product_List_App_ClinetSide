import React, { useState, useRef } from "react";
import './Body.css'
import { useDispatch} from "react-redux";
import { addcategory,getcategory } from "../../Redux/Actions/CategoryActions";
import { Button } from "@mui/material";

function AddCategoryBody({catID,setOpenAdd}) {
  const dispatch = useDispatch();
  const [formDesc,setFormDesc]=useState()
  const CatName = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      CatName: CatName.current.value,
      catID:catID
    };
    dispatch(addcategory(newPost))
    dispatch(getcategory())
    setOpenAdd(false)
   
  };
  return (
    <div className="PostUpdate">
      
      <div>
        <p>Category Name</p>
        <input ref={CatName} required type="text" value={formDesc}
        onChange={(e) => setFormDesc(e.target.value)} />
            <Button  className="button ps-button"
              onClick={handleSubmit} variant="contained">Add</Button>
      </div>
    </div>
  );
}

export default AddCategoryBody;
