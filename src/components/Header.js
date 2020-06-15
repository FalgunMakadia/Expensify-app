import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' className='header-navlink' exact={true}> HOME </NavLink>
        <NavLink to='/create' activeClassName='is-active' className='header-navlink'> CREATE </NavLink>
        <NavLink to='/help' activeClassName='is-active' className='header-navlink'> HELP </NavLink>
    </div>
)

export default Header