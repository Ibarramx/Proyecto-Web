import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoles = createAsyncThunk("users/getRoles",
    async () => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Roles');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getRoleUnique = createAsyncThunk("users/getRoleUnique",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Role/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const deleteRole = createAsyncThunk("users/deleteRole",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.delete('http://187.189.158.186:7777/Role/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const addRole = createAsyncThunk("users/addRole",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.post('http://187.189.158.186:7777/Role', data);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const editRole = createAsyncThunk("users/editRole",
    async (data, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.put('http://187.189.158.186:7777/Role/'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);