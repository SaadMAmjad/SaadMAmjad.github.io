import comet from '../images/Comet.png'

function OtherProjects() {
    return (
        <div>
            {/* not programming projects */}
            <div className='container transparentAndColour p-3 mt-5'>
                <h1 id='otherProjects' className='text-light text-center p-3'>Other Projects</h1>
                <div className="accordion" id="otherProjectsList">
                    {/* accordian trigger (button), can put other stuff in here too, like images or text */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="drawing">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#drawingControl" aria-expanded="true" aria-controls="drawingControl">
                                <strong className='secondaryText'>Latest Drawing</strong>
                            </button>
                        </h2>
                        {/* accordian body, what will actually be shown when clicked. need to figure out how to put vids in here sometime */}
                        <div id="drawingControl" className="accordion-collapse show" aria-labelledby="drawing" data-bs-parent="#otherProjectsList">
                            {/* modal trigger for drawing zoom */}
                            <button className='bg-dark' type="button" data-bs-toggle="modal" data-bs-target="#artModal">
                                <img src={comet} className="d-block w-100" alt="comet in the night sky" loading='lazy'/>
                            </button>
                            <h4 className='ps-3 pt-3' style={{color:'gray'}}>"First Last Moments of Itomori"</h4>
                            <p className='ps-3 text-secondary'>Inspired by a scene from the famous movie "Your Name"
                                - Click to zoom on mobile or view on <a href="https://www.pixiv.net/en/artworks/100750989" className="text-white-50" target='_blank' 
                                rel='noreferrer'>Pixiv</a> for full resolution
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="writing">
                            <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#writingControl" aria-expanded="false" aria-controls="writingControl">
                                <strong className='secondaryText'>Book Snippet</strong>
                            </button>
                        </h2>
                        <div id="writingControl" className="accordion-collapse collapse" aria-labelledby="writing" data-bs-parent="#otherProjectsList">
                            <div className="accordion-body">
                                <blockquote class="blockquote pb-2">
                                    <p>A little later I hear the door open, briefly allowing outside ambience in. 
                                        Someone sighs after it shuts. Then it's like I'm alone again for a few seconds before 
                                        footsteps begin.
                                    </p>
                                    <p style={{textIndent:'36px'}}>The distinct tap of flat shoes echoes with 
                                        each step and grows louder as whoever it is nears. This atmosphere reminds me of a certain 
                                        movie and makes me jump when a wavy black mass rounds the corner. A girl's hair, on second glance. She's looking 
                                        into the other corner then turns to me and freezes.
                                    </p>
                                    <p style={{textIndent:'36px'}}>"… How long have you been there?" she asks 
                                        and walks past the wall, fully into view.
                                    </p>
                                </blockquote>
                                <p className='lead border-top border-secondary p-2'>From my current project "The Lonely Hall", 
                                    a slice-of-life and romance book 
                                    - Read latest version on <a href="https://docs.google.com/document/d/19je2Ab7l-zVoMn139jdAVFeQnQXtZl4X2cOLJUall8M" className="text-white-50" target='_blank' 
                                    rel='noreferrer'>Google Docs</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* drawing modal */}
            <div className="modal fade" id="artModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <img className='img-fluid' src={comet} alt='Side bar' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects;