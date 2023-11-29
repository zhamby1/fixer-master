const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
            <a className="navbar-brand" href="#">WebSiteName</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navb" className="navbar-collapse collapse hide">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Page 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Page 2</a>
                </li>
                </ul>

                <ul className="nav navbar-nav float-end">
                <li className="nav-item">
                    <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
                </li>
                </ul>
            </div>
            </nav>
        </>
        
    )
}

export default NavBar