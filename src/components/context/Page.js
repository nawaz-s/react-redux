import React, { useContext } from 'react'
import { UserContext, UserDispatchContext } from './UserProvider';

function Page() {
    const userDetails = React.useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);
    //console.log('userDetails page::', userDetails);
    return (
        <div>Username :{userDetails.username}</div>
    )
}

export default Page

