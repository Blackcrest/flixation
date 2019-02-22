import React from 'react';

export default class Button extends React.Component{
    render() {
        return(
            <button className={"button" + (this.props.type ? " button--" + this.props.type : '') + (this.props.active ? " button--" + this.props.type + " button--active" : '')}
                    onClick={this.props.callback}>
                {this.props.name}
            </button>
        )
    }
}