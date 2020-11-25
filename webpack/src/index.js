import React from 'react'
import ReactDOM from 'react-dom'

/** SIMPLE */

//ReactDOM.render('Hello World', document.getElementById('app'))

/** WITH HTML */

// ReactDOM.render(
//     React.createElement('h1', null, 'Hola Mundo'),
//     document.getElementById('app')
// )

/** WITH JSX THROUGH BABEL */

ReactDOM.render(
    <h1>Hola Mundo 😃</h1>,
    document.getElementById('app')
)