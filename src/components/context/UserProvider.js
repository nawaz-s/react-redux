import React, {createContext, useState} from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const initialDetails = {
    username: 'Nawaz',
    userProfileId: '91200026',
}

function UserProvider({children}){
    const [userDetails, setUserDetails] = useState(initialDetails);

    return(
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext, UserDispatchContext};