import * as UploadApi from "../../Api/CategoryRequest";



export const addcategory = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newCategory = await UploadApi.addcategory(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newCategory.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const getcategory = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await UploadApi.getcategory();
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

