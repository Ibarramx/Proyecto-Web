import { configureStore } from "@reduxjs/toolkit";
import { getUserReducer } from "../slice/usersSlice";
import { getRoleReducer } from "../slice/RolesSlice";

export default configureStore({
    reducer:{
        getUsers: getUserReducer,
        getRole: getRoleReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});