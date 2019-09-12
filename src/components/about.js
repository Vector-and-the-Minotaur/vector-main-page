import React, {Component, Fragment} from 'react';
import { browserHistory } from 'react-router';

import placeholder from './profile_mages/placeholder150.png'

import Profile from './profiles'

class About extends Component{
    componentDidMount(){
        browserHistory.push('/about')
    }
    render(){
        return(
            <div>
                <Profile
                img={placeholder}
                name="Alex Reid"
                description="Robot ipsum Pseudopoietic efodon anteeous stethgraphy unilepry. Laparolog palladiocene schizoate mastped "
                github="https://github.com/"
                linkedIn="https://www.linkedin.com/in/"
                />

                <Profile
                img={placeholder}
                name="Aliya Summers"
                description="Robot ipsum Pseudopoietic efodon anteeous stethgraphy unilepry. Laparolog palladiocene schizoate mastped "
                github="https://github.com/"
                linkedIn="https://www.linkedin.com/in/"
                />

                <Profile
                img={placeholder}
                name="Merry Cimakasky"
                description="Robot ipsum Pseudopoietic efodon anteeous stethgraphy unilepry. Laparolog palladiocene schizoate mastped "
                github="https://github.com/"
                linkedIn="https://www.linkedin.com/in/"
                />

                <Profile
                img={placeholder}
                name="Raven Robertson"
                description="Robot ipsum Pseudopoietic efodon anteeous stethgraphy unilepry. Laparolog palladiocene schizoate mastped "
                github="https://github.com/"
                linkedIn="https://www.linkedin.com/in/"
                />  
            </div>
        )
    }
}

export default About