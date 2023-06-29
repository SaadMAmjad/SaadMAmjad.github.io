import selfie from '../images/selfie.jpg'

function Home() {
    return (
        //title/landing section
        <div className='homePage'>
            {/* container for the picture and opening title */}
            <div className='container p-4 transparentAndColour'>
                <div className='row'>
                    {/* Container class by default will take only some of the screen on big devices. add -fluid to it for fullscreen
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

            <div className='container transparentAndColour mt-5' style={{paddingBottom: '30rem'}}>
                <div className='row'>
                    <div className='col-sm-6 p-4'>
                        <h1 className='text-light'>Placeholder for testing</h1>
                    </div>
                    <div className='col-sm-6 p-4'>
                        <h1 className='text-light'>Placeholder for testing</h1>
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default Home