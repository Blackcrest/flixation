import React from 'react';

export default class Dropdown extends React.Component {
    renderOptions = () => {
        let items = [];

        if(this.props.range !== undefined){
            let start = this.props.range[0];
            let end = this.props.range[1];

            for(end; end >= start; end--){
                items.push(<option key={end} value={end}>{end}</option>);
            }
        }

        if(this.props.options !== undefined){
            this.props.options.map(option => {
                const key = Object.keys(option)[0];
                const value = option[key];

                items.push(<option key={key} value={key}>{value}</option>);
            })
        }

        return items;
    }

    onSelectChange = (e) => {
        if(this.props.callback)
            this.props.callback(e.target.value);
    }

    render(){
        return(
            <div>
                <label>{this.props.title}</label>
                <select value={this.props.value} onChange={this.onSelectChange}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}