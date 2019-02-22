import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="page-header__title"><h1>{this.props.title}</h1></div>
                <div className="page-header__sub-title"><p>{this.props.subTitle}</p></div>
                {this.props.children}
            </div>
        )
    }
}