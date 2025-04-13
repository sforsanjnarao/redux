import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';


export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
});


//steps:
//1. create store
//2. wrap your app with Provider
//3. create slice
//4. register reducer in store