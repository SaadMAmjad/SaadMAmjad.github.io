import selfie from '../images/selfie.jpg'
import demo from '../images/Zekelman Part Time Demo Video.mp4'
import iOSdemo from '../images/iOS Project Demo (Game Tracker).mp4'
import glass1 from '../images/Glassio demo img 1.png'
import glass2 from '../images/Glassio demo img 2.png'
import glass3 from '../images/Glassio demo img 3.png'
import glass4 from '../images/Glassio demo img 4.png'
import glass5 from '../images/Glassio demo img 5.png'
import glass6 from '../images/Glassio demo img 6.png'
import comet from '../images/Comet.png'

function Home() {
    return (
        //title/landing section
        <div className='homePage'>
            {/* container for the picture and opening title */}
            <div className='container p-4 transparentAndColour'>
                <div className='row'>
                    {/* Container className by default will take only some of the screen on big devices. add -fluid to it for fullscreen
                    -------------------------------------------------------------------------
                    bootstrap works on a grid system, there are 12 total, this will take 4 of those
                    col-sm is for small screen (phones and stuff). col-md is for medium and col-lg for large
                    smaller ones also work for anything larger. Size is optional, and not putting will apply to all sizes
                    ---------------------------------------------------------------------------
                    can change the order with order-md-1. 
                    md can be small, med or large, and the number is which position it takes (first, second, etc)
                    -----------------------------------------------------------------------------
                    Offset can be added to add space before. offset-2 (number of columns to be skipped it seems)
                    -----------------------------------------------------------------------------
                    Can add padding with p-3 (3 is in rem, a unit related to font size)
                    Also works for only one direction, pt-3 for only top, px-3 for sides, etc
                    -----------------------------------------------------------------------------
                    Add a background color with bg-light. Other options are secondary, success, danger, warning, light, dark etc 
                    -----------------------------------------------------------------------------
                    Add justify-content-center to a row to align stuff to the center horizontally
                    Other options are around, between and evenly
                    Around distributes items evenly with equal space around
                    Between distributes items evenly inline with first item at start and last and end with the space between
                    Evenly is for being more even? idk
                    -----------------------------------------------------------------------------
                    align-items-center for vertical. Other options are start, end, etc. 
                    start and end will be top and bottom for vertical
                    Align works on individual elements too with align-self-center
                    -----------------------------------------------------------------------------
                    Space between items (justifed only possibly) can be set with gx-3 (where 3 is the size of the gap) 
                    */}
                    <div className='col-sm-4'>
                        <img src={selfie} alt="A selfie of me" className='img-fluid' />
                    </div>
                    {/* and this will take the other 8 */}
                    <div className='col-sm-8 align-self-center text-center text-white'>
                        {/* how to import pictures, see the top also */}
                        <h3 className='secondaryText'>Hello! I'm</h3>
                        <h1>Muhammad Saad Amjad</h1>
                        <h3 className='pt-4 secondaryText'>Graduate of Mobile Applications Development</h3>
                        <h3 className='secondaryText'>Hobbyist writer and artist</h3>
                        <h4 style={{marginTop: '4rem', color: 'gray'}}>Check out my work and skills below</h4>
                    </div>
                </div>
            </div>

            {/* padding temporary to make it fill the page */}
            <div className='container transparentAndColour pb-2' style={{marginTop: '15rem'}}>
                <h1 className='text-light text-center p-3'>Programming Skills</h1>
                <h3 className='p-2 secondaryText'>Languages and Markup</h3>
                {/* Programming language table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Technology</th>
                            <th scope="col">Experience Level</th>
                            <th scope="col" style={{width: '25%'}}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='align-middle'>
                            <th scope="row">HTML and CSS</th>
                            <td>Proficient</td>
                            <td>Experienced with Bootstrap too</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">PHP</th>
                            <td>Proficient</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">SQL</th>
                            <td>Some Experience</td>
                            <td>I have used it quite a lot within Laravel's query builder</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Java</th>
                            <td>Proficient</td>
                            <td>Only base Java, I have not tried any frameworks so far</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Javascript</th>
                            <td>Some Experience</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Swift</th>
                            <td>Some Experience</td>
                            <td>I don't personally have a mac, so a bit rusty</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">C#</th>
                            <td>Some Experience</td>
                            <td>Mostly in Unity</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Ruby</th>
                            <td>Only Dabbled</td>
                            <td>Used it for one className in college</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='p-2 secondaryText'>Frameworks and Platforms</h3>
                {/* framework table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Technology</th>
                            <th scope="col">Experience Level</th>
                            <th scope="col" style={{width: '25%'}}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='align-middle'>
                            <th scope="row">React.js</th>
                            <td>Some Experience</td>
                            <td>Used to build this site</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Android (Java)</th>
                            <td>Proficient</td>
                            <td>A bit rusty</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">iOS and XCode</th>
                            <td>Some Experience</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Laravel (PHP)</th>
                            <td>Proficient</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Ruby on Rails</th>
                            <td>Only Dabbled</td>
                            <td></td>
                        </tr>
                        {/* iowa says to remove the stuff I've only dabbled in, making it less human and more 'corperate' */}
                        <tr className='align-middle'>
                            <th scope="row">Unity</th>
                            <td>Some Experience</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Git and GitHub</th>
                            <td>Proficient</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* programming projects section */}
            <div className='container transparentAndColour pb-2 mt-5'>
                <h1 className='text-light text-center p-3'>Programming Projects</h1>
                <div className="accordion" id="accordionExample">
                    {/* accordian trigger (button), can put other stuff in here too, like images or text */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong className='secondaryText'>Zekelman Part-Time</strong>
                            </button>
                        </h2>
                        {/* accordian body, what will actually be shown when clicked. need to figure out how to put vids in here sometime */}
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {/* TODO style this maybe */}
                                <strong>A website built for St Clair College to help manage part time instructors and their timetables.</strong>
                                <p>It features a user side and an admin side.</p>
                                <p>The user side is for instructors to use and includes sections for each day to enter your 
                                    available hours. It also includes a section to select courses you can teach. All this data will be
                                    saved to the application's database. The sections include:</p>
                                <ul>
                                    <li>A welcome page which briefly explains the website and its functionality</li>
                                    <li>The sections for each day of the week (except Sunday) where your available hours 
                                        can be submitted</li>
                                    <li>And lastly, a page where you make requests to teach a certain course. Programs are displayed 
                                        first and clicking on each will display associated courses</li>
                                </ul>
                                <p>The Admin's panel is where information is pulled and displayed. It is divided up between a few 
                                    sections to make information more digestible and easier to scan at a glance. The sections 
                                    include:</p>
                                <ul>
                                    <li>A list of all instructors with edit and deactivate buttons (if they no longer work at the college) 
                                        as well as sub pages for deactivated instructors (to view or reativate) or unresponsive instructors</li>
                                    <li>A timetable of all submitted hours (or indication that none have been submitted). This page 
                                        supports exporting in excel format</li>
                                    <li>A page where all programs and courses are displayed, created, edited or deleted</li>
                                    <li>A list of previous courses taught by each instructor</li>
                                    <li>The current semester, and the ability/create to start a new one</li>
                                    <li>A mass preformated email page, used to request that instructors submit their hours at the 
                                        start of each semester (note that this only includes active instructors)</li>
                                    <li>And finally a page where instructor requests to teach courses are displayed. They are 
                                        granted or denied here by the admin(s)</li>
                                </ul>
                                <strong>Primary Technologies used:</strong>
                                <ul>
                                    <li>Laravel with PHP</li>
                                    <li>MySQL</li>
                                    <li>Bootstrap</li>
                                    <li>And a library used to export to excel format</li>
                                </ul>
                                <strong>Built in collaboration with</strong>
                                <ul>
                                    <li><a className="text-light" href='https://github.com/ryanmurphy01' target='_blank' rel='noreferrer'>Ryan Murphy</a></li>
                                    <li><a className="text-light" href='https://github.com/PhilipRosen01' target='_blank' rel='noreferrer'>Philip Rosen</a></li>
                                </ul>
                                <p>Project GitHub link <a className="text-light" 
                                href='https://github.com/ryanmurphy01/Capstone-Project' target='_blank' rel='noreferrer'>Here</a></p>
                                {/* TODO, these should probably be seperate components, the page is huge now */}
                                <p>See the demo video below:</p>
                                <video width={320} height={240} controls>
                                    <source src={demo} type='video/mp4'></source>
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong className='secondaryText'>Glass.io</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>A Mobile app built to simulate the storefront of a glasses vendor.</strong>
                                <p>It works by pulling items (glasses in this case) and cycling them to simulate fluctuating sales 
                                    and views throughout the day</p>
                                <p>Other features include a wishlist, best selling page and a colourblind test</p>
                                <strong>Primary Technologies used:</strong>
                                <ul>
                                    <li>Android Studio (Java)</li>
                                    <li>Android VM</li>
                                </ul>
                                <strong>Built in collaboration with</strong>
                                <ul>
                                    <li><a className="text-light" href='https://github.com/YonisA' target='_blank' rel='noreferrer'>Yonis Sheekh</a></li>
                                </ul>
                                <p>Project GitHub link <a className="text-light" 
                                href='https://github.com/SaadMAmjad/Android-Project' target='_blank' rel='noreferrer'>Here</a></p>
                                <p>See pictures below for more info (click to zoom):</p>
                                {/* image carasel */}
                                {/* <div id="carouselExampleControls" className="carousel slide w-50 h-50 mx-auto" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={glass1} className="d-block mx-auto" alt="home page" style={{height:'30rem'}}/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={glass2} className="d-block mx-auto" alt="home page" style={{height:'30rem'}}/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={glass3} className="d-block mx-auto" alt="home page" style={{height:'30rem'}}/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div> */}
                                <div className='container'>
                                    <div className='row'>
                                        {/* TODO, compress the images more maybe */}
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal1">
                                                <img className='img-fluid' src={glass1} alt='Home page' loading='lazy'/>
                                            </button>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal2">
                                                <img className='img-fluid' src={glass2} alt='Side bar' loading='lazy'/>
                                            </button>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal3">
                                                <img className='img-fluid' src={glass3} alt='Filter page' loading='lazy'/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal4">
                                                <img className='img-fluid' src={glass4} alt='Colourblind test' loading='lazy'/>
                                            </button>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal5">
                                                <img className='img-fluid' src={glass5} alt='Wishlist delete' loading='lazy'/>
                                            </button>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#modal6">
                                                <img className='img-fluid' src={glass6} alt='Contact us page' loading='lazy'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong className='secondaryText'>Game Tracker</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>A mobile iOS app built to help track games you are playing.</strong>
                                <p>The app home page features a collection view listing games pulled from an API (RAWG API). It can be searched 
                                    and will return any games matching the provided input.</p>
                                <p>You may click on any of the games to list details including rating, release date, etc.</p>
                                <p>From there you can add to your playlist which will track the start date.</p>
                                <p>The playlist screen will show all the games you are currently playing with their start dates.</p>
                                <p>Once a game is complete you can send it to your completed list, or simply remove it if you stopped playing.</p>
                                <p>Completed list will show all games you finished, their start dates and end dates. You may also remove them, 
                                    if added by mistake, for example.</p>
                                <strong>Primary Technologies used:</strong>
                                <ul>
                                    <li>XCode</li>
                                    <li>iPhone VM</li>
                                    <li>RAWG API</li>
                                </ul>
                                <p>See demo video below:</p>
                                <video width={320} height={240} controls>
                                    <source src={iOSdemo} type='video/mp4'></source>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* other skills section and projects will follow this */}
            {/* Skills section */}
            {/* <div className='container mt-5 justify-content-between'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Skills</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h3>Skills</h3>
                    </div>
                </div>
            </div> */}

            <div className='container transparentAndColour pb-2 mt-5'>
                <h1 className='text-light text-center p-3'>Other Skills</h1>
                <h3 className='p-2 secondaryText'>Non-Programming, Artistic and Other Skills</h3>
                {/* Programming language table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Skill</th>
                            <th scope="col">Experience Level</th>
                            <th scope="col" style={{width: '25%'}}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='align-middle'>
                            <th scope="row">Urdu (Language)</th>
                            <td>Intermediate</td>
                            <td>Spoken only. It's similar to Hindi and Panjabi, so I can also understand them to some degree</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Microsoft Office</th>
                            <td>Skilled</td>
                            <td>Only not familiar with Access</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Creative Writing</th>
                            <td>Skilled</td>
                            <td></td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Digital Art and Image Editing</th>
                            <td>Skilled</td>
                            <td>I work rather slowly. Currently using Krita, but also experienced with Photoshop</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Teamwork</th>
                            <td>Skilled</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* not programming projects */}
            <div className='container transparentAndColour p-3 mt-5'>
                <h1 className='text-light text-center p-3'>Other Projects</h1>
                <h3 className='p-2 secondaryText text-center'>Drawings</h3>
                <img src={comet} className="d-block w-100" alt="comet in the night sky" loading='lazy'/>
                <h4 className='ps-2 pt-2' style={{color:'gray'}}>"First Last Moments of Itomori"</h4>
                <p className='ps-2 text-secondary'>Inspired by a scene from the famous movie "Your Name"
                    - View on <a href="https://www.pixiv.net/en/artworks/100750989" className="text-white-50" target='_blank' 
                    rel='noreferrer'>Pixiv</a> for full resolution
                </p>
                {/* put into an accodian maybe? */}
            </div>

            {/* There may be a better way to do this, but that can come later */}
            {/* Modal for first image */}
            <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass1} alt='Home page' loading='lazy'/>
                    </div>
                </div>
            </div>
            {/* Modal for second image */}
            <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass2} alt='Side bar' loading='lazy'/>
                    </div>
                </div>
            </div>
            {/* Modal for third image */}
            <div className="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass3} alt='Filter page' loading='lazy'/>
                    </div>
                </div>
            </div>
            {/* Modal for forth image */}
            <div className="modal fade" id="modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass4} alt='Colourblind test' loading='lazy'/>
                    </div>
                </div>
            </div>
            {/* Modal for fifth image */}
            <div className="modal fade" id="modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass5} alt='Wishlist delete' loading='lazy'/>
                    </div>
                </div>
            </div>
            {/* Modal for sixth image */}
            <div className="modal fade" id="modal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img className='img-fluid' src={glass6} alt='Contact us page' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home