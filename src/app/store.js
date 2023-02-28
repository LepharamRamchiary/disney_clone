import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import userReducer from "../featurs/user/userSlice";
import movieReducer from "../featurs/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})