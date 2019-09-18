import React, {Component, Fragment} from 'react';

import Profile from './profiles'

class About extends Component{

    render(){
        return(
            <div className='about-div'>
                <Profile
                className="Alex"
                name="Alex Reid"
                description="Scotsman in the new world expanding his brain and becoming Pythonic in the hope of solving the world's problems."
                github="https://github.com/surfwalker"
                linkedIn="https://www.linkedin.com/in/alex-reid-2a4139104/"
                />

                <Profile
                className="Aliya"
                name="Aliya Summers"
                description="Full stack Python engineer with a strong interest in diversity in tech, teamwork, scifi and fantasy, and strange art projects."
                github="https://github.com/arsummers"
                linkedIn="https://www.linkedin.com/in/aliya-summers/"
                />

                <Profile
                className="Merry"
                name="Merry Cimakasky"
                description="Engineer primarily working in Python and Java with a knack for problem solving and an appreciation for art."
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