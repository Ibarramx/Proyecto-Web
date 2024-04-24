import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("usuarios/listaUsuarios",
    async ({rejectWithValue}) => {
        try
        {      
            const resp = await axios.get('/api/configuracion/usuarios');

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);
