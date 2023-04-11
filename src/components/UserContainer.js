import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser, editUser } from '../redux';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import LoadingSpinner from './Spinner';

function UserContainer({ userData, fetchUsers, editUser, deleteUser }) {
    const [user, setUser] = useState(null);
    const [openModal, setModalStatus] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    const toggleModalStatus = () => {
        setModalStatus(!openModal);
    }

    const selectUser = (user) => {
        setUser(user);
        toggleModalStatus();
        setUsername(user.username);
    }

    const onSubmit = () => {
        const data = user;
        data.username = username;
        editUser(data.id, data);
        toggleModalStatus();
    }

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
                                            <p>Age : {user.age}</p>
                                            <Button onClick={()=>selectUser(user)}>Edit</Button>
                                            <Button variant='danger' onClick={()=> deleteUser(user.id)}>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
    }

    return(
        <div>
            {userData.loading ? <LoadingSpinner /> : getView()}
            <Modal show={openModal} onHide={toggleModalStatus} centered>
                <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control plaintext readOnly  defaultValue={user?.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={toggleModalStatus}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        editUser: (id, data) => dispatch(editUser(id,data)),
        deleteUser: (id) => dispatch(deleteUser(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);