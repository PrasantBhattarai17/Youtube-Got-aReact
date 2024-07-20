import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import youtubeReducer from "./youtubeSlice";
import searchReducer from "./searchSlice";
const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        youtube:youtubeReducer,
        search:searchReducer,
    }

});


export default appStore;

 