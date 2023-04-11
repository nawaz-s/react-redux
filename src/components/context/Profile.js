import React, { useContext } from 'react'
import { UserContext, UserDispatchContext } from './UserProvider';
import { Button } from 'react-bootstrap';

function Profile() {
    const userDetails = React.useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);
    //console.log('userDetails profile::', userDetails);

    const changeProfile = () => {
        setUserDetails({ username: 'Devendra', userProfileId: '91200045' });
    }
    return (
        <>
            <div>Profile ID :{userDetails.userProfileId}</div>
            <Button onClick={changeProfile}>Change Profile</Button>
        </>
    )
}

export default Profile