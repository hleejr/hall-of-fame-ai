import React from "react"
import { Link } from "react-router-dom"
import { useMatch, useResolvedPath } from "react-router-dom"

export const Navbar = () => {

    const navStyles = {
        backgroundColor: '#61DBFB',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textDecoration: 'none'
    }

    const listStyles = {
        listStyleType:'none',
        display: 'flex',
    }

    return (
        <nav style={navStyles}>
            <Link style={{fontSize: '2rem'}} to="/" className="site-title">hofAI</Link>
            <ul style={listStyles}>
                <li><CustomLink to="/testing">Testing</CustomLink></li>
            </ul>
        </nav>
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