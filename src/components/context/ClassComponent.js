import React, { Component } from 'react'
import { MyContext } from './MyContext'
import { Button } from 'react-bootstrap'

export default class ClassComponent extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {({ name, gender }) => (
                    <div>
                        <p>My name is {name}</p>
                        <p>I am a {gender}</p>
                        <Button onClick={this.props.changeClassProfile}>Change Class Profile</Button>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}
