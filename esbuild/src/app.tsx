import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Component from './components/Component'


const message: string = 'Hello World in Typescript'

ReactDOM.render(
    <Component  message={message} />, 
    document.getElementById('app')
)
