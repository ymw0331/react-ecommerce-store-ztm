import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./categories/car";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
})