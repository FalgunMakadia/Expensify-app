import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h3>404! Page Not Found</h3> <Link to='/'>Home</Link>
    </div>
)

export default NotFoundPage