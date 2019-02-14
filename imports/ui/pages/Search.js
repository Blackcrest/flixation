import React from 'react';

import TabControl from '../components/TabControl/TabControl';
import Overview from '../components/Overview/Overview';

import { searchQuery, explicitSearch } from '../../api/movieDB/searchQueries';
import _ from 'lodash';

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: props.location.state.query,
            selectedTab: 0,
            searchResults: null
        }
    }

    componentDidMount(){
        this.returnSearchResults();

        document.addEventListener('scroll', _.throttle(this.trackScrolling, 500));
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', _.throttle(this.trackScrolling, 500));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.state.query !== this.state.query){
            this.setState({query: nextProps.location.state.query}, () =>{
                this.returnSearchResults();
            })
        }
    }
    
    isBottom(el) {
        return el.getBoundingClientRect().bottom < (window.innerHeight + 600);
    }
    
    trackScrolling = (e) => {
        const wrappedElement = document.getElementById('result-container');
        if (this.isBottom(wrappedElement)) {
            let searchResults = this.state.searchResults;
            let type = '';
            
            if(searchResults[this.state.selectedTab].page === searchResults[this.state.selectedTab].total_results)
                return;

            switch(this.state.selectedTab){
                case 0:
                    type = 'movie';
                    break;
                case 1:
                    type = 'tv';
                    break;
                case 2:
                    type = 'person';
                    break;
            }

            const results = explicitSearch(type, this.state.query, searchResults[this.state.selectedTab].page + 1);

            results.then(data => {
                let oldData = searchResults[this.state.selectedTab];
                let aqcuiredData = data;
                let updatedResults = []

                oldData.page = aqcuiredData.page;
                updatedResults = oldData.results.concat(aqcuiredData.results);
                oldData.results = updatedResults

                searchResults[this.state.selectedTab] = oldData;

                this.setState({searchResults})

            })
        }
    };


    changeTab = (selectedTab) => {
        this.setState({selectedTab});
    }

    returnSearchResults = () => {
        const results = searchQuery(this.state.query);

        Promise.all(results).then(values => {
            this.setState({
                searchResults: values,
                page: values[0].page,
                total_pages: values[0].total_pages
            })
        })
    }

    render(){
        if(this.state.searchResults === null)
            return null;

        return(
            <div className="content">
                <TabControl selectedTab={this.state.selectedTab}
                            items={[[this.state.searchResults[0].total_results, "Movies"],
                                    [this.state.searchResults[1].total_results, "TV Shows"],
                                    [this.state.searchResults[2].total_results, "People"]]}
                            callback={this.changeTab} />
                <div id="result-container" className="result-container">
                    <div className="result-container__message">
                        Results of '{this.state.query}' in Movies.
                    </div>
                    <Overview data={this.state.searchResults[this.state.selectedTab]} />
                </div>
            </div>
        )
    }
}