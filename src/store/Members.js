import { createContext, useState } from "react";

export  const MemberContext=createContext(null)

function Member({children}){
    const [members,setMembers]=useState()
    return(
        <MemberContext.Provider value={{members,setMembers}} >
            {children}
        </MemberContext.Provider>
    )
    
}

export default Member

