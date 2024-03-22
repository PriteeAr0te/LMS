import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faHome} style={{fontSize:23, color: '#e0e1dd', marginRight: '5px' }} />
                                <Link className="nav-link active" aria-current="page" to="/" style={{ fontSize: '30px', color: '#e0e1dd' }}>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className=" btn btn-primary mx-2" to="/login">Login</Link>
                            <Link className="btn btn-primary mx-2" to="/signup">Signup</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
