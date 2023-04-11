import React, { useState } from 'react';
import { MyContext, MyFunctionContext } from './MyContext';
import FunctionalComponent from './FunctionalComponent';

function FunctionalApp() {
    const [details, setDetails] = useState({ name: 'John', age: 40 });
    return (
        <MyContext.Provider value={details}>
            <MyFunctionContext.Provider value={setDetails}>
                <FunctionalComponent />
            </MyFunctionContext.Provider>
        </MyContext.Provider>
    )
}

export default FunctionalApp