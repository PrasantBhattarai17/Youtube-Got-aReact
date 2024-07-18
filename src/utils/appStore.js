import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import youtubeReducer from "./youtubeSlice";
 
const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        youtube:youtubeReducer,
    }

});


export default appStore;

 