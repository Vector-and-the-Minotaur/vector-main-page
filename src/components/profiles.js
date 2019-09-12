import React, {Component, Fragment} from 'react';

class Profile extends Component{
    render(){
        return(
            <Fragment> 

                <img 
                src={this.props.img}
                alt={this.props.alt}
                />
                <h3>
                    {this.props.name}
                </h3>
                <p>
                    {this.props.description}
                </p>
                <a href={this.props.github}  
                        id="icon-github" 
                        target="_blank"
                        >
                        <i class="fab fa-github"></i>
                    </a>

                    <a href={this.props.linkedIn}
                        id="icon-linkedin" 
                        target="_blank"
                        >
                        <i class="fab fa-linkedin"></i>
                    </a>
            </Fragment>
        )
            
        
    }
}

export default Profile;