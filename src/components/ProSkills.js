function ProSkills() {
    return ( //component for the programming languages and skills section
        <div>
            <div className='container transparentAndColour pb-2' style={{marginTop: '15rem'}}>
                <h1 id='programmingSkills' className='text-light text-center p-3'>Programming Skills</h1>
                <h3 className='p-2 secondaryText'>Languages and Markup</h3>
                {/* Programming language table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Technology</th>
                            <th scope="col">Experience Level</th>
                            <th scope="col" style={{width: '33%'}}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='align-middle'>
                            <th scope="row">HTML and CSS</th>
                            <td>Proficient</td>
                            <td>Experienced with Bootstrap</td>
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
                            <td>Out of practice since I don't have a Mac</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">C#</th>
                            <td>Some Experience</td>
                            <td>Mostly in Unity</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Ruby</th>
                            <td>Only Dabbled</td>
                            <td>Used it a little in college</td>
                        </tr>
                        <tr className='align-middle'>
                            <th scope="row">Python</th>
                            <td>Learning</td>
                            <td>No frameworks yet, but a few libraries</td>
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
                            <th scope="col" style={{width: '33%'}}>Notes</th>
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
                            <td>Out of practice since I've been working with web more</td>
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
        </div>
    )
}

export default ProSkills;