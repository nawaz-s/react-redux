import React, { Component } from 'react'
import { MyContext } from './MyContext'
import ClassComponent from './ClassComponent'

export default class ClassApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Devi',
            gender: 'Female',
        }
    }
    componentDidMount() { };

    changeClassProfile = () => {
        this.setState({
            name: 'Deva',
            gender: 'Male',
        })
    }

    render() {
        return (
            <MyContext.Provider value={this.state}>
                <ClassComponent changeClassProfile={this.changeClassProfile} />
            </MyContext.Provider>
        )
    }
}