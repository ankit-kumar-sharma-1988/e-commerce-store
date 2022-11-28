import {createStore} from "redux";
import rootReducer from "./redux/reducers/RootReducer";


const store = createStore(rootReducer)

export default store;