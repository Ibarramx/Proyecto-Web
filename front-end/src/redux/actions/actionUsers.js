import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.delete('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const addUser = createAsyncThunk("users/addUser",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.post('http://187.189.158.186:7777/Usuario', data);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const editUSer = createAsyncThunk("users/editUSer",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.put('http://187.189.158.186:7777/Usuario/'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);