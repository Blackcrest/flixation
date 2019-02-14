import React from 'react';

import Tile from './Tile';

export default class Overview extends React.Component {
    renderTiles = () => {
        if(this.props.data === null)
            return;

        const data = this.props.data;

        if(data !== ''){
            return data.results.map(item => {
                return <Tile key={item.id + "-" + (item.hasOwnProperty('title') ? item.title : item.name)} 
                             data={item}
                             title={item.hasOwnProperty('title') ? item.title : item.name}
                             image={item.hasOwnProperty('backdrop_path') ? item.backdrop_path : item.profile_path}
                             type={item.hasOwnProperty('backdrop_path') ? "normal" : "profile"} />
            })
        }
    }

    render(){
        return(
            <div className="result-list">
                {this.renderTiles()}
            </div>
        )
    }
}