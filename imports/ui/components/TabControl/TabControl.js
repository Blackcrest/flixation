import React from 'react';

import TabControlTab from './TabControlTab';

export default class TabControl extends React.Component {
    renderTabs = () => {
        return this.props.items.map((item, idx) => {
            return (
                <TabControlTab key={"tab-" +  idx}
                               selected={this.props.selectedTab === idx ? true : false}
                               idx={idx}
                               value={item[0]}
                               name={item[1]}
                               clickAction={this.props.callback} />
            )
        })
    }

    render(){
        return(
            <div className="tab-control">
                {this.renderTabs()}
            </div>
        )
    }
}