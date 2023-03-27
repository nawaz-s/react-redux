import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
import { Button, Card } from 'react-bootstrap';
import LoadingSpinner from './Spinner';

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, [])

    const getView = () => {
        return userData.error ?
            <h2>{userData.error}</h2>
            :
            <div>
                {
                    userData && userData.users &&
                    <div className='row'>
                        {userData.users.map((user, i) => {
                            return (
                                <div className='col-12 col-md-4 col-lg-3' key={i}>
                                    <Card>
                                        <Card.Body>
                                            <p>Name : {user.name}</p>
                                            <p>Username : {user.username}</p>
                                            <p>Email : {user.email}</p>
                                            <Button>Edit</Button>
                                            <Button variant='danger'>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
    }

    return userData.loading ? <LoadingSpinner /> : getView()
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);