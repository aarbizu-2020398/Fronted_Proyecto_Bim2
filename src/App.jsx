import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";
import React from 'react';
 
export const App = () =>{
 
  let element = useRoutes(routes);
 
  return(
    <>
      {element}
      <Toaster
        position="botton-right"
        reverseOrder={false}
      />
    </>
  )
}