import { createContext,useState } from "react";

export const DataOfOne=createContext(null)

function PersonInfo({children}) {
    const [personInfo,setPersonInfo]=useState()
    return(
        <DataOfOne.Provider value={{personInfo,setPersonInfo}}>
            {children}
        </DataOfOne.Provider>
    )
}

export default PersonInfo