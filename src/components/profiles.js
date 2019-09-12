import React, {Component, Fragment} from 'react';

class Profile extends Component{
    render(){
        return(
            <Fragment> 
                <div className={this.props.className}>
                <h3>
                    {this.props.name}
                </h3>
                <p>
                    {this.props.description}
                </p>
                <p>
                <a href={this.props.github}>Github </a>
                </p>
                <p>
                <a href={this.props.linkedIn} > LinkedIn</a>  
                </p>
                
                </div>
            </Fragment>
        )
            
        
    }
}

export default Profile;