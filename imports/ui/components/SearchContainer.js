import React from 'react';
import history from '../../api/history';

export default class SearchContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: '',
        }
    }

    openSearchToggle = () => {
        Session.set('isSearchOpen', !Session.get('isSearchOpen'));
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
                
                this.openSearchToggle();
            } else{
                console.log('no query')
            }
        }
    }

    render(){
        return(
            <div className="search-container">
                <div className="search-container__title">
                    <h2>Search for Movies, TV shows and more</h2>
                </div>
                <input type="text" 
                       className="search-container__searchbar"
                       id="searchbar"
                       ref="searchbar"
                       value={this.state.query}
                       onChange={this.onQueryChange}
                       onKeyDown={this.onKeyDown} />
                <button className="button button--close search-container__button" onClick={this.openSearchToggle}>X</button>
            </div>
        )
    }
}