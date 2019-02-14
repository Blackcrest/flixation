import React from 'react';

import { getDetail } from '../../api/movieDB/movieQueries';

export default class Detail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.location.state.id,
            result: '' 
        }
    }

    componentDidMount = () => {
        let promise = getDetail(this.state.id);

        promise.then(result => {
            console.log(result)

            this.setState({result});
        })
    }

    render() {
        return(
            <div className="detail">
            {/*
                <div className="detail__information">
                    <div className="detail__backdrop">
                        <img src={"https://image.tmdb.org/t/p/w1400_and_h450_face/" + this.state.result.backdrop_path} />
                    </div>
                    <div>Info</div>
                </div>
            </div>*/}
                    <div className="detail__sidebar">
                        <div className="detail__poster">
                            <img src={"https://image.tmdb.org/t/p/original" + this.state.result.poster_path} />
                        </div>
                    </div>
                    <div className="detail__content">
                        <div className="detail__header">
                            <div className="detail__backdrop">
                                <img src={"https://image.tmdb.org/t/p/original" + this.state.result.backdrop_path} />
                                <div className="detail__header-content">
                                    <h1>{this.state.result.title}</h1>
                                    <div>Genres</div>
                                    <div>Actions</div>
                                    <div>
                                        <h3>Overview</h3>
                                        <p>{this.state.result.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail__content--info">
                            CONTENT INFO
                        </div>
                    </div>
            </div>
        )
    }
}