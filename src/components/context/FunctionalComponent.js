import React, { useContext } from 'react'
import { MyContext, MyFunctionContext } from './MyContext'
import { Button } from 'react-bootstrap';

function FunctionalComponent() {
    const { name, age } = useContext(MyContext);
    const changeProfile = useContext(MyFunctionContext);

    const updateDetails = () => {
        changeProfile({ name: 'Nawaz', age: 27 });
    }

    return (
        <div>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <Button onClick={updateDetails}>Change Functional Profile</Button>
        </div>
    )
}

export default FunctionalComponent