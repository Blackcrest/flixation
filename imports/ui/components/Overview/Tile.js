import React from 'react';
import history from '../../../api/history';

import moment from 'moment';

export default class Tile extends React.Component {
    navigateToDetail = () => {
        console.log('show detail of:', this.props.data.id);

        history.push({
            pathname: '/detail',
            search: '?id=' + this.props.data.id,
            state: { id: this.props.data.id }
        })
    }

    render(){
        return(
            <div className={"tile tile--" + this.props.type} onClick={this.navigateToDetail}>
                <div className="tile__backdrop">
                    <img src={"https://image.tmdb.org/t/p/w500/" + this.props.image} />
                </div>
                <div className="tile__information-block">
                    <div className="tile__title">{this.props.title}</div>
                    <div className="tile__release">{moment(this.props.data.release_date).format('LL')}</div>
                </div>
            </div>
        )
    }
}