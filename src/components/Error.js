import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div>{this.props.message}</div>
        )
    }
}
