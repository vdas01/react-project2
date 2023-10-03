import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{
   const data = {};

   <AppContext.Provider value={data}>
       {children}
   </AppContext.Provider>
}

export {AppContext,AppProvider};