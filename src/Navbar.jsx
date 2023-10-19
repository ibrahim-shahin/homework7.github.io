import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
            <h5 className="my-0 font-weight-normal">Company name</h5>
            <nav className="my-2  ms-auto mr-3">
                <Link className="p-2 text-dark" to="/Enterprize">Enterprise</Link>
                <Link className="p-2 text-dark" to="/Features">Features</Link>
                <Link className="p-2 text-dark" to="/support">Support</Link>
                <Link className="p-2 text-dark" to="/">Pricing</Link>
            </nav>
            <a className="btn btn-outline-primary" to="#">Sign up</a>
        </div>
    )
}

export default Navbar