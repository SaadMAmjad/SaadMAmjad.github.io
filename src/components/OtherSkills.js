function OtherSkills() {
    return (
        <div>
            <div className='container transparentAndColour pb-2' style={{marginTop:'10rem'}}>
                <h1 id='otherSkills' className='text-light text-center p-3'>Other Skills</h1>
                <h3 className='p-2 secondaryText'>Non-Programming, Artistic and Other Skills</h3>
                {/* Programming language table */}
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Skill</th>
                            <th scope="col">Experience Level</th>
                            <th scope="col" style={{width: '33%'}}>Notes</th>
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
        </div>
    )
}

export default OtherSkills;