function Navbar() {
    return (
        // TODO, navbar don't work with the context menu on mobile. figure out why
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active px-3">
                            {/* todo may need to change if the navbar comes with you when you scroll, or this is useless */}
                            <a className="nav-link" href="#">Back to Top</a>
                            {/* <span className="sr-only">(current)</span> */}
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;