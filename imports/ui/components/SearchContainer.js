import React from 'react';
import history from '../../api/history';

export default class SearchContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: ''
        }
    }

    onQueryChange = (e) => {
        this.setState({query: e.target.value})
    }

    onKeyDown = (e) => {
        if(e.keyCode === 13){
            if(this.state.query.length > 0){
                history.push({
                    pathname: '/search',
                    search: '?query=' + this.state.query,
                    state: { query: this.state.query }
                })

                this.setState({ query: '' });

                this.refs.searchbar.blur();
            } else{
                console.log('no query')
            }
        }
    }

    render(){
        return(
            <div className="search-container">
                <input type="text" 
                       ref="searchbar"
                       placeholder="search for movies, tv shows keywords etc."
                       value={this.state.query}
                       onChange={this.onQueryChange}
                       onKeyDown={this.onKeyDown} />
            </div>
        )
    }
}