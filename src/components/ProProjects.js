import demo from '../images/Zekelman Part Time Demo Video.mp4'
import iOSdemo from '../images/iOS Project Demo (Game Tracker).mp4'
import glass1 from '../images/Glassio demo img 1.png'
import glass2 from '../images/Glassio demo img 2.png'
import glass3 from '../images/Glassio demo img 3.png'
import glass4 from '../images/Glassio demo img 4.png'
import glass5 from '../images/Glassio demo img 5.png'
import glass6 from '../images/Glassio demo img 6.png'
import preview from '../images/preview.png'


function ProProjects() {
    return ( //component for programming projects accordian and needed modals
        <div>
            <div className='container transparentAndColour pb-2 mt-5'>
                <h1 id='programmingProjects' className='text-light text-center p-3'>Programming Projects</h1>
                <div className="accordion" id="accordionExample">
                    {/* accordian trigger (button), can put other stuff in here too, like images or text */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong className='secondaryText'>Zekelman Part-Time</strong>
                            </button>
                        </h2>
                        {/* accordian body, what will actually be shown when clicked. */}
                        <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <strong className='secondaryText'>GUI Webscrapper (New)</strong>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>An app built in Python using Beautiful Soup, Tkinter, and PyInstaller</strong>
                                <p>Pulls data from a safe to scrape website: <a className='text-light' href='http://books.toscrape.com/' 
                                target='_blank' rel='noreferrer'>http://books.toscrape.com/</a></p>
                                <p>Enter the book you wish to search for, or leave blank to see all books on the site</p>
                                <p>Matching results are returned with information on title, price, rating, stock status and links</p>
                                <p>Use the clear button to reset the table</p>

                                <strong>Primary Technologies used:</strong>
                                <ul>
                                    <li>Python</li>
                                    <li>Beautiful Soup</li>
                                    <li>Tkinter and Custom Tkinter</li>
                                    <li>PyInstaller</li>
                                </ul>
                                <p>Project GitHub link <a className="text-light"
                                href='https://github.com/SaadMAmjad/Webscrapper' target='_blank' rel='noreferrer'>Here</a></p>
                                <p>See preview image:</p>
                                <img className='img-fluid' src={preview} alt='GUI Webscrapper layout preview' loading='lazy'/>
                            </div>
                        </div>
                    </div>
                </div>
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
    )
}

export default ProProjects;