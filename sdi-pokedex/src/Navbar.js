import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className = "col-md-6 offset-md-3">
              <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Navbar;