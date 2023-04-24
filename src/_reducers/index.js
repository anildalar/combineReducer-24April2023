import { combineReducers } from "redux";
import { addSubRedFunc } from "./AddSubReducer";
import { MulDivRedFunc } from "./MulDivReducer";

export default combineReducers({
    //1. P:V
    //2. Method
    addSubRedFunc:addSubRedFunc,
    MulDivRedFunc:MulDivRedFunc
})