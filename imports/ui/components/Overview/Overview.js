import React from 'react';

import Tile from './Tile';

export default class Overview extends React.Component {
    setImage = (item) => {

        if(item.hasOwnProperty('backdrop_path')){
            if(item.backdrop_path !== null){
                return item.backdrop_path;
            } else{
                return item.poster_path;
            }
        } else{
            return item.profile_path;
        }
    }

    renderTiles = () => {
        if(this.props.data === null)
            return;

        const data = this.props.data.hasOwnProperty('results') ? this.props.data.results : this.props.data;

        console.log(data);

        if(data !== ''){
            return data.map(item => {
                return <Tile key={item.id + "-" + (item.hasOwnProperty('title') ? item.title : item.name)} 
                             data={item}
                             title={item.hasOwnProperty('title') ? item.title : item.name}
                             image={this.setImage(item)}
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