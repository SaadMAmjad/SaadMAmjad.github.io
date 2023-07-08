import linkedin from '../images/Linkedin logo.png'
import GitHub from '../images/Git logo.png'
// import Email from '../images/Email.png'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-center text-lg-start pb-2">
                {/* container */}
                <div className="container p-4">
                    {/* row */}
                    <div className="row">
                        {/* column */}
                        <div className="col-xs-4 col-sm-3 mb-4 mb-md-0">
                            <h5 className="text-uppercase text-light">Connect with me</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    {/* margin left and right are now start and end, so s or e */}
                                    <a href="https://www.linkedin.com/in/m-saad-amjad-594749221/" className="text-light" target='_blank' rel='noreferrer'>
                                        <img className='me-2' style={{maxWidth: '1.4rem'}} src={linkedin} alt="linkedin logo"></img>
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/SaadMAmjad" className="text-light" target='_blank' rel='noreferrer'>
                                        <img className='me-2' style={{maxWidth: '1.4rem'}} src={GitHub} alt="GitHub logo"></img>
                                        GitHub
                                    </a>
                                </li>
                                {/* putting an email publically could be trouble */}
                                {/* <li>
                                <a href="#!" className="text-light">
                                        <img className='me-2' style={{maxWidth: '1.4rem'}} src={Email} alt="Mail Icon"></img>
                                        Email
                                    </a>
                                </li> */}
                            </ul>
                        </div>

                        {/* column */}
                        <div className="col-xs-8 col-sm-6 pt-3">
                            <h6 className="text-uppercase text-light text-center">Drawings and Stories are my own works</h6>
                            <h6 className="text-light text-center">Copyright © 2023</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;