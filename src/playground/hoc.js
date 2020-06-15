// Higher Order Component ==> a component that renders other components
// One HOC can render more than one regular component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is : {props.info}</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return(
            <div>
                {props.isAuthenticated ? <WrappedComponent {...props}/> : <h3>User is not Authenticated!</h3>}
            </div>
        )
    }
}

const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={true} info={'This is some classified information!'}/>, document.getElementById('app'))

const withAdminWarning = (WrappedComponent) => {     // This is the function that returns a HOC
    return (props) => {
        return (
            <div>
                <h3>Warning : {props.admininfo}</h3>
                <WrappedComponent {...props} /> 
            </div>
        )
    }
}

// const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo admininfo={'Do not share this data with anyone.'} info={'This is some Classified Information.'}/>, document.getElementById('app'))