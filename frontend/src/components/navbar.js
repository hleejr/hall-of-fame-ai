import React from "react"
import { Link } from "react-router-dom"
import { useMatch, useResolvedPath } from "react-router-dom"
import { NavBar, List } from "../styles/navbar"

export const Navbar = () => {

    return (
        <NavBar>
            <Link style={{fontSize: '2rem'}} to="/">hofAI</Link>
            <List>
                <li><CustomLink to="/testing">Testing</CustomLink></li>
            </List>
        </NavBar>
    )   
}

function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}