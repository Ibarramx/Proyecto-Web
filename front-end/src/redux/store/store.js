import { configureStore } from "@reduxjs/toolkit";
import { listUserReducer } from "../slice/usersSlice";

export default configureStore({
    reducer:{
        listUsers: listUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});