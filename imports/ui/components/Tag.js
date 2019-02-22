import React from 'react';

export default class Tag extends React.Component{
    render() {
        return(
            <div className="tag">
                {this.props.name}
            </div>
        )
    }
}