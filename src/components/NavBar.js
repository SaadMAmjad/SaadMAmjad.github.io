function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active px-3">
                            <a className="nav-link" href="#top">Back to Top</a>
                            {/* <span className="sr-only">(current)</span> */}
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#programmingSkills">Programming Skills</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#programmingProjects">Progamming Projects</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#otherSkills">Other Skills</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#otherProjects">Other Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;