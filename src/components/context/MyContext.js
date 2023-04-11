import React from "react";

const MyContext = React.createContext({});
const MyFunctionContext = React.createContext({});
const MyProvider = MyContext.Provider;
export  {MyProvider, MyContext, MyFunctionContext};