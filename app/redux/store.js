import { createStore } from "redux";
import weatherReducer from "./weatherReducer";

const store = createStore(weatherReducer)

export {store}