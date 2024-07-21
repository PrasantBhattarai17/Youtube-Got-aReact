import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import youtubeReducer from "./youtubeSlice";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice";
const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        youtube:youtubeReducer,
        search:searchReducer,
        filter:filterReducer,
    }

});


export default appStore;

 