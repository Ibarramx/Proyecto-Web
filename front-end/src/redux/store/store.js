import { configureStore } from "@reduxjs/toolkit";
import { getUserReducer } from "../slice/usersSlice";

export default configureStore({
    reducer:{
        getUsers: getUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});