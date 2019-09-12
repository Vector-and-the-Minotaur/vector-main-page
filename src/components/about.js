import React, {Component, Fragment} from 'react';

import Profile from './profiles'

class About extends Component{

    render(){
        return(
            <div className='about-div'>
                <Profile
                className="Alex"
                name="Alex Reid"
                description="Robot ipsum Pseudopoietic efodon Robot ipsum Pseudopoietic efodon Robot ipsum Pseudopoietic efodon Robot ipsum Pseudopoietic efodon"
                github="https://github.com/surfwalker"
                linkedIn="https://www.linkedin.com/in/"
                />

                <Profile
                className="Aliya"
                name="Aliya Summers"
                description="Robot ipsum Pseudopoietic efodon "
                github="https://github.com/arsummers"
                linkedIn="https://www.linkedin.com/in/aliya-summers/"
                />

                <Profile
                className="Merry"
                name="Merry Cimakasky"
                description="Robot ipsum Pseudopoietic efodon"
                github="https://github.com/MerrybyPractice"
                linkedIn="https://www.linkedin.com/in/merrycimakasky/"
                />

                <Profile
                className="Raven"
                name="Raven Robertson"
                description="Software engineer with a passion for innovation, diversity and team driven success."
                github="https://github.com/ravewillow6383"
                linkedIn="https://www.linkedin.com/in/raven-robertson"
                />  
            </div>
        )
    }
}

export default About