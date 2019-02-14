import React from 'react';

export default class TabControlTab extends React.Component {
    clickTab = () => {
        if(this.props.clickAction)
            this.props.clickAction(this.props.idx);
    }

    render(){
        return(
            <div className={"tab-control__tab" + (this.props.selected ? " selected" : "")} onClick={this.clickTab}>
                <div className="tab-control__value">{this.props.value}</div>
                <div className="tab-name">{this.props.name}</div>
            </div>
        )
    }
}