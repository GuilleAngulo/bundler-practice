import React from 'react'
import ReactDOM from 'react-dom'

/** SIMPLE */

//ReactDOM.render('Hello', document.getElementById('app'))

/** WITH HTML */

// ReactDOM.render(
//     React.createElement('h1', null, 'Hello World'),
//     document.getElementById('app')
// )

/** WITH JSX THROUGH BABEL */

ReactDOM.render(
    <h1>Hello World 😃</h1>,
    document.getElementById('app')
)