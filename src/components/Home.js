import selfie from '../images/selfie.jpg'
import ProSkills from './ProSkills'
import ProProjects from './ProProjects';
import OtherSkills from './OtherSkills';
import OtherProjects from './OtherProjects';

function Home() {
    return (
        //title/landing section
        <div className='homePage'>
            {/* container for the picture and opening title */}
            <div className='container p-4 transparentAndColour'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={selfie} alt="A selfie of me" className='img-fluid' />
                    </div>

                    <div className='col-sm-8 align-self-center text-center text-white'>
                        <h3 className='secondaryText'>Hello! I'm</h3>
                        <h1>Muhammad Saad Amjad</h1>
                        <h3 className='pt-4 secondaryText'>Graduate of Mobile Applications Development</h3>
                        <h3 className='secondaryText'>Hobbyist writer and artist</h3>
                        <h4 style={{marginTop: '4rem', color: 'gray'}}>Check out my work and skills below</h4>
                    </div>
                </div>
            </div>

            {/* contains the programming skills and frameworks table */}
            <ProSkills/>

            {/* contains the programming projects accordian along with video and images (also the image modals) */}
            <ProProjects/>

            {/* contains the table for non programming skills */}
            <OtherSkills/>

            {/* contains the other non programming projects */}
            <OtherProjects/>
        </div>
    );
}

export default Home